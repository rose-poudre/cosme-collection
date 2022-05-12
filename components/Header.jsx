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
    <header className="sticky top-0 z-50 grid grid-cols-2 sm:grid-cols-3 navbar shadow-md px-5 md:px-10">
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className="relative flex items-center h-14 cursor-pointer sm:mr-12"
      >
        <Image
          src="https://firebasestorage.googleapis.com/v0/b/rikejo-cosme.appspot.com/o/cosme_science-logo-long.png?alt=media&token=7dce2ccc-fe8b-45c3-8f42-8ee24eb32f9d"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>
      {/* Middle - Search */}
      <div className="hidden sm:flex items-center border-2 rounded-sm my-2 md:shadow-sm bg-white opacity-75">
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="flex-grow pl-5 bg-transparent outline-none text-sm text-gold-800"
          type="text"
          placeholder={placeholder || "成分名で検索"}
        />
        <button onClick={search} className="flex-grow text-gold-600">
          <SearchIcon className="hidden sm:inline-flex h-8 bg-gold-500 opacity-9 text-white rounded-full p-2 cursor-pointer md:mx-2" />
        </button>
      </div>

      {/* Right */}
      <div className="flex items-center space-x-4 justify-end">
        <div className="flex items-center rounded-sm bg-gold-400">
          <Accordion className="h-6" />
        </div>
      </div>

      {searchInput && <div className="flex flex-col col-span-3 mx-auto "></div>}
    </header>
  );
};

export default Header;
