import React, { useState } from 'react'
import NextLink from 'next/link'
import { Container, Row, Col, Text, Image, Button, Spacer, Link } from "@nextui-org/react";
import WalletService from '../services/WalletService'

const walletService = new WalletService()

export default function Navbar() {
  const [connectedAccount, setConnectedAccount] = useState(null)

  return (
    <>
      <Container fluid css={{ backdropFilter: 'blur(100px)' }}>
        <Row css={{ alignItems: 'center', h: "$24" }}>
          <NextLink href="/">
            <Image
              objectFit="cover"
              src="/logo.png"
              alt="OBJEG Logo"
              width="350px"
              align-items='center'
              css={{ cursor: 'pointer' }}
              />
          </NextLink>
          <Col>
            <NextLink href="/">
              <Link underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>Marketplace</Link>
            </NextLink>
            <NextLink href="/account/options">
              <Link underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>My Options</Link>
            </NextLink>
            <NextLink href="/about">
              <Link underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>About</Link>
            </NextLink>
          </Col>
          <Col>
            { !connectedAccount &&
              <Button
                ghost
                color="secondary"
                css={{ marginLeft: 'auto' }}
                onClick={() => walletService.connect(setConnectedAccount)}
                >Connect Wallet</Button>
            }
            { !!connectedAccount &&
              <Container>
                <Row align="center">
                  <Col>
                    <Text>{ connectedAccount }</Text>
                  </Col>
                  <Spacer x={1} />
                  <Col>
                    <Button
                      ghost
                      color="secondary"
                      onClick={() => walletService.disconnect(setConnectedAccount)}
                      >Disconnect</Button>
                  </Col>
                </Row>
              </Container>
            }
          </Col>
        </Row>
      </Container>
    </>
  )
}
