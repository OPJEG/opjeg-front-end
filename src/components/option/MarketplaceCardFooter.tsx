import { styled, Container, Row, Col, Card, Text, User, Button, Spacer, Image } from "@nextui-org/react";
import EthAmount from '../EthAmount'

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function MarketplaceCardFooter() {
  return (
    <StyledRow css={{
      borderTop: '1px solid #ccc',
      marginTop: '0.5rem',
      paddingTop: '0.5rem',
      alignItems: 'center'
      }}>
      <StyledCol>
        <User
          name="0xc92fa..."
          size="sm"
          css={{ p: 0 }}
        />
      </StyledCol>

      <StyledCol>
        <Button
          auto
          rounded
          css={{ marginLeft: 'auto' }}
        >
          Buy
        </Button>
      </StyledCol>
    </StyledRow>
  )
}
