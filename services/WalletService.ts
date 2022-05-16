import { ethers } from 'ethers'
import WalletConnect from "@walletconnect/client"
import QRCodeModal from "@walletconnect/qrcode-modal"

export default class WalletService {

  async connect(setConnectedAccount: (string?) => void) {
    const provider = new ethers.providers.Web3Provider(window.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    if (!!accounts[0]) {
      setConnectedAccount(accounts[0])
    }
  }

  getConnectedWallet() {

  }

  disconnect(setConnectedAccount: (string) => void) {
    setConnectedAccount(null)
  }
}
