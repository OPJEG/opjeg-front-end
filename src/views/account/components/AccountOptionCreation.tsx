import { useState } from "react"
import { Container, Card, Row, Col, Text, Spacer, Button, Input, Avatar } from "@nextui-org/react"

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
              <Input bordered labelRight="ETH" placeholder='0.00' />
            </Col>
            <Col>
              <Input bordered type="date" />
            </Col>
            <Col>
              <Button>Create Option</Button>
            </Col>
          </Row>
        </Card>
      </Container>

      <Spacer y={1} />

      <OptionGallery title="Your Created Calls" footer={<HoldingCardFooter />} />
      <Spacer y={3} />
      <OptionGallery title="Your Created Puts" footer={<HoldingCardFooter />} />
    </>
  )
}

export default AccountOptionCreation
