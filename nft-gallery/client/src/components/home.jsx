import { useEffect, useState } from 'react';
import { ethers } from 'ethers';

import { WalletBalance } from './wallet-balance';
import { NFTImage } from './nft-image';

import GalleryPictures from '../abi/gallery-picture.json';

//const contractAddress = '0x5FbDB2315678afecb367f032d93F642f64180aa3'; // TODO: move to env
const contractAddress = '0x7dB482C50AFC339F662233312217d2444289f7Bf';

const provider = new ethers.providers.Web3Provider(window.ethereum);

// get the end user
const signer = provider.getSigner();

// get the smart contract
const contract = new ethers.Contract(contractAddress, GalleryPictures, signer);

export function Home() {
  const [totalMinted, setTotalMinted] = useState(0);
  const [recipients, setRecipients] = useState([]);

  useEffect(async () => {
    await getCount();
    await getAllRecipients();
  }, []);

  const getCount = async () => {
    const count = await contract.count();
    setTotalMinted(parseInt(count));
  };

  const getAllRecipients = async () => {
    const recipients = await contract.getAllRecipients();
    setRecipients(recipients);
  };

  return (
    <div>
        <WalletBalance />

        {Array(totalMinted)
        .fill(0)
        .map((_, i) => (
            <div key={i}>
            <NFTImage tokenId={i} contract={contract} getCount={getCount} signer={signer} recipients={recipients} />
            </div>
        ))}
    </div>
  );
};
