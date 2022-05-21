import { styled, Container, Row, Col, Grid, Card, Text, Spacer } from "@nextui-org/react";
import OptionCard from './OptionCard'

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function OptionGallery({ title, footer }: { title: string, footer: any }) {
  return (
    <>
      <Container>
        <Card shadow={false} css={{ p: '0.3rem 0' }}>
          <Row>
            <Col>
              <Text b transform='uppercase'>{ title }</Text>
            </Col>
            <Col css={{ textAlign: 'right' }}>
              <Text b>10 items</Text>
            </Col>
          </Row>
        </Card>
      </Container>

      <Spacer y={1} />

      <Container>
        <Grid.Container gap={1}>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
          <Grid xs={2}>
            <OptionCard footer={footer} />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
