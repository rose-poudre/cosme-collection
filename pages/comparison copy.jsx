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

  // console.log(brand);
  // console.log(manufacture);

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  const chooseProduct = query(
    productsCollectionRef,
    where("brand", "not-in", ["アクア", "エリクシール"])
  );

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(chooseProduct);
      let product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (brand) {
        product = product.filter((output, index) => {
          return output.brand.includes(brand);
        });
        // setProducts(product);
      } else if (manufacture) {
        product = product.filter((output, index) => {
          return output.manufacture.includes(manufacture);
        });
        // setProducts(product);
      } else if (categorySmall) {
        product = product.filter((output, index) => {
          return output.categorySmall.includes(categorySmall);
        });
        // setProducts(product);
      } else {
      }
      setProducts(product);
    };
    getProducts();
  }, []);

  return (
    <div>
      <Header />

      <main className="flex mb-20">
        <section className="flex-grow pt-14 px-6">
          {/* <h1 className="text-3xl font-semibold mt-2 mb-6">
            「{brand}」 を含む検索結果
          </h1> */}
          <h1 className="text-3xl font-semibold mt-2 mb-6">結果を絞り込む</h1>
          <input type="text"></input>

          <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <ChooseBrand />
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
