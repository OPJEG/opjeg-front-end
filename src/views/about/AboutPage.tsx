import { Container, Row, Col, Text, Image, Button, Spacer, Link } from "@nextui-org/react";

import Header from '../../components/Header'

const About = () => {
  return (
    <main>
      <Header
        title='About'
        subtitle=''
        />

      <Container>
        <Text h2>Buidlers</Text>
        <Text size="large">
          Made with ❤️ by <Link href="https://twitter.com/0xyoyoismee" target="_blank">0xyoyoismee</Link>, <Link href="https://twitter.com/jeantnd" target="_blank">jeantnd</Link>, <Link href="https://twitter.com/unnawut" target="_blank">unnawut</Link>
        </Text>
        <Text size="large">Contact us at <Link href="https://twitter.com/opjegfinance" target="_blank">https://twitter.com/opjegfinance</Link></Text>
      </Container>
      <Spacer y={2} />
      <Container>
        <Text h2>Source Code</Text>
        <Text>Frontend: <Link href="https://github.com/OPJEG/opjeg-front-end" target="_blank">OPJEG/opjeg-front-end</Link></Text>
        <Text>Smart contract: <Link href="https://github.com/OPJEG/opjeg-smart-contract" target="_blank">OPJEG/opjeg-smart-contract</Link></Text>
      </Container>
    </main>
  )
}

export default About
