import { ethers } from 'ethers'

export default class WalletService {

  async connect(setConnectedAccount: any) {
    const provider = new ethers.providers.Web3Provider(window?.ethereum)
    const accounts = await provider.send("eth_requestAccounts", []);
    if (!!accounts[0]) {
      setConnectedAccount(accounts[0])
    }
  }

  getConnectedWallet() {

  }

  disconnect(setConnectedAccount: any) {
    setConnectedAccount(null)
  }
}
