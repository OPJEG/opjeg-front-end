import { styled, Container, Row, Col, Grid, Card, Text } from "@nextui-org/react";
import OptionCard from './OptionCard'

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function OptionGallery({ title }: { title: string }) {
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

      <Container>
        <Grid.Container gap={1}>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
          <Grid xs={2}>
            <OptionCard/>
          </Grid>
        </Grid.Container>
      </Container>
    </>
  )
}
