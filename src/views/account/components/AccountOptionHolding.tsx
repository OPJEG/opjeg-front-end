import { useState, useEffect } from "react"
import { Container, Card, Row, Col, Text, Spacer, Grid } from "@nextui-org/react"
import { useWeb3React } from "@web3-react/core"

import { opjegContract } from '../../../constants/opjegContract'
import OptionGallery from '../../../components/option/OptionGallery'
import HoldingOptionCard from '../../../components/option/HoldingOptionCard'

const AccountOptionHolding = () => {
  const { account, active, chainId } = useWeb3React()
  const [holdingOptions, setHoldingOptions] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  const options = {method: 'GET', headers: { Accept: 'application/json' }}

  useEffect(() => {
    if (!active || !chainId) return

    fetch(`https://testnets-api.opensea.io/api/v1/assets?owner=${account}&asset_contract_address=${opjegContract[chainId]}&order_direction=desc&limit=100&include_orders=false`, options)
      .then(response => response.json())
      .then(response => setHoldingOptions(response.assets))
      .catch(err => console.error(err))
      .finally(() => setIsLoading(false))
  }, [chainId])

  return (
    <>
      <Container>
        <Card shadow={false} css={{ p: '0.3rem 0' }}>
          <Row>
            <Col>
              <Text b transform='uppercase'>Your Holding</Text>
            </Col>
            <Col css={{ textAlign: 'right' }}>
              <Text b>{ holdingOptions.length } items</Text>
            </Col>
          </Row>
        </Card>
      </Container>

      <Spacer y={1} />

      <Container>
        <Grid.Container gap={1}>
          { holdingOptions && holdingOptions.map((option) => {
            return (
              <Grid xs={2}>
                <HoldingOptionCard option={option} />
              </Grid>
            )
          }) }
        </Grid.Container>
      </Container>
    </>
  )
}

export default AccountOptionHolding
