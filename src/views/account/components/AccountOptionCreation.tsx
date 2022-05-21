import { useState } from "react"
import { Container, Card, Row, Col, Text, Spacer, Button, Input } from "@nextui-org/react"

import OptionGallery from '../../../components/option/OptionGallery'
import HoldingCardFooter from '../../../components/option/HoldingCardFooter'
import SelectNftModal, { Asset } from './SelectNftModal'

enum OptionType {
  CALL = 'call',
  PUT = 'put',
}

const AccountOptionCreation = () => {
  const [activeType, setActiveType] = useState<OptionType>(OptionType.CALL)
  const [showSelectNft, setShowSelectNft] = useState(false);
  const [selectedNft, setSelectedNft] = useState<Asset|null>(null);

  const OptionTypeGroup = () => {
    return (
      <Button.Group>
        <Button onPress={() => setActiveType(OptionType.CALL)} bordered={activeType != OptionType.CALL}>CALL</Button>
        <Button onPress={() => setActiveType(OptionType.PUT)} bordered={activeType != OptionType.PUT}>PUT</Button>
      </Button.Group>
    )
  }

  const onSelectedNftModal = (asset: Asset) => {
    setSelectedNft(asset)
    setShowSelectNft(false)
  }

  const onCloseSelectNftModal = () => {
    setShowSelectNft(false)
  }

  return (
    <>
      <Container>
        <Card shadow={false} css={{ p: '0.3rem 0' }}>
          <Row css={{ pb: '15px', borderBottom: '1px solid #efefef'}}>
            <Text h4 transform='uppercase'>Create New Option</Text>
          </Row>
          <Row align="flex-end" css={{ pt: '15px' }}>
            <Col>
              <Container css={{ p: 0 }}>
                <label style={{ fontSize: '14px' }}>Type</label>
                <Row justify="flex-start">
                  <OptionTypeGroup />
                </Row>
              </Container>
            </Col>
            <Col>
              <Container css={{ p: 0 }}>
                <label style={{ fontSize: '14px' }}>NFT Token ID</label>
                <Row justify="flex-start">
                  <Text>{ selectedNft && (selectedNft?.name || '#' + selectedNft?.token_id) }</Text>
                  <Button.Group>
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
              <Input bordered label="Strike Price" labelRight="ETH" />
            </Col>
            <Col>
              <Input bordered label="Expires At" type="date" />
            </Col>
            <Col>
              <Button>Create Option</Button>
            </Col>
          </Row>
        </Card>
      </Container>

      <Spacer y={1} />

      <OptionGallery title="Your Holding Calls" footer={<HoldingCardFooter />} />
      <Spacer y={3} />
      <OptionGallery title="Your Holding Puts" footer={<HoldingCardFooter />} />
    </>
  )
}

export default AccountOptionCreation
