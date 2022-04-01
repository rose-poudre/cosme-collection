import { connectStorageEmulator } from "firebase/storage";
import Image from "next/image";
import { useRouter } from "next/router";

const MediumCard = ({ img, product, categorySmall, activeIngredientName }) => {
  const router = useRouter();
  // const { brand } = router.query;

  const search = () => {
    router.push({
      pathname: "/productdetail",
      query: {
        img: img,
      },
    });
  };
  console.log(search);

  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
      <div onClick={search} className="relative h-60 w-60">
        <Image src={img} layout="fill" className="rounded-xl object-contain" />
      </div>
      <h3 className="text-md py-2 m-3 bg-yellow-500 text-center">
        {categorySmall}
      </h3>
      <h3 className="text-md text-gray-400 mb-0 mx-3">＜有効成分＞</h3>
      <h3 className="text-sm mt-0 mx-3">{activeIngredientName}</h3>
    </div>
  );
};

export default MediumCard;
