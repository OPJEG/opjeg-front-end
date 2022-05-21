import { useState } from "react"
import { Container, Row, Button, Spacer } from "@nextui-org/react"

import Header from '../../components/Header'
import AccountOptionHolding from './components/AccountOptionHolding'
import AccountOptionCreation from './components/AccountOptionCreation'

enum Tabs {
  HOLDING = 'holding',
  CREATED = 'created',
}

const OptionsPage = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.HOLDING)

  const TabGroup = () => {
    return (
      <Button.Group size="xl" color="gradient">
        <Button onPress={() => setActiveTab(Tabs.HOLDING)} bordered={activeTab != Tabs.HOLDING}>Holding</Button>
        <Button onPress={() => setActiveTab(Tabs.CREATED)} bordered={activeTab != Tabs.CREATED}>Created</Button>
      </Button.Group>
    )
  }

  return (
    <main>
      <Header
        title='My Options'
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />

      <Container>
        <Row justify="center">
          <TabGroup />
        </Row>
      </Container>

      <Spacer y={1} />

      { activeTab == Tabs.HOLDING && <AccountOptionHolding /> }
      { activeTab == Tabs.CREATED && <AccountOptionCreation /> }
    </main>
  )
}

export default OptionsPage
