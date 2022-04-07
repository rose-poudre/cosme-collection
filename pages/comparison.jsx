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

  const {
    manufacture,
    brand,
    categoryBig,
    categoryMiddle,
    categorySmall,
    allIngredientName,
  } = router.query;

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      // const data = await getDocs(chooseProduct);
      const data = await getDocs(productsCollectionRef);
      let product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      product = product.filter((output, index) => {
        return output.brand.includes(brand);
      });

      product = product.filter((output, index) => {
        return output.manufacture.includes(manufacture);
      });

      // if (categoryBig) {
      //   product = product.filter((output, index) => {
      //     return output.categoryBig.includes(categoryBig);
      //   });
      // } else if (categoryMiddle) {
      //   product = product.filter((output, index) => {
      //     return output.categoryMiddle.includes(categoryMiddle);
      //   });
      // } else {
      //   product = product.filter((output, index) => {
      //     return output.categorySmall.includes(categorySmall);
      //   });
      // }

      if (categoryBig.includes({ categoryBig })) {
        product = product.filter((output, index) => {
          return output.categoryBig.includes(categoryBig);
        });
        alert("含まれない");
      }

      product = product.filter((output, index) => {
        return output.categoryMiddle.includes(categoryMiddle);
      });

      product = product.filter((output, index) => {
        return output.categorySmall.includes(categorySmall);
      });

      product = product.filter((output, index) => {
        return output.allIngredientName.includes(allIngredientName);
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
          return output.allIngredientName.indexOf(name) === -1;
        })
      );
    });
  };

  return (
    <div>
      <Header />

      {/* <main className="overflow-scroll sm:flex sm:mb-20"> */}
      <main className="mb-20">
        <section className="flex-grow pt-14 px-6">
          <h1 className="text-3xl font-semibold mt-2 mb-6">結果を絞り込む</h1>
          <h3 className="font-semibold">成分名で除外検索</h3>
          <div className="top-0 z-50 grid  grid-cols-1 sm:grid-cols-2 bg-white mb-10">
            <div className="flex">
              <input
                id="excludeSearchButton"
                type="text"
                className="items-center border-2 rounded-sm py-2 shadow-sm flex-grow text-yellow-600 px-5"
                placeholder={placeholder || "除外したい成分を入力"}
              ></input>
              <button
                onClick={excludeSearch}
                className="flex-grow bg-yellow-600 text-white rounded-sm shadow-sm"
              >
                決定
              </button>
            </div>
          </div>

          <div>
            {/* <div className="inline-flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3"> */}
            <div className="space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3 text-gray-800 whitespace-nowrap">
              <ComparisonCard products={products} />
            </div>
          </div>

          <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <ChooseBrand />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Comparison;
