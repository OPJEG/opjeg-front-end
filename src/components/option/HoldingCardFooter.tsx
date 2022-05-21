import { styled, Container, Row, Col, Card, Text, User, Button, Spacer, Image } from "@nextui-org/react";
import EthAmount from '../EthAmount'

const StyledRow = styled(Row, { m: 0 })

export default function HoldingCardFooter() {
  return (
    <StyledRow css={{
      borderTop: '1px solid #f4f4f4',
      marginTop: '0.5rem',
      paddingTop: '0.5rem',
      alignItems: 'center'
      }}>
        <Button
          auto
          rounded
          css={{ margin: 'auto' }}
        >
          Exercise
        </Button>
    </StyledRow>
  )
}
