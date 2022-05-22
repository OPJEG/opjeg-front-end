export default interface NFT {
  name: string
  image_preview_url: string
  image_thumbnail_url: string
  token_id: string
  permalink: string
  traits: [{
    trait_type: string,
    value: string,
  }]
  asset_contract: {
    address: string
    name: string
  }
  collection: {
    name: string
  }
  owner: {
    address: string
  }
}
