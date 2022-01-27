'use strict';

const TronWeb = require('tronweb');

const {
  keccak,
  formatUnits,
  getCreate2TronAddress,
} = require('./shared/utilities');

const getProvider = () => {
  const remoteProviderURL = process.env.REMOTE_PROVIDER_URL;
  const remoteProviderAPIKey = process.env.REMOTE_PROVIDER_API_KEY;
  const privateKey = process.env.PRIVATE_KEY;
  if (remoteProviderURL && remoteProviderAPIKey && privateKey) {
    return new TronWeb({
      fullHost: remoteProviderURL,
      headers: { 'TRON-PRO-API-KEY': remoteProviderAPIKey },
      privateKey: privateKey,
    });
  } else {
    throw new Error('Function has not been configured properly!');
  }
};

const getWalletAddress = (id) => {
  const walletFactoryAddress = process.env.WALLET_FACTORY_ADDRESS;
  const initcode = process.env.INIT_CODE_HASH;
  if (id) {
    const identifier = keccak(id);
    if (walletFactoryAddress && initcode) {
      return getCreate2TronAddress(walletFactoryAddress, identifier, initcode);
    } else {
      throw new Error('Function has not been configured properly!');
    }
  } else {
    throw new Error('Provided User UUID is not valid!');
  }
};

module.exports.createWallet = async (event) => {
  try {
    const id = event.pathParameters.id;
    console.info(`Creating wallet for a user with UUID: ${id}`);
    const identifier = keccak(id);

    const walletFactoryAddress = process.env.WALLET_FACTORY_ADDRESS;
    if (walletFactoryAddress) {
      console.info(
        `Calling WalletFactory to create wallet for a user with UUID: ${id}`
      );
      const tronWeb = getProvider();
      const walletFactory = await tronWeb.contract().at(walletFactoryAddress);
      const tx = await walletFactory.createWallet(identifier).send({
        feeLimit: process.env.FEE_LIMIT || 200000000,
      });
      console.log(`Wallet Creation Transaction: ${tx}`);
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            user: {
              id: id,
              status: 'WALLET_CREATION_IN_PROGRESS',
              transaction: tx,
            },
          },
          null,
          2
        ),
      };
    } else {
      throw new Error('Function has not been configured properly!');
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          error: {
            message: 'Failed to create wallet for the user!',
            cause: e,
          },
        },
        null,
        2
      ),
    };
  }
};

module.exports.getWallet = async (event) => {
  try {
    const id = event.pathParameters.id;
    console.info(`Getting wallet address for a user with UUID: ${id}`);
    const address = getWalletAddress(id);
    console.log(
      `Calculated wallet address of a user with UUID: ${id} = ${address}`
    );
    return {
      statusCode: 200,
      body: JSON.stringify(
        {
          user: {
            id: id,
            address: address,
          },
        },
        null,
        2
      ),
    };
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          error: {
            message: 'Failed to get a wallet address for the user!',
            cause: e,
          },
        },
        null,
        2
      ),
    };
  }
};

module.exports.getWalletBalance = async (event) => {
  try {
    const id = event.pathParameters.id;
    console.info(`Getting wallet balance for a user with UUID: ${id}`);
    const address = getWalletAddress(id);
    console.log(
      `Calculated wallet address of a user with UUID: ${id} = ${address}`
    );
    const tronWeb = getProvider();
    const wallet = await tronWeb.contract().at(address);
    const walletOwner = await wallet.owner().call();
    console.log('walletOwner', walletOwner);

    const tokenAddress = process.env.TOKEN_ADDRESS;
    if (tokenAddress) {
      console.log(
        `Getting balance of wallet '${address}' for token '${tokenAddress}'`
      );
      const token = await tronWeb.contract().at(tokenAddress);
      // const name = await contract.name().call();
      const symbol = process.env.TOKEN_SYMBOL || (await token.symbol().call());
      const decimals =
        process.env.TOKEN_DECIMALS || (await token.decimals().call());
      const balance = await token.balanceOf(address).call();
      const formattedBalance = formatUnits(balance, decimals);
      console.log(
        `Token Balance of wallet = ${formattedBalance} ${symbol} (${balance})`
      );
      return {
        statusCode: 200,
        body: JSON.stringify(
          {
            user: {
              id: id,
              address: address,
              token: {
                // name: name,
                // symbol: symbol,
                // address: tokenAddress,
                // decimals: decimals,
                balance: formattedBalance,
              },
            },
          },
          null,
          2
        ),
      };
    } else {
      throw new Error('Function has not been configured properly!');
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          error: {
            message: 'Failed to get wallet balance for the user!',
            cause: e,
          },
        },
        null,
        2
      ),
    };
  }
};

module.exports.transfer = async (event) => {
  try {
    const id = event.pathParameters.id;
    console.info(
      `Transferring deposit from a wallet to treasury for the user with UUID: ${id}`
    );

    const address = getWalletAddress(id);
    console.log(
      `Calculated wallet address of a user with UUID: ${id} = ${address}`
    );
    const tokenAddress = process.env.TOKEN_ADDRESS;
    const walletFactoryAddress = process.env.WALLET_FACTORY_ADDRESS;
    if (tokenAddress && walletFactoryAddress) {
      console.log(
        `Getting balance of wallet '${address}' for token '${tokenAddress}'`
      );
      const tronWeb = getProvider();
      const tokenContract = await tronWeb.contract().at(tokenAddress);
      const symbol =
        process.env.TOKEN_SYMBOL || (await tokenContract.symbol().call());
      const decimals =
        process.env.TOKEN_DECIMALS || (await token.decimals().call());
      const balance = await tokenContract.balanceOf(address).call();
      const formattedBalance = formatUnits(balance, decimals);
      console.log(
        `Token Balance of wallet = ${formattedBalance} ${symbol} (${balance})`
      );
      if (!balance.isZero()) {
        console.info(
          `Calling WalletFactory to transfer deposit from wallet to treasury`
        );
        const walletFactory = await tronWeb.contract().at(walletFactoryAddress);
        const tx = await walletFactory
          .transferFrom(address, tokenAddress, balance)
          .send({
            feeLimit: process.env.FEE_LIMIT || 20000000,
          });
        console.log(`Treasury Transfer Transaction: ${tx}`);
        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              user: {
                id: id,
                status: 'TREASURY_TRANSFER_INITIATED',
                transaction: tx,
              },
            },
            null,
            2
          ),
        };
      } else {
        return {
          statusCode: 200,
          body: JSON.stringify(
            {
              user: {
                id: id,
                status: 'WALLET_BALANCE_ZERO',
              },
            },
            null,
            2
          ),
        };
      }
    } else {
      throw new Error('Function has not been configured properly!');
    }
  } catch (e) {
    console.error(e);
    return {
      statusCode: 500,
      body: JSON.stringify(
        {
          error: {
            message:
              'Failed to transfer deposit from wallet to treasury for the user!',
            cause: e,
          },
        },
        null,
        2
      ),
    };
  }
};
