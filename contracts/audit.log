[92m
Address.isContract(address) (@openzeppelin/contracts/utils/Address.sol#27-37) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#33-35)
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#196-216) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#208-211)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage[0m
[92m
Different versions of Solidity is used:
	- Version used: ['0.8.6', '^0.8.0']
	- 0.8.6 (Wallet.sol#2)
	- ^0.8.0 (@openzeppelin/contracts/access/Ownable.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/proxy/utils/Initializable.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/token/ERC20/IERC20.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/utils/Address.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/utils/Context.sol#4)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#different-pragma-directives-are-used[0m
[92m
Address.functionCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#80-82) is never used and should be removed
Address.functionCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#90-96) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (@openzeppelin/contracts/utils/Address.sol#109-115) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#123-134) is never used and should be removed
Address.functionDelegateCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#169-171) is never used and should be removed
Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#179-188) is never used and should be removed
Address.functionStaticCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#142-144) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#152-161) is never used and should be removed
Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#55-60) is never used and should be removed
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#196-216) is never used and should be removed
Context._msgData() (@openzeppelin/contracts/utils/Context.sol#21-23) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code[0m
[92m
Pragma version^0.8.0 (@openzeppelin/contracts/access/Ownable.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/proxy/utils/Initializable.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/token/ERC20/IERC20.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/utils/Address.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/utils/Context.sol#4) allows old versions
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity[0m
[92m
Low level call in Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#55-60):
	- (success) = recipient.call{value: amount}() (@openzeppelin/contracts/utils/Address.sol#58)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#123-134):
	- (success,returndata) = target.call{value: value}(data) (@openzeppelin/contracts/utils/Address.sol#132)
Low level call in Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#152-161):
	- (success,returndata) = target.staticcall(data) (@openzeppelin/contracts/utils/Address.sol#159)
Low level call in Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#179-188):
	- (success,returndata) = target.delegatecall(data) (@openzeppelin/contracts/utils/Address.sol#186)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls[0m
[92m
initialize(address) should be declared external:
	- Wallet.initialize(address) (Wallet.sol#9-12)
transfer(address,address,uint256) should be declared external:
	- Wallet.transfer(address,address,uint256) (Wallet.sol#14-20)
renounceOwnership() should be declared external:
	- Ownable.renounceOwnership() (@openzeppelin/contracts/access/Ownable.sol#54-56)
transferOwnership(address) should be declared external:
	- Ownable.transferOwnership(address) (@openzeppelin/contracts/access/Ownable.sol#62-65)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#public-function-that-could-be-declared-external[0m
[92m
Reentrancy in WalletFactory.createWallet(bytes32) (WalletFactory.sol#29-33):
	External calls:
	- wallet.initialize(address(this)) (WalletFactory.sol#31)
	Event emitted after the call(s):
	- WalletCreated(identifier,address(wallet)) (WalletFactory.sol#32)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3[0m
[92m
Address.isContract(address) (@openzeppelin/contracts/utils/Address.sol#27-37) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#33-35)
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#196-216) uses assembly
	- INLINE ASM (@openzeppelin/contracts/utils/Address.sol#208-211)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#assembly-usage[0m
[92m
Different versions of Solidity is used:
	- Version used: ['0.8.6', '^0.8.0']
	- 0.8.6 (Wallet.sol#2)
	- 0.8.6 (WalletFactory.sol#2)
	- ^0.8.0 (@openzeppelin/contracts/access/AccessControl.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/access/IAccessControl.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/access/Ownable.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/proxy/utils/Initializable.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/token/ERC20/IERC20.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/utils/Address.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/utils/Context.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/utils/Strings.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/utils/introspection/ERC165.sol#4)
	- ^0.8.0 (@openzeppelin/contracts/utils/introspection/IERC165.sol#4)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#different-pragma-directives-are-used[0m
[92m
AccessControl._setRoleAdmin(bytes32,bytes32) (@openzeppelin/contracts/access/AccessControl.sol#194-198) is never used and should be removed
AccessControl._setupRole(bytes32,address) (@openzeppelin/contracts/access/AccessControl.sol#185-187) is never used and should be removed
Address.functionCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#80-82) is never used and should be removed
Address.functionCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#90-96) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256) (@openzeppelin/contracts/utils/Address.sol#109-115) is never used and should be removed
Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#123-134) is never used and should be removed
Address.functionDelegateCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#169-171) is never used and should be removed
Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#179-188) is never used and should be removed
Address.functionStaticCall(address,bytes) (@openzeppelin/contracts/utils/Address.sol#142-144) is never used and should be removed
Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#152-161) is never used and should be removed
Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#55-60) is never used and should be removed
Address.verifyCallResult(bool,bytes,string) (@openzeppelin/contracts/utils/Address.sol#196-216) is never used and should be removed
Context._msgData() (@openzeppelin/contracts/utils/Context.sol#21-23) is never used and should be removed
Strings.toHexString(uint256) (@openzeppelin/contracts/utils/Strings.sol#40-51) is never used and should be removed
Strings.toString(uint256) (@openzeppelin/contracts/utils/Strings.sol#15-35) is never used and should be removed
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#dead-code[0m
[92m
Pragma version^0.8.0 (@openzeppelin/contracts/access/AccessControl.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/access/IAccessControl.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/access/Ownable.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/proxy/utils/Initializable.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/token/ERC20/IERC20.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/utils/Address.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/utils/Context.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/utils/Strings.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/utils/introspection/ERC165.sol#4) allows old versions
Pragma version^0.8.0 (@openzeppelin/contracts/utils/introspection/IERC165.sol#4) allows old versions
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity[0m
[92m
Low level call in Address.sendValue(address,uint256) (@openzeppelin/contracts/utils/Address.sol#55-60):
	- (success) = recipient.call{value: amount}() (@openzeppelin/contracts/utils/Address.sol#58)
Low level call in Address.functionCallWithValue(address,bytes,uint256,string) (@openzeppelin/contracts/utils/Address.sol#123-134):
	- (success,returndata) = target.call{value: value}(data) (@openzeppelin/contracts/utils/Address.sol#132)
Low level call in Address.functionStaticCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#152-161):
	- (success,returndata) = target.staticcall(data) (@openzeppelin/contracts/utils/Address.sol#159)
Low level call in Address.functionDelegateCall(address,bytes,string) (@openzeppelin/contracts/utils/Address.sol#179-188):
	- (success,returndata) = target.delegatecall(data) (@openzeppelin/contracts/utils/Address.sol#186)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls[0m
[92m
initialize(address) should be declared external:
	- Wallet.initialize(address) (Wallet.sol#9-12)
transfer(address,address,uint256) should be declared external:
	- Wallet.transfer(address,address,uint256) (Wallet.sol#14-20)
grantRole(bytes32,address) should be declared external:
	- AccessControl.grantRole(bytes32,address) (@openzeppelin/contracts/access/AccessControl.sol#130-132)
revokeRole(bytes32,address) should be declared external:
	- AccessControl.revokeRole(bytes32,address) (@openzeppelin/contracts/access/AccessControl.sol#143-145)
renounceRole(bytes32,address) should be declared external:
	- AccessControl.renounceRole(bytes32,address) (@openzeppelin/contracts/access/AccessControl.sol#161-165)
renounceOwnership() should be declared external:
	- Ownable.renounceOwnership() (@openzeppelin/contracts/access/Ownable.sol#54-56)
transferOwnership(address) should be declared external:
	- Ownable.transferOwnership(address) (@openzeppelin/contracts/access/Ownable.sol#62-65)
Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#public-function-that-could-be-declared-external[0m
. analyzed (18 contracts with 77 detectors), 67 result(s) found
