import { Container, Row, Col, Text, Image, Button } from "@nextui-org/react";

export default function Navbar() {
  return (
    <>
      <Container fluid style={{ backdropFilter: 'blur(100px)' }}>
        <Row>
          <Image
            objectFit="cover"
            src="logo.png"
            width="140"
            height="366"
            />
          <Col>
            <Text>Marketplace | My Page | About</Text>
          </Col>
          <Col>
            <Button>Connect Wallet</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
