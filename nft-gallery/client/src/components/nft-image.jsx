import { useState, useEffect } from 'react';
import { ethers } from 'ethers';

export function NFTImage(props) {
  const { tokenId, contract, signer, recipients } = props;

  const [URI, setURI] = useState(null);

  const contentId = 'QmfJRaBApgWqWZ8vZfW5V1hK6EgcJc8hoYDbtEJ2Di3gjC'; // TODO: move to env
  const metadataURI = `${contentId}/${tokenId}.json`;
  //const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}/${tokenId}.png`;
  const imageURI = `https://gateway.pinata.cloud/ipfs/${contentId}`;

  const [isMinted, setIsMinted] = useState(false);

  useEffect(async () => {
    await getMintedStatus();
    await getURI();
  }, [isMinted]);

  const getMintedStatus = async () => {
    const result = await contract.isContentOwned(metadataURI);
    console.log(result)
    setIsMinted(result);
  };

  const mintToken = async () => {
    console.log('signer', signer);
    const connection = contract.connect(signer);
    console.log('connection', connection);
    const addr = connection.address;
    const result = await contract.payToMint(addr, metadataURI, {
      value: ethers.utils.parseEther('0.05'),
    });

    await result.wait();
    await getMintedStatus();
    await getCount();
  };

  async function getURI() {
    const uri = await contract.tokenURI(tokenId);
    console.log('uri', uri);
    setURI(uri);
  }

  return (
    <div>
      <img
        src={isMinted && URI ? URI : '/images/placeholder.jpeg'}
        alt="Gallery image"
        width="100px"
        height="100px"
      ></img>
      <h5>ID #{tokenId}</h5>
      <ul>
        {recipients.map((recipient) => <li>{recipient}</li>)}
      </ul>
      {!isMinted ? (
        <button onClick={mintToken}>
          Mint
        </button>
      ) : (
        <button onClick={getURI}>
          Taken! Show URI
        </button>
      )}
    </div>
  );
}
