import { BigNumber } from 'ethers'

export default interface Option {
  tokenId: string,
  collectionName: string,
  price: BigNumber,
  floorPrice: BigNumber,
  strikePrice: BigNumber,
}
