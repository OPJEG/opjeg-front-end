import { parseFixed } from "@ethersproject/bignumber"
import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers"
import erc1155ABI from "../abis/IERC1155.json"

export const useERC1155 = () => {
  const { library, active, chainId, account } = useWeb3React()

  const getContract = (address: string) => {
    if (!active || !chainId) return

    const provider = new ethers.providers.Web3Provider(library.provider)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(address, erc1155ABI.abi, signer)
    return contract
  }

  const name = async (erc1155Address: string) => {
    const contract = await getContract(erc1155Address)
    if (contract) {
      return await contract.name()
    }
    return null
  }

  const approve = async (
    erc1155Address: string,
    spenderAddress: string,
    tokenId: number
  ) => {
    const contract = await getContract(erc1155Address)
    if (!contract) return

    const tx = await contract.setApprovalForAll(spenderAddress, true)
    await tx.wait()
  }

  return {
    getContract,
    name,
    approve,
  }
}
