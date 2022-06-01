import { Container, Row, Col, Image, Button, Link } from "@nextui-org/react";
import { useWeb3React } from "@web3-react/core";

import { useConnectWallet } from "../hooks/useConnectWallet";
import { useEagerConnect } from "../hooks/useEagerConnect";
import { useInactiveListener } from "../hooks/useInactiveListener";
import { shortenAddress } from "../utils/address";

export default function Navbar() {
  const triedEager = useEagerConnect();
  const { metamask } = useConnectWallet();

  const { account, deactivate, active } = useWeb3React();

  // when not connected, try activating the injected connector, if it exists
  useInactiveListener(!triedEager);

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
              <Link href="/#" underline color="text" css={{ m: '0 1rem', fontWeight: 'bold' }}>Marketplace</Link>
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
