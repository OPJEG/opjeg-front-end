import { Spacer } from "@nextui-org/react";
import Header from '../components/Header'
import OptionGallery from '../components/option/OptionGallery'

const Home = () => {
  return (
    <main>
      <Header
        title='Options Market'
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />

      <OptionGallery title="Call Options" />
      <Spacer y={3} />
      <OptionGallery title="Put Options" />
    </main>
  )
}

export default Home
