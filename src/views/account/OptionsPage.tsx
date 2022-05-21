import { useState } from "react";

import { Container, Row, Button, Spacer } from "@nextui-org/react";
import Header from '../../components/Header'
import AccountHolding from './AccountHolding.component'
import AccountCreated from './AccountCreated.component'

enum Tabs {
  HOLDING = "holding",
  CREATED = "created",
}

const OptionsPage = () => {
  const [activeTab, setActiveTab] = useState<Tabs>(Tabs.HOLDING)

  const TabGroup = () => {
    return (
      <Button.Group size="xl" color="gradient">
        <Button onClick={() => setActiveTab(Tabs.HOLDING)} bordered={activeTab != Tabs.HOLDING}>Holding</Button>
        <Button onClick={() => setActiveTab(Tabs.CREATED)} bordered={activeTab != Tabs.CREATED}>Created</Button>
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

      { activeTab == Tabs.HOLDING && <AccountHolding /> }
      { activeTab == Tabs.CREATED && <AccountCreated /> }
    </main>
  )
}

export default OptionsPage
