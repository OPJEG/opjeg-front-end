import { useState } from "react"
import { Container, Row, Button, Spacer, Card } from "@nextui-org/react"
import { useWeb3React } from "@web3-react/core"

import Header from '../../components/Header'
import AccountOptionHolding from './components/AccountOptionHolding'
import AccountOptionCreation from './components/AccountOptionCreation'

enum Tabs {
  HOLDING = 'holding',
  CREATED = 'created',
}

const OptionsPage = () => {
  const { active } = useWeb3React()
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
        subtitle='Manage the options you hold and created.'
        />

      { !active &&
        <Container>
          <Row>
            <Card color="gradient">Please connect wallet.</Card>
          </Row>
        </Container>
      }

      { active &&
        <>
        <Container>
          <Row justify="center">
            <TabGroup />
          </Row>
        </Container>

        <Spacer y={1} />

        { activeTab == Tabs.HOLDING && <AccountOptionHolding /> }
        { activeTab == Tabs.CREATED && <AccountOptionCreation /> }
        </>
      }
    </main>
  )
}

export default OptionsPage
