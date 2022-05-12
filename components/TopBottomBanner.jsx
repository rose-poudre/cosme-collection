import Image from "next/image";
import { useRouter } from "next/router";

const TopBottomBanner = ({ img, title, description, buttonText }) => {
  const router = useRouter();

  return (
    <section className="relative py-16 cursor-pointer">
      <div className="relative h-96 min-w-[300px]">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-white text-4xl mb-3 w-64">{title}</h3>
        <p className="text-white">{description}</p>
        <button
          onClick={() => router.push("/filtered")}
          className="text-sm text-gray-900 bg-white px-4 py-2 rounded-lg mt-5 cursor-pointer hover:shadow-lg hover:scale-105 transition transform ease-out hover:bg-gold-700"
        >
          {buttonText}
        </button>
      </div>
    </section>
  );
};

export default TopBottomBanner;
