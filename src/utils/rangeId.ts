import { ethers } from 'ethers'
import { AbiCoder } from 'ethers/lib/utils'

const abi = new AbiCoder()

export function createRangeId(lower: number, upper: number) {
  return ethers.utils.keccak256(
    ethers.utils.arrayify(abi.encode(['int256', 'int256'], [lower, upper]))
  )
}
