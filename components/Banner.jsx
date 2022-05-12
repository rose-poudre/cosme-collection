import Image from "next/image";
import { useRouter } from "next/router";

const Banner = () => {
  const router = useRouter();

  return (
    <div className="relative h-[300px] sm:h-[400] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]">
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/rikejo-cosme.appspot.com/o/top-banner.jpeg?alt=media&token=30e63c5c-f5c1-4633-b68c-590fcd7c757a"
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
