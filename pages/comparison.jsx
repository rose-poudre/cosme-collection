import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../public/src/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ChooseBrand from "../components/ChooseBrand";
import ComparisonCard from "../components/ComparisonCard";

const Comparison = ({ placeholder }) => {
  const router = useRouter();

  const { manufacture, brand, categorySmall } = router.query;

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const chooseProduct = query(
    productsCollectionRef,
    where("brand", "not-in", ["アクア", "エリクシール"])
  );

  const notintest20220403 = ["エリクシール"];

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(chooseProduct);
      let product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      product = product.filter((output, index) => {
        return output.brand.includes(brand);
      });

      product = product.filter((output, index) => {
        return output.manufacture.includes(manufacture);
      });

      product = product.filter((output, index) => {
        return output.categorySmall.includes(categorySmall);
      });

      setProducts(product);
    };
    getProducts();
  }, []);

  const excludeSearch = () => {
    const excludeIngredients = document.getElementById(
      "excludeSearchButton"
    ).value;
    const excludeIngredient = excludeIngredients.split(",");
    excludeIngredient.forEach((name) => {
      setProducts(
        products.filter((output, index) => {
          return output.brand.indexOf(name) === -1;
        })
      );
    });
  };

  return (
    <div>
      <Header />

      <main className="flex mb-20">
        <section className="flex-grow pt-14 px-6">
          {/* <h1 className="text-3xl font-semibold mt-2 mb-6">
            「{brand}」 を含む検索結果
          </h1> */}
          {/* <h1 className="text-3xl font-semibold mt-2 mb-6">結果を絞り込む</h1>
          <div>
            <input
              id="excludeSearchButton"
              type="text"
              className="bg-gray-500"
            ></input>
            <button onClick={excludeSearch}>決定</button>
          </div> */}

          <h1 className="text-3xl font-semibold mt-2 mb-6">結果を絞り込む</h1>
          <div className="sticky top-0 z-50 grid grid-cols-3 bg-white mb-10">
            <div className="flex">
              <input
                id="excludeSearchButton"
                type="text"
                className="items-center md:border-2 rounded-sm py-2 md:shadow-sm flex-grow text-yellow-600 px-5"
                placeholder={placeholder || "除外したい成分を入力"}
              ></input>
              <button
                onClick={excludeSearch}
                className="flex-grow bg-yellow-600 rounded-sm"
              >
                決定
              </button>
            </div>
          </div>

          <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <ChooseBrand />
          </div>
          <section>
            <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
              <ComparisonCard products={products} />
            </div>
          </section>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comparison;
