import Image from "next/image";
import { SearchIcon } from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { useRouter } from "next/router";
import Accordion from "../components/Accordion";

const Header = ({ placeholder }) => {
  const [searchInput, setSearchInput] = useState("");
  const router = useRouter();

  const search = () => {
    router.push({
      pathname: "/productlist",
      query: {
        allIngredientName: searchInput,
      },
    });
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-2 sm:grid-cols-3 bg-white shadow-md p-5 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-14 cursor-pointer my-auto"
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/rikejo-cosme.appspot.com/o/rikejo_cosme_logo.png?alt=media&token=e781bbd0-3efa-482f-9a05-cc90fbf42c56"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle - Search */}
      <div className="hidden sm:flex items-center border-2 rounded-full py-2 md:shadow-sm">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
          type="text"
          placeholder={placeholder || "成分名で検索"}
        />
        <button onClick={search} className="flex-grow text-yellow-600">
          <SearchIcon className="hidden md:inline-flex h-8 bg-yellow-600 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end text-gray-500">
        <div className="flex items-center rounded-md bg-yellow-600">
          <Accordion className="h-6" />
        </div>
      </div>

      {searchInput && <div className="flex flex-col col-span-3 mx-auto "></div>}
    </header>
  );
};

export default Header;
