import Image from "next/image";
import { HeartIcon } from "@heroicons/react/solid";
import { StarIcon } from "@heroicons/react/solid";
import Router from "next/router";

const handlClick = (
  img,
  manufacture,
  brand,
  categorySmall,
  activeIngredientName,
  capacity,
  unit
) => {
  Router.push({
    pathname: "/productdetail",
    query: {
      img: img,
      manufacture: manufacture,
      brand: brand,
      categorySmall: categorySmall,
      activeIngredientName: activeIngredientName,
      capacity: capacity,
      unit: unit,
    },
  }),
    [];
};

console.log(handlClick);

const ProductCard = ({
  img,
  manufacture,
  brand,
  categorySmall,
  product,
  release_date,
  price,
  activeIngredientName,
  capacity,
  unit,
  star_point,
}) => {
  return (
    <div
      className="bg-white gird grid-col-3 sm:flex py-7 px-2 pr-4 border-b cursor-pointer hover:opacity-80 hover:shadow-lg transition duration-200 ease-out first:border-t"
      onClick={() =>
        handlClick(
          img,
          manufacture,
          brand,
          categorySmall,
          activeIngredientName,
          capacity,
          unit
        )
      }
    >
      {/* <div className="bg-contain bg-center relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0"> */}
      <div className="bg-contain bg-center relative h-60 p-10 mr-20 ml-20 mb-5 flex-shrink-0">
        <Image
          src={img}
          layout="fill"
          // objectFit="cover"
          objectfit="contain"
          className="rounded-2xl object-contain"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>
            {manufacture} &gt; {brand}
          </p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{product}</h4>
        <div className="border-b w-10 pt-2" />
        <p className="pt-2 text-sm text-gray-500 flex-grow">{categorySmall}</p>

        <div className="flex justify-between items-end pt-5">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star_point}
          </p>

          <div>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              {release_date}
            </p>
            <p className="text-lg lg:text-2xl font-semibold pb-2">
              {Number(price).toLocaleString()}
              <span className="text-sm text-gray-500"> 円（税込）</span>
            </p>
            <p className="text-right font-extralight">
              {capacity} {unit}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
