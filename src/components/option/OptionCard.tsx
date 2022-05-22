import { styled, Container, Row, Col, Card, Text, User, Button, Spacer, Image } from "@nextui-org/react";
import EthAmount from '../EthAmount'
import NFT from '../../interfaces/NFT'

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function OptionCard({ option, footer }: { option: NFT, footer: any}) {
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

            <StyledCol>
              <EthAmount
                amount={22}
                css={{
                  fontSize: '16pt',
                  fontWeight: 'bold',
                  color: 'green',
                  justifyContent: 'end'
                }} />
            </StyledCol>
          </StyledRow>

          <Spacer y={0.3} />

          <StyledRow>
            <StyledCol>
              <Text css={{ fs: '90%', mb: '-5px' }}>Floor Price</Text>
              <EthAmount amount={20} />
            </StyledCol>

            <StyledCol css={{textAlign: 'right'}}>
              <Text css={{ fs: '90%', mb: '-5px' }}>Strike Price</Text>
              <EthAmount amount={22} css={{ justifyContent: 'end' }} />
            </StyledCol>
          </StyledRow>

          { footer }
        </Container>
      </Card.Footer>
    </Card>
  )
}
