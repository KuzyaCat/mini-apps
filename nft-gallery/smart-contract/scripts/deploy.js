const hre = require("hardhat");

async function main() {
  const GalleryPictures = await hre.ethers.getContractFactory("GalleryPictures");
  const galleryPictures = await GalleryPictures.deploy();

  await galleryPictures.deployed();

  console.log("GalleryPictures deployed to:", galleryPictures.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
