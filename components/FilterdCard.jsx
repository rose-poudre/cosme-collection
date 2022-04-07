import { CashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";
// import ManufactureCard from "./ManufactureCard";

const FilterdCard = ({ placeholder }) => {
  const [manufactureInput, setManufactureInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [categoryInput, setCategoryInput] = useState("");
  const [allIngredientNameInput, setAllIngredientNameInput] = useState("");

  // const [minPrice, setMinPrice] = useState(1);
  // const [maxPrice, setMsxPrice] = useState(10000);
  const router = useRouter();

  const resetInput = () => {
    setManufactureInput("");
  };

  const search = () => {
    router.push({
      pathname: "/comparison",
      query: {
        manufacture: manufactureInput,
        brand: brandInput,
        categorySmall: categoryInput,
        categoryMiddle: categoryInput,
        categoryBig: categoryInput,
        allIngredientName: allIngredientNameInput,
        // price: minPrice,
        // price: maxPrice,
      },
    });
  };

  return (
    <div>
      {/* <div className="flex items-center border-b mt-10 mb-20">
        <CashIcon className="h-5 md:h-10" />
        <h2 className="text-md md:text-2xl flex-grow font-semibold">価格帯</h2>
        <input
          value={minPrice}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          min={1}
          className="w-12 pl-2 text-lg outline-none text-yellow-600"
        />
        〜
        <input
          value={maxPrice}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          min={1}
          className="w-12 pl-2 text-lg outline-none text-yellow-600"
        />
      </div> */}

      <p>■ 販売元</p>

      <div className="flex items-center border-2 rounded-md mb-10 py-2 md:shadow-sm">
        <input
          value={manufactureInput}
          onChange={(e) => setManufactureInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "例：資生堂"}
        />
      </div>

      {/* <div>
        <ManufactureCard />
      </div> */}

      <p>■ ブランド</p>
      <div className="flex items-center border-2 rounded-md mb-10 py-2 md:shadow-sm">
        <input
          value={brandInput}
          onChange={(e) => setBrandInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "例：アクアレーベル"}
        />
      </div>

      <p>■ カテゴリ</p>
      <div className="flex items-center border-2 rounded-md mb-10 py-2 md:shadow-sm">
        <input
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "例：化粧水"}
        />
      </div>

      <p>■ 含まれる成分</p>
      <div className="flex items-center border-2 rounded-md mb-10 py-2 md:shadow-sm">
        <input
          value={allIngredientNameInput}
          onChange={(e) => setAllIngredientNameInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "例：トラネキサム酸"}
        />
      </div>

      <div className="mx-auto z-30">
        <div className="flex mt-10">
          <button
            onClick={resetInput}
            className="flex-grow text-gray-500 bg-gray-100 w-20 py-5 mx-10 rounded-sm cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
          >
            Cancel
          </button>
          <button
            onClick={search}
            className="flex-grow text-white bg-yellow-500 w-20 py-2 mx-10 rounded-sm cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
          >
            Search
          </button>
        </div>
      </div>
      {/* )} */}
    </div>
  );
};

export default FilterdCard;
