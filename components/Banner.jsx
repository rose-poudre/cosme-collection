import Image from "next/image";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rikejo-cosme.appspot.com/o/woman-gc90fb67d2_1920.jpg?alt=media&token=af32684b-e741-464d-a02c-71443f221be9"
        layout="fill"
        objectFit="cover"
      />
      <div className="absolute top-3/4 w-full text-center">
        {/* <p className="text-sm sm:text-lg">有効成分は含まれている？</p> */}
        <button
          onClick={() => router.push("/filtered")}
          className="text-gold-300 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-md hover:scale-105 hover:bg-gold-100 hover:text-white active:scale-90 transition duration-150"
        >
          比較検索する
        </button>
      </div>
    </div>
  );
};

export default Banner;
