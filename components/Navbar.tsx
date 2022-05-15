import NextLink from 'next/link'
import { Container, Row, Col, Text, Image, Button, Spacer, Link } from "@nextui-org/react";

export default function Navbar() {
  return (
    <>
      <Container fluid css={{ backdropFilter: 'blur(100px)', borderBottom: '1px solid #efefef' }}>
        <Row css={{ alignItems: 'center', h: "$24" }}>
          <Image
            objectFit="cover"
            src="logo.png"
            alt="OBJEG Logo"
            width="350px"
            align-items='center'
            />
          <Col>
            <NextLink href="/">
              <Link underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>Marketplace</Link>
            </NextLink>
            <NextLink href="/example">
              <Link underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>My Options</Link>
            </NextLink>
            <NextLink href="/">
              <Link underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>About</Link>
            </NextLink>
          </Col>
          <Col>
            <Button ghost color="secondary" css={{ marginLeft: 'auto' }}>Connect Wallet</Button>
          </Col>
        </Row>
      </Container>
    </>
  )
}
