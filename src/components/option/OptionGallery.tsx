import { styled, Container, Row, Col, Grid, Card, Text, Spacer } from "@nextui-org/react";
import OptionCard from './OptionCard'
import NFT from '../../interfaces/NFT'

export default function OptionGallery({ options, footer }: { options: NFT[], footer: any }) {
  return (
    <>
      <Container>
        <Grid.Container gap={1}>
          { options && options.map((option) => {
            return (
              <Grid xs={2}>
                <OptionCard option={option} footer={footer} />
              </Grid>
            )
          }) }
        </Grid.Container>
      </Container>
    </>
  )
}
