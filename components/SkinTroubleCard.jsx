import Image from "next/image";
import { useRouter } from "next/router";

const SkinTroubleCard = ({ img, trouble }) => {
  const router = useRouter();

  const handlClick = () => {
    router.push({
      pathname: "/productlist",
      query: { allIngredientName: trouble },
    });
  };
  console.log(handlClick);

  return (
    <div
      onClick={handlClick}
      className="bg-white flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gold-100 hover:text-white hover:scale-105 transition transform duration-400 ease-out"
    >
      {/* left */}
      <div className="relative h-16 w-20">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* right */}
      <div>
        <h2>{trouble}</h2>
      </div>
    </div>
  );
};

export default SkinTroubleCard;
