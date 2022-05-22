import { useState } from "react"
import { styled, Container, Row, Col, Card, Text, User, Button, Spacer, Image, Link } from "@nextui-org/react";

import { useOpjegFactory } from '../../hooks/useOpjegFactory'
import NFT from '../../interfaces/NFT'
import EthSymbol from '../EthSymbol'
import EthAmount from '../EthAmount'
import SelectNftModal from '../../views/account/components/SelectNftModal'

const StyledRow = styled(Row, { m: 0 })
const StyledCol = styled(Col, { p: 0 })

export default function MarketplaceOptionCard({ option }: { option: NFT }) {
  const { exerciseCall, exercisePut } = useOpjegFactory()

  const optionType = option.traits.find(t => t.trait_type == 'Type')?.value
  const strikePrice = option.traits.find(t => t.trait_type == 'Strike')?.value
  const expiryDate = option.traits.find(t => t.trait_type == 'Expiry')?.value

  return (
    <Card hoverable css={{ border: '10px solid #fff'}}>
      <Card.Body css={{ p: 0 }}>
        <Card.Image
          src={ option.image_preview_url }
          objectFit="cover"
          width="100%"
          />
      </Card.Body>

      <Card.Footer css={{ p: '0.5rem' }}>
        <Container fluid css={{ p: 0 }}>
          <StyledRow>
            <StyledCol css={{ p: 0 }}>
              { optionType == 'CALL' &&
                <Text small css={{ p: '2px 10px', color: '#fff', borderRadius: 7, bg: '#17C964' }}>Call</Text>
              }
              { optionType == 'PUT' &&
                <Text small css={{ p: '2px 10px', color: '#fff', borderRadius: 7, bg: '#F31260' }}>Put</Text>
              }
              <Text h3>{ option.name || '#' + option.token_id }</Text>
              <Text b>{ option.asset_contract.name }</Text>
            </StyledCol>
          </StyledRow>

          <Spacer y={0.3} />

          <StyledRow>
            <StyledCol>
              <Text css={{ fs: '90%', mb: '-5px' }}>Floor Price</Text>
              <EthAmount amount={null} />
            </StyledCol>

            <StyledCol css={{textAlign: 'right'}}>
              <Text css={{ fs: '90%', mb: '-5px' }}>Strike Price</Text>
              <Text css={{ justifyContent: 'end' }}><EthSymbol /> {strikePrice}</Text>
            </StyledCol>
          </StyledRow>

          <StyledRow css={{
            borderTop: '1px solid #f4f4f4',
            marginTop: '0.5rem',
            paddingTop: '0.5rem',
            alignItems: 'center'
            }}>
              <Link href={option.permalink} target="_blank" css={{ margin: 'auto' }}>
                <Button auto rounded>Buy from Opensea</Button>
              </Link>
          </StyledRow>
        </Container>
      </Card.Footer>
    </Card>
  )
}
