import { CashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";

const FilterdCard = ({ placeholder }) => {
  const [manufactureInput, setManufactureInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [categorySmallInput, setCategorySmallInput] = useState("");

  const [setPrice, setSetPrice] = useState(1);
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
        categorySmall: categorySmallInput,
        setPrice,
      },
    });
  };

  return (
    <div>
      <div className="flex items-center border-b mt-10 mb-20">
        <h2 className="text-2xl flex-grow font-semibold">価格帯</h2>

        <CashIcon className="h-10" />
        <input
          value={setPrice}
          onChange={(e) => setPrice(e.target.value)}
          type="number"
          min={1}
          className="w-12 pl-2 text-lg outline-none text-yellow-600"
        />
      </div>

      <p>■ メーカーを入力</p>
      <div className="flex items-center md:border-2 rounded-md mb-10 py-2 md:shadow-sm">
        <input
          value={manufactureInput}
          onChange={(e) => setManufactureInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "例：資生堂"}
        />
      </div>

      <p>■ ブランドを入力</p>
      <div className="flex items-center md:border-2 rounded-md mb-10 py-2 md:shadow-sm">
        <input
          value={brandInput}
          onChange={(e) => setBrandInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "例：アクアレーベル"}
        />
      </div>

      <p>■ カテゴリを入力</p>
      <div className="flex items-center md:border-2 rounded-md mb-10 py-2 md:shadow-sm">
        <input
          value={categorySmallInput}
          onChange={(e) => setCategorySmallInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "例：化粧水"}
        />
      </div>

      <div className="mx-auto ">
        <div className="flex mt-10">
          <button
            onClick={resetInput}
            className="flex-grow text-gray-500 px-20 py-5"
          >
            Cancel
          </button>
          <button
            onClick={search}
            className="flex-grow text-white bg-yellow-500 px-20 py-2 rounded-sm"
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
