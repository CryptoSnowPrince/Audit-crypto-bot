initialize(address) should be declared external:
	- Wallet.initialize(address) (Wallet.sol#9-12)
transfer(address,address,uint256) should be declared external:
	- Wallet.transfer(address,address,uint256) (Wallet.sol#14-20)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#public-function-that-could-be-declared-external[0m
[92m
Reentrancy in WalletFactory.createWallet(bytes32) (WalletFactory.sol#29-33):
	External calls:
	- wallet.initialize(address(this)) (WalletFactory.sol#31)
	Event emitted after the call(s):
	- WalletCreated(identifier,address(wallet)) (WalletFactory.sol#32)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3[0m
[92m