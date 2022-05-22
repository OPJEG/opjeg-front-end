import React, { useState } from 'react'
import { Container, Row, Col, Text, Image, Button, Spacer, Link } from "@nextui-org/react";
import { useWeb3React } from "@web3-react/core"

import { useConnectWallet } from "../hooks/useConnectWallet"

export default function Navbar() {
  const { metamask } = useConnectWallet()
  const { account, activate, deactivate, active } = useWeb3React()

  return (
    <>
      <Container fluid css={{ backdropFilter: 'blur(100px)' }}>
        <Row css={{ alignItems: 'center', h: "$24" }}>
          <Link href="/">
            <Image
              objectFit="cover"
              src="/logo.png"
              alt="OBJEG Logo"
              width="200px"
              align-items='center'
              css={{ cursor: 'pointer' }}
              />
          </Link>
          <Col>
              <Link href="/" underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>Marketplace</Link>
              <Link href="/#/account/options" underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>My Options</Link>
              <Link href="/#/about" underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>About</Link>
          </Col>
          <Col>
            { !active &&
              <Button
                ghost
                color="secondary"
                css={{ marginLeft: 'auto' }}
                onPress={metamask}
                >Connect Wallet</Button>
            }
            { active &&
              <Container>
                <Row align="center">
                  <Col>
                    <Text>{ account }</Text>
                  </Col>
                  <Spacer x={1} />
                  <Col>
                    <Button
                      ghost
                      color="secondary"
                      onPress={deactivate}
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
