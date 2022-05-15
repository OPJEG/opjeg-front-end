import { Text } from '@nextui-org/react';

export default function SectionHead({ title, subtitle }) {
  return (
    <div style={{ padding: '4rem 0' }}>
      <Text
        h1
        align="center"
        css={{ textGradient: "45deg, $blue600 20%, $pink600 60%" }}
        >
        { title }
      </Text>

      <Text size="1.5rem" align="center">
        { subtitle }
      </Text>
    </div>
  )
}
