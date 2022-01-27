const { ethers } = require('ethers');
const TronWeb = require('tronweb');

const { getAddress, keccak256, toUtf8Bytes, formatUnits } = ethers.utils;

exports.keccak = (n) => {
  return keccak256(toUtf8Bytes(n));
};

exports.getCreate2TronAddress = (sender, salt, initcode) => {
  const create2Inputs = ['0x41', TronWeb.address.toHex(sender), salt, initcode];
  const sanitizedInputs = `0x${create2Inputs.map((i) => i.slice(2)).join('')}`;
  const ethAddress = getAddress(`0x${keccak256(sanitizedInputs).slice(-40)}`);
  return TronWeb.address.fromHex(`41${ethAddress.slice(2)}`);
};

exports.formatUnits = formatUnits;
