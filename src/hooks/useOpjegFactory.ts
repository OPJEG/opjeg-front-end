import { ethers, BigNumber } from 'ethers'
import { useWeb3React } from "@web3-react/core"

import NFT from '../interfaces/NFT'
import OptionType from '../interfaces/OptionType'
import OPJEGv3 from '../abis/OPJEG/OPJEGv3.json'
import { opjegContract } from '../constants/opjegContract'
import { useERC721 } from './useERC721'

export const useOpjegFactory = () => {
  const { library, active, chainId } = useWeb3React()
  const { approve, getApproved } = useERC721()

  const getContract = () => {
    if (!active || !chainId) return

    const provider = new ethers.providers.Web3Provider(library.provider)
    const signer = provider.getSigner()
    const contractAddress = opjegContract[chainId]

    const ContractFactory = new ethers.Contract(
      contractAddress,
      OPJEGv3.abi,
      signer
    )

    return ContractFactory
  }

  const getOptionData = async (tokenId: number) => {
    const contract = await getContract()
    if (!contract) return null

    return await contract.optionData(tokenId)
  }

  const mintCall = async (nft: NFT, strikePrice: BigNumber, expiryDate: Date) => {
    if (!active || !chainId) return

    const contract = await getContract()
    if (!contract) return

    const nftAddress = nft.asset_contract.address
    const tokenId = parseInt(nft.token_id)
    const deadline = Math.floor(expiryDate.getTime() / 1000)
    console.log({ tokenId, strikePrice, deadline })

    // Approve Objeg contract to work with the NFT if not approved yet
    const approvedContract = (await getApproved(nftAddress, tokenId)).toLowerCase()
    if (approvedContract != opjegContract[chainId]) {
      await approve(nftAddress, opjegContract[chainId], tokenId)
    }

    // Mint the option
    const tx = await contract['mintCall(uint256,uint256,uint256)'](tokenId, strikePrice, deadline)
    return tx.wait()
  }

  const mintPut = async () => {

  }

  const burnOption = async (option: NFT) => {
    if (!active || !chainId) return

    const contract = await getContract()
    if (!contract) return

    // Burn the option
    const optionId = parseInt(option.token_id)
    const tx = await contract.burnOption(optionId)
    return tx.wait()
  }

  const exerciseCall = async (option: NFT) => {
    if (!active || !chainId) return

    const contract = await getContract()
    if (!contract) return

    const optionData = await getOptionData(parseInt(option.token_id))

    console.log(optionData)

    // Exercise the Call option
    const optionId = parseInt(option.token_id)
    const tx = await contract.exerciseCall(optionId, { value: optionData.strikePrice })
    return tx.wait()
  }

  return {
    mintCall,
    mintPut,
    burnOption,
    exerciseCall,
  }
}
