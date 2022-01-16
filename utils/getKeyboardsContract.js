import { ethers } from "ethers";

import abi from "../utils/Keyboards.json"

const contractAddress = '0xBAd80f41d779322E72BC71F3e6519be81dAAd944';
const contractABI = abi.abi;

export default function getKeyboardsContract(ethereum) {
  if(ethereum) {
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();
    return new ethers.Contract(contractAddress, contractABI, signer);
  } else {
    return undefined;
  }
}