import BalanceTree from '../src/balance-tree'
import { Contract, BigNumber, constants } from 'ethers'
let tree

const wallet = [
  { account: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f', amount: BigNumber.from(100) },
  { account: '0xD457903C4B8388C3cA2C6b5fC746876975654D3E', amount: BigNumber.from(100) },
]
console.log(JSON.stringify(wallet),'=====wallet');

tree = new BalanceTree(wallet)
const proof0 = tree.getProof(0, wallet[0].account, wallet[0].amount)
console.log(proof0,'======proof0');

console.log(tree, 'treetreetreetree')

/**
 * {"merkleRoot":"0x002a4c5b93c4c28176b1cf1cdbefccbb515ad360e2be3f2e8476265c3be7ab86","tokenTotal":"0xc8","claims":{"0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f":{"index":0,"amount":"0x64","proof":["0x2f07e50539cfee9046bd64635df6fbb129302160b832e2fcedff5ad3971bc979"]},"0xD457903C4B8388C3cA2C6b5fC746876975654D3E":{"index":1,"amount":"0x64","proof":["0xdefa96435aec82d201dbd2e5f050fb4e1fef5edac90ce1e03953f916a5e1132d"]}}}
 */