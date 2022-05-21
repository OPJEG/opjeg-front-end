import { Spacer } from "@nextui-org/react";
import Header from '../../components/Header'
import OptionGallery from '../../components/option/OptionGallery'
import MarketplaceCardFooter from '../../components/option/MarketplaceCardFooter'

const Home = () => {
  return (
    <main>
      <Header
        title='Options Market'
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />

      <OptionGallery title="Call Options" footer={<MarketplaceCardFooter />} />
      <Spacer y={3} />
      <OptionGallery title="Put Options" footer={<MarketplaceCardFooter />} />
    </main>
  )
}

export default Home
