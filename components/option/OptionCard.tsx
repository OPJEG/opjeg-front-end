import { styled, Container, Row, Col, Card, Text, Avatar, Button } from "@nextui-org/react";

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function OptionCard({ text }) {
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
          <StyledRow gap={1}>
            <StyledCol css={{ p: 0 }}>
              <Text h3>TokenID</Text>
              <Text b>Collection Name</Text>
            </StyledCol>

            <StyledCol>
              <Text h3 color="green" align="right">0.25 ETH</Text>
            </StyledCol>
          </StyledRow>

          <StyledRow gap={1}>
            <StyledCol>
              <Text>Floor Price</Text>
              <Text>20 ETH</Text>
            </StyledCol>

            <StyledCol>
              <Text>Strike Price</Text>
              <Text>22 ETH</Text>
            </StyledCol>
          </StyledRow>

          <StyledRow gap={1}>
            <StyledCol>
              <Avatar
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                size="sm"
              />
              <Text>by Min</Text>
            </StyledCol>

            <StyledCol>
              <Button auto>Buy Now</Button>
            </StyledCol>
          </StyledRow>
        </Container>
      </Card.Footer>
    </Card>
  )
}
