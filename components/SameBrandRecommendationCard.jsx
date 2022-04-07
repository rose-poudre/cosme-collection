import Image from "next/image";
import { useRouter } from "next/router";

const SameBrandRecommendationCard = ({
  img,
  product,
  categorySmall,
  activeIngredientName,
  brand,
}) => {
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/productdetail",
      query: {
        img: img,
        brand: brand,
        product: product,
        categorySmall: categorySmall,
        activeIngredientName: activeIngredientName,
      },
    });
  };
  console.log(search);

  return (
    <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out mb-5">
      <div onClick={search} className="flex justify-center relative h-24">
        <Image src={img} layout="fill" className="rounded-xl object-contain" />
      </div>
      <h3 className="text-xs md:text-sm sm:py-1 m-3 bg-yellow-500  text-white text-center">
        {categorySmall}
      </h3>
      <h3 className="text-xs lg:text-sm text-gray-400 mb-0 mx-3">
        ＜有効成分＞
      </h3>
      <label className="max_300px text-yellow-600 font-semibold text-xs lg:text-sm mt-0 mx-3">
        {activeIngredientName}
      </label>
      <h3 className="text-xs lg:text-sm text-gray-400 mb-0 mx-3">＜商品名＞</h3>
      <label className="max_300px text-xs lg:text-sm mt-0 mx-3">
        {product}
      </label>
    </div>
  );
};

export default SameBrandRecommendationCard;
