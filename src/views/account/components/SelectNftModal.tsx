import { useState, useEffect } from 'react'
import { Modal, Text, Container, Button, Grid, Card, Row, Col, Image, Link, Loading } from "@nextui-org/react"
import { useWeb3React } from "@web3-react/core"

import { collections } from '../../../constants/collections'
import NFT from '../../../interfaces/NFT'

const SelectNftModal = ({visible, selectHandler, closeHandler} : {visible: boolean, selectHandler: (nft: NFT) => void, closeHandler: () => void}) => {
  const [accountNfts, setAccountNfts] = useState<NFT[]>([])
  const [supportedNfts, setSupportedNfts] = useState<NFT[]>([])
  const [unsupportedNfts, setUnsupportedNfts] = useState<NFT[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { active, account, chainId } = useWeb3React()

  useEffect(() => {
    if (!!visible) {
      setIsLoading(true)
      const options = {method: 'GET', headers: {Accept: 'application/json'}};

      fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}&order_direction=desc&limit=100&include_orders=false`, options)
        .then(response => response.json())
        .then(response => setAccountNfts(response.assets))
        .catch(err => console.error(err))
        .finally(() => setIsLoading(false))
    } else {
      setAccountNfts([])
    }
  }, [visible])

  useEffect(() => {
    if (!active || !chainId) return

    const supported: any[] = [], unsupported: any[] = []

    accountNfts.forEach(nft => {
      if (collections[chainId].includes(nft.asset_contract.address)) {
        supported.push(nft)
      } else {
        unsupported.push(nft)
      }
    })

    setSupportedNfts(supported)
    setUnsupportedNfts(unsupported)
  }, [accountNfts])

  const NftCard = ({nft, supported}: {nft: NFT, supported: boolean}) => {
    return (
      <Grid xs={4}>
        <Card
          cover
          hoverable
          css={{ opacity: supported ? 1 : 0.33 }}
          clickable={supported}
          onClick={() => supported && selectHandler(nft)}
        >
          <Card.Body>
            <Card.Image
              src={nft.image_preview_url}
              alt={nft.name}
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
                >{nft.collection.name}</Text>
              </Row>
              <Row>
                <Text h3
                  css={{
                    textOverflow: 'ellipsis',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >{nft.name || '#' + nft.token_id}</Text>
              </Row>
              <Link icon href={nft.permalink} target="_blank">
                View on Opensea
              </Link>
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
            { supportedNfts.map(nft => {
              return <NftCard nft={nft} supported={true} />
            })}
            { unsupportedNfts.map(nft => {
              return <NftCard nft={nft} supported={false} />
            })}
          </Grid.Container>
        }
      </Modal.Body>
    </Modal>
  )
}

export default SelectNftModal
