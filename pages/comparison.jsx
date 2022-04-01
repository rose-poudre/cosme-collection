import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../public/src/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ChooseBrand from "../components/ChooseBrand";
import ComparisonCard from "../components/ComparisonCard";
import { SearchIcon } from "@heroicons/react/solid";

const Comparison = ({ placeholder }) => {
  const router = useRouter();
  const { brand } = router.query;

  const [searchInput, setSearchInput] = useState("");
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const chooseProduct = query(
    productsCollectionRef,
    where("brand", "not-in", ["アクア", "エリクシール　シュペリエル"])
  );

  const search = () => {
    router.push({
      pathname: "/test20220327",
      query: {
        brand: searchInput,
      },
    });
  };

  useEffect(() => {
    // const exclusionFilter = searchInput;
    // console.log(exclusionFilter + 1);

    const getProducts = async () => {
      const data = await getDocs(chooseProduct);
      console.log(data);
      console.log(productsCollectionRef);

      let product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if ((brand = searchInput.match(searchInput))) {
        product = product.filter((output, index) => {
          return output.brand.includes(brand);
        });
        console.log(product);
        console.log(searchInput + "呼ばれてる？");
      } else {
        console.log("ヒットしません");
      }
      setProducts(product);
    };
    getProducts();
  }, [router.query.brand]);
  console.log(products);

  return (
    <div>
      <Head>
        <title>Rikejo Cosme</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ProductCard /> */}
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          {/* <p className="text-tx">
            300+ Stays - {range}- for {noOfGuests} guests
          </p> */}

          {/* <h1 className="text-3xl font-semibold mt-2 mb-6">
            「{brand}」 を含む検索結果
          </h1> */}
          <h1 className="text-3xl font-semibold mt-2 mb-6">結果を絞り込む</h1>
          <input type="text"></input>

          <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <ChooseBrand />
          </div>
          <div>
            {/* Middle - Search */}
            <div className="flex items-center md:border-2 rounded-full py-2 md:shadow-sm">
              <input
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="flex-grow pl-5 bg-transparent outline-none text-sm text-gray-400"
                type="text"
                placeholder={placeholder || "除外したい成分を入力"}
              />
              <button onClick={search} className="flex-grow text-yellow-600">
                <SearchIcon className="hidden md:inline-flex h-8 bg-yellow-600 text-white rounded-full p-2 cursor-pointer md:mx-2" />
              </button>
            </div>
          </div>
          <div>
            <ComparisonCard products={products} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comparison;
