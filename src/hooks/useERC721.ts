import { parseFixed } from "@ethersproject/bignumber"
import { useWeb3React } from "@web3-react/core"
import { ethers } from "ethers"
import erc721ABI from "../abis/IERC721.json"

export const useERC721 = () => {
  const { library, active, chainId, account } = useWeb3React()

  const getContract = (address: string) => {
    if (!active || !chainId) return

    const provider = new ethers.providers.Web3Provider(library.provider)
    const signer = provider.getSigner()

    const contract = new ethers.Contract(address, erc721ABI.abi, signer)
    return contract
  }

  const name = async (erc721Address: string) => {
    const contract = await getContract(erc721Address)
    if (contract) {
      return await contract.name()
    }
    return null
  }

  const approve = async (
    erc721Address: string,
    spenderAddress: string,
    tokenId: number
  ) => {
    const contract = await getContract(erc721Address)
    if (!contract) return

    const tx = await contract.approve(
      spenderAddress,
      tokenId
    )

    return tx.wait()
  }

  const getApproved = async (
    erc721Address: string,
    tokenId: number
  ) => {
    const contract = await getContract(erc721Address)
    if (!contract) return

    return await contract.getApproved(tokenId)
  }

  return {
    getContract,
    name,
    approve,
    getApproved,
  }
}
