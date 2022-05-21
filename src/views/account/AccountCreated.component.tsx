import { Container, Card, Row, Col, Text, Spacer, Button, Input } from "@nextui-org/react";
import OptionGallery from '../../components/option/OptionGallery'
import HoldingCardFooter from '../../components/option/HoldingCardFooter'

const AccountCreated = () => {
  return (
    <>
      <Container>
        <Card shadow={false} css={{ p: '0.3rem 0' }}>
          <Row>
            <Text b transform='uppercase'>Create New Option</Text>
          </Row>
          <Row>
            <Col>
              <Container css={{ p: 0 }}>
                <label>Type</label>
                <Row justify="flex-start">
                  <Button.Group>
                    <Button>CALL</Button>
                    <Button bordered>PUT</Button>
                  </Button.Group>
                </Row>
              </Container>
            </Col>
            <Col>
              <Container css={{ p: 0 }}>
                <label>NFT Token ID</label>
                <Row justify="flex-start">
                <Button.Group>
                  <Button>Select NFT</Button>
                </Button.Group>
                </Row>
              </Container>
            </Col>
            <Col>
              <Input
                bordered
                label="Strike Price"
                labelRight="ETH"
              />
            </Col>
            <Col>
              <Input
                label="Expires At"
                type="date"
              />
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

export default AccountCreated
