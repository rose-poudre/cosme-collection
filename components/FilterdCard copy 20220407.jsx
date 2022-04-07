import { CashIcon } from "@heroicons/react/solid";
import { useState } from "react";
import { useRouter } from "next/router";
import ManufactureCard from "./ManufactureCard";

const FilterdCard = ({ placeholder }) => {
  //   const [manufactureInput, setManufactureInput] = useState("");
  //   const [brandInput, setBrandInput] = useState("");
  //   const [categorySmallInput, setCategorySmallInput] = useState("");
  //   const [allIngredientNameInput, setAllIngredientNameInput] = useState("");

  //   const [setPrice, setSetPrice] = useState(1);
  const router = useRouter();

  //   const resetInput = () => {
  //     setManufactureInput("");
  //   };

  //   console.log(manufactureInput);
  //   console.log(setManufactureInput);

  const search = () => {
    router.push({
      pathname: "/comparison",
      query: {
        manufacture: manufactureInput,
        brand: brandInput,
        categorySmall: categorySmallInput,
        allIngredientName: allIngredientNameInput,
        setPrice,
      },
    });
  };

  const [manufactureInput, setManufactureInput] = useState("");
  const [brandInput, setBrandInput] = useState("");
  const [categorySmallInput, setCategorySmallInput] = useState("");
  const [allIngredientNameInput, setAllIngredientNameInput] = useState("");
  const [setPrice, setSetPrice] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "manufactureInput":
        setManufactureInput(event.target.value);
        console.log(setManufactureInput);
        break;
      case "brandInput":
        setBrandInput(event.target.value);
        console.log(setBrandInput);
        break;
      case "categorySmallInput":
        setCategorySmallInput(event.target.value);
        break;
      case "allIngredientNameInput":
        setAllIngredientNameInput(event.target.value);
        break;
      case "setPrice":
        setSetPrice(event.target.value);
        break;
      default:
        console.log("key not found");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(manufactureInput);
    console.log(brandInput);
    console.log(categorySmallInput);
    console.log(allIngredientNameInput);
    console.log(setPrice);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <div className="flex items-center border-b mt-10 mb-20">
          <h2 className="text-2xl flex-grow font-semibold">価格帯</h2>

          <CashIcon className="h-10" />
          <input
            name="setPrice"
            value={setPrice}
            onChange={handleChange}
            type="number"
            min={1}
            className="w-12 pl-2 text-lg outline-none text-yellow-600"
          />
        </div>

        <p>■ メーカー</p>

        <div className="mb-10">
          <ManufactureCard
            name="manufactureInput"
            value={manufactureInput}
            onChange={handleChange}
            type="text"
          />
        </div>

        <p>■ ブランド</p>
        <div className="flex items-center border-2 rounded-md mb-10 py-2 md:shadow-sm">
          <input
            name="brandInput"
            value={brandInput}
            onChange={handleChange}
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
            type="text"
            placeholder={placeholder || "例：アクアレーベル"}
          />
        </div>

        <p>■ カテゴリ</p>
        <div className="flex items-center border-2 rounded-md mb-10 py-2 md:shadow-sm">
          <input
            name="categorySmallInput"
            value={categorySmallInput}
            onChange={handleChange}
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
            type="text"
            placeholder={placeholder || "例：化粧水"}
          />
        </div>

        <p>■ 含まれる成分</p>
        <div className="flex items-center border-2 rounded-md mb-10 py-2 md:shadow-sm">
          <input
            name="allIngredientNameInput"
            value={allIngredientNameInput}
            onChange={handleChange}
            className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
            type="text"
            placeholder={placeholder || "例：トラネキサム酸"}
          />
        </div>

        <div className="mx-auto ">
          <div className="flex mt-10">
            {/* <button
              onClick={resetInput}
              className="flex-grow text-gray-500 bg-gray-100 w-20 py-5 mx-2 md:mx-10 rounded-sm cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
            >
              Cancel
            </button> */}
            <button
              onClick={search}
              className="flex-grow text-white bg-yellow-500 w-20 py-2 mx-2 md:mx-10 rounded-sm cursor-pointer hover:scale-105 transform transition duration-300 ease-out"
            >
              Search
            </button>
            {/* <input type="submit" value="Submit" /> */}
          </div>
        </div>
        {/* )} */}
      </div>
    </form>
  );
};

export default FilterdCard;
