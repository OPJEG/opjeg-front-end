import { useState } from "react"
import { Container, Card, Row, Col, Text, Spacer } from "@nextui-org/react"

import Header from '../../components/Header'
import OptionGallery from '../../components/option/OptionGallery'
import MarketplaceCardFooter from '../../components/option/MarketplaceCardFooter'

const Home = () => {
  const [availableOptions, setAvailableOptions] = useState([])

  return (
    <main>
      <Header
        title='Options Market'
        subtitle='Buy your CALL and PUT options at OPJEG Options Market'
        />

      <Container>
        <Card shadow={false} css={{ p: '0.3rem 0' }}>
          <Row>
            <Col>
              <Text b transform='uppercase'>Available Options</Text>
            </Col>
            <Col css={{ textAlign: 'right' }}>
              <Text b>{ availableOptions.length } items</Text>
            </Col>
          </Row>
        </Card>
      </Container>

      <OptionGallery options={availableOptions} footer={<MarketplaceCardFooter />} />
    </main>
  )
}

export default Home
