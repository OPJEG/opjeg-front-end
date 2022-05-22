import { styled, Container, Row, Col, Card, Text, User, Button, Spacer, Image } from "@nextui-org/react";

import { useOpjegFactory } from '../../hooks/useOpjegFactory'
import NFT from '../../interfaces/NFT'
import EthSymbol from '../EthSymbol'
import EthAmount from '../EthAmount'

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function CreatedOptionCard({ option }: { option: NFT }) {
  const { burnOption } = useOpjegFactory()

  const burnHandler = () => {
    burnOption(option)
  }

  return (
    <Card hoverable css={{ border: '10px solid #fff'}}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={ option.image_preview_url }
          objectFit="cover"
          width="100%"
          />
      </Card.Body>

      <Card.Footer css={{ p: '0.5rem' }}>
        <Container fluid css={{ p: 0 }}>
          <StyledRow>
            <StyledCol css={{ p: 0 }}>
              <Text h3>{ option.name || '#' + option.token_id }</Text>
              <Text b>{ option.asset_contract.name }</Text>
            </StyledCol>
          </StyledRow>

          <Spacer y={0.3} />

          <StyledRow>
            <StyledCol>
              <Text css={{ fs: '90%', mb: '-5px' }}>Floor Price</Text>
              <EthAmount amount={null} />
            </StyledCol>

            <StyledCol css={{textAlign: 'right'}}>
              <Text css={{ fs: '90%', mb: '-5px' }}>Strike Price</Text>
              <Text css={{ justifyContent: 'end' }}><EthSymbol /> {option.traits.find(t => t.trait_type == 'Strike')?.value}</Text>
            </StyledCol>
          </StyledRow>

          <StyledRow css={{
            borderTop: '1px solid #f4f4f4',
            marginTop: '0.5rem',
            paddingTop: '0.5rem',
            alignItems: 'center'
            }}>
              <Button
                auto
                rounded
                css={{ margin: 'auto' }}
                onPress={burnHandler}
              >
                Burn
              </Button>
          </StyledRow>
        </Container>
      </Card.Footer>
    </Card>
  )
}
