import type { NextPage } from 'next'
import { Container, Row, Col, Grid, Card, Text, Image } from "@nextui-org/react";
import SectionHead from '../components/SectionHead'
import OptionGallery from '../components/option/OptionGallery'

const Home: NextPage = () => {
  return (
    <main>
      <SectionHead
        title='Options Market'
        subtitle='Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
        />

      <OptionGallery title="Call Options" />
      <OptionGallery title="Put Options" />
    </main>
  )
}

export default Home
