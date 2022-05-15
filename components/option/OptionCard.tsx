import { styled, Container, Row, Col, Card, Text, User, Button, Spacer, Image } from "@nextui-org/react";
import EthAmount from '../EthAmount'

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function OptionCard() {
  return (
    <Card hoverable>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src="placeholder.png"
          objectFit="cover"
          width="100%"
          />
      </Card.Body>

      <Card.Footer>
        <Container fluid css={{ p: 0 }}>
          <StyledRow>
            <StyledCol css={{ p: 0 }}>
              <Text h3>TokenID</Text>
              <Text b>Collection Name</Text>
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

          <StyledRow css={{
            borderTop: '1px solid #ccc',
            marginTop: '0.5rem',
            paddingTop: '0.5rem',
            alignItems: 'center'
            }}>
            <StyledCol>
              <User
                name="0xc92fa..."
                size="sm"
                css={{ p: 0 }}
              />
            </StyledCol>

            <StyledCol>
              <Button
                auto
                rounded
                css={{ marginLeft: 'auto' }}
                >Buy Now</Button>
            </StyledCol>
          </StyledRow>
        </Container>
      </Card.Footer>
    </Card>
  )
}
