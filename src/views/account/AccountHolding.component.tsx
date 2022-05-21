import { Spacer } from "@nextui-org/react"
import OptionGallery from '../../components/option/OptionGallery'
import HoldingCardFooter from '../../components/option/HoldingCardFooter'

const AccountHolding = () => {
  return (
    <>
      <OptionGallery title="Your Holding Calls" footer={<HoldingCardFooter />} />
      <Spacer y={3} />
      <OptionGallery title="Your Holding Puts" footer={<HoldingCardFooter />} />
    </>
  )
}

export default AccountHolding
