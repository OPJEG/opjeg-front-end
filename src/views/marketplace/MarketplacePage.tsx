import { useState, useEffect } from "react"
import { Container, Grid, Card, Row, Col, Text, Spacer, Loading } from "@nextui-org/react"
import { useWeb3React } from "@web3-react/core"

import { opjegContract } from '../../constants/opjegContract'
import Header from '../../components/Header'
import MarketplaceOptionCard from '../../components/option/MarketplaceOptionCard'

const Home = () => {
  const { account, active, chainId } = useWeb3React()

  const [availableOptions, setAvailableOptions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const options = {method: 'GET', headers: {Accept: 'application/json'}}

  useEffect(() => {
    if (!chainId) return

    fetch(`https://testnets-api.opensea.io/api/v1/assets?asset_contract_address=${opjegContract[chainId]}&order_direction=desc&limit=100&include_orders=false`, options)
      .then(response => response.json())
      .then(response => setAvailableOptions(response.assets))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }, [chainId])

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

      <Container>
        <Grid.Container gap={1}>
          { availableOptions && availableOptions.map((option) => {
            return (
              <Grid xs={2}>
                <MarketplaceOptionCard option={option} />
              </Grid>
            )
          }) }
        </Grid.Container>
      </Container>
    </main>
  )
}

export default Home
