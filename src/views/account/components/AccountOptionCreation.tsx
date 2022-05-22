import { useState, useEffect, useMemo } from "react"
import { Container, Card, Grid, Row, Col, Text, Spacer, Button, Input, Avatar } from "@nextui-org/react"
import { BigNumber, utils } from 'ethers'
import { useWeb3React } from "@web3-react/core"

import { opjegContract } from '../../../constants/opjegContract'
import { useOpjegFactory } from '../../../hooks/useOpjegFactory'
import OptionGallery from '../../../components/option/OptionGallery'
import CreatedOptionCard from '../../../components/option/CreatedOptionCard'
import SelectNftModal from './SelectNftModal'

import NFT from '../../../interfaces/NFT'
import OptionType from '../../../interfaces/OptionType'

const AccountOptionCreation = () => {
  const { mintCall, mintPut } = useOpjegFactory()

  const [optionType, setOptionType] = useState<OptionType>(OptionType.CALL)
  const [showSelectNft, setShowSelectNft] = useState(false)

  // Create option state
  const [selectedNft, setSelectedNft] = useState<NFT|null>(null)
  const [strikePrice, setStrikePrice] = useState<BigNumber|null>(null)
  const [expiryDate, setExpiryDate] = useState<Date|null>(null)

  const enableSubmit = useMemo(() => {
    return selectedNft && strikePrice && expiryDate
  }, [selectedNft, strikePrice, expiryDate])

  const OptionTypeGroup = () => {
    return (
      <Button.Group css={{ m: 0 }}>
        <Button
          onPress={() => setOptionType(OptionType.CALL)}
          bordered={optionType != OptionType.CALL}
        >
          CALL
        </Button>
        <Button
          onPress={() => setOptionType(OptionType.PUT)}
          bordered={optionType != OptionType.PUT}
        >
          PUT
        </Button>
      </Button.Group>
    )
  }

  const onSelectedNftModal = (nft: NFT) => {
    setSelectedNft(nft)
    setShowSelectNft(false)
  }

  const onCloseSelectNftModal = () => {
    setShowSelectNft(false)
  }

  const onCreateOption = () => {
    if (!selectedNft) return
    if (!strikePrice) return
    if (!expiryDate) return

    switch (optionType) {
      case OptionType.CALL:
        mintCall(selectedNft, strikePrice, expiryDate)
        break

      case OptionType.PUT:
        mintPut()
        break
    }
  }

  const { account, active, chainId } = useWeb3React()
  const [createdOptions, setCreatedOptions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const options = {method: 'GET', headers: {Accept: 'application/json'}}

  useEffect(() => {
    if (!active || !chainId) return

    fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=${opjegContract[chainId]}&order_direction=desc&limit=100&include_orders=false`, options)
      .then(response => response.json())
      .then(response => setCreatedOptions(response.assets))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }, [chainId])

  return (
    <>
      <Container>
        <Card shadow={false} css={{ p: '0.3rem 0' }}>
          <Row css={{ pb: '15px', borderBottom: '1px solid #efefef'}}>
            <Text h4 transform='uppercase'>Create New Option</Text>
          </Row>
          <Row css={{ pt: '15px' }}>
            <Col><Text size='$xs'>Type</Text></Col>
            <Col><Text size='$xs'>NFT Token</Text></Col>
            <Col><Text size='$xs'>Strike Price</Text></Col>
            <Col><Text size='$xs'>Expires At</Text></Col>
            <Col><Text>&nbsp;</Text></Col>
          </Row>
          <Row>
            <Col>
              <Container css={{ p: 0 }}>
                <Row justify="flex-start">
                  <OptionTypeGroup />
                </Row>
              </Container>
            </Col>
            <Col>
              <Container css={{ p: 0 }}>
                <Row justify="flex-start" align="center">
                  { selectedNft &&
                    <>
                      <Avatar squared src={selectedNft.image_thumbnail_url} />
                      <Text>{ selectedNft.name || '#' + selectedNft.token_id }</Text>
                    </>
                  }
                  <Button.Group css={{ m: 0 }}>
                    <Button onPress={() => setShowSelectNft(true)}>Select NFT</Button>
                  </Button.Group>
                  <SelectNftModal
                    visible={showSelectNft}
                    selectHandler={onSelectedNftModal}
                    closeHandler={onCloseSelectNftModal}
                  />
                </Row>
              </Container>
            </Col>
            <Col>
              <Input bordered labelRight="ETH" placeholder='0.00' onChange={(e) => setStrikePrice(utils.parseUnits(e.target.value))} aria-label="Strike Price" />
            </Col>
            <Col>
              <Input bordered type="date" onChange={(e) => setExpiryDate(new Date(e.target.value))} aria-label="Expire At" />
            </Col>
            <Col>
              <Button disabled={!enableSubmit} onPress={(e) => enableSubmit && onCreateOption()}>Create Option</Button>
            </Col>
          </Row>
        </Card>
      </Container>

      <Spacer y={1} />

      <Container>
        <Card shadow={false} css={{ p: '0.3rem 0' }}>
          <Row>
            <Col>
              <Text b transform='uppercase'>Options You Created</Text>
            </Col>
            <Col css={{ textAlign: 'right' }}>
              <Text b>{ createdOptions.length } items</Text>
            </Col>
          </Row>
        </Card>
      </Container>

      <Spacer y={1} />

      <Container>
        <Grid.Container gap={1}>
          { createdOptions && createdOptions.map((option) => {
            return (
              <Grid xs={2}>
                <CreatedOptionCard option={option} />
              </Grid>
            )
          }) }
        </Grid.Container>
      </Container>
    </>
  )
}

export default AccountOptionCreation
