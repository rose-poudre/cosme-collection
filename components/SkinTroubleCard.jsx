import Image from "next/image";

const SkinTroubleCard = ({ img, trouble }) => {
  return (
    <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200 ease-out">
      {/* left */}
      <div className="relative h-16 w-20">
        <Image src={img} layout="fill" className="rounded-lg" />
      </div>

      {/* right */}
      <div>
        <h2>{trouble}</h2>
        {/* <h3 className="text-gray-500">{trouble}</h3> */}
      </div>
    </div>
  );
};

export default SkinTroubleCard;
