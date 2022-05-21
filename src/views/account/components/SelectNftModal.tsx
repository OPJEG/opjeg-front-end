import { useState, useEffect } from 'react'
import { Modal, Text, Container, Button, Grid, Card, Row, Col, Image, Link, Loading } from "@nextui-org/react"
import { collections } from '../../../constants/collections'

export interface Asset {
  name: string
  image_preview_url: string
  token_id: string
  permalink: string
  asset_contract: {
    address: string
  }
  collection: {
    name: string
  }
}

const SelectNftModal = ({visible, selectHandler, closeHandler} : {visible: boolean, selectHandler: (asset: Asset) => void, closeHandler: () => void}) => {
  const [accountNfts, setAccountNfts] = useState<Asset[]>([])
  const [supportedNfts, setSupportedNfts] = useState<Asset[]>([])
  const [unsupportedNfts, setUnsupportedNfts] = useState<Asset[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    if (!!visible) {
      setIsLoading(true)
      const options = {method: 'GET', headers: {Accept: 'application/json'}};
      const account = '0x03d15Ec11110DdA27dF907e12e7ac996841D95E4'

      fetch(`https://api.opensea.io/api/v1/assets?owner=${account}&order_direction=desc&limit=100&include_orders=false`, options)
        .then(response => response.json())
        .then(response => setAccountNfts(response.assets))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    } else {
      setAccountNfts([])
    }
  }, [visible])

  useEffect(() => {
    const supported: any[] = [], unsupported: any[] = []

    accountNfts.forEach(nft => {
      if (collections.mainnet.includes(nft.asset_contract.address)) {
        supported.push(nft)
      } else {
        unsupported.push(nft)
      }
    })

    setSupportedNfts(supported)
    setUnsupportedNfts(unsupported)
  }, [accountNfts])

  const NftCard = ({asset, supported}: {asset: Asset, supported: boolean}) => {
    return (
      <Grid xs={4}>
        <Card
          cover
          hoverable
          css={{ opacity: supported ? 1 : 0.33 }}
          clickable={supported}
          onClick={() => supported && selectHandler(asset)}
        >
          <Card.Body>
            <Card.Image
              src={asset.image_preview_url}
              alt={asset.name}
            />
          </Card.Body>
          <Card.Footer>
            <Container css={{ p: 0 }}>
              <Row css={{ mb: '-3px' }}>
                <Text
                  size='$tiny'
                  css={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >{asset.collection.name}</Text>
              </Row>
              <Row>
                <Text h3
                  css={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >{asset.name || '#' + asset.token_id}</Text>
              </Row>
            </Container>
          </Card.Footer>
        </Card>
      </Grid>
    )
  }

  return (
    <Modal
      scroll
      closeButton
      width="50%"
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <Modal.Header>
        <Text h3 id="modal-title">Select NFT</Text>
      </Modal.Header>
      <Modal.Body>
        { isLoading && <Loading size="xl" />}
        { !isLoading &&
          <Grid.Container gap={2} justify="center">
            { supportedNfts.map(asset => {
              console.log(asset)
              return <NftCard asset={asset} supported={true} />
            })}
            { unsupportedNfts.map(asset => {
              console.log(asset)
              return <NftCard asset={asset} supported={false} />
            })}
          </Grid.Container>
        }
      </Modal.Body>
    </Modal>
  )
}

export default SelectNftModal
