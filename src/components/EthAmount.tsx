import { Text } from '@nextui-org/react';
import EthSymbol from './EthSymbol'

export default function EthAmount({ amount, css }: { amount: number, css?: any }) {
  return (
    <Text css={{ ...css, display: 'flex', alignItems: 'center' }}>
      <EthSymbol /> { amount } ETH
    </Text>
  )
}
