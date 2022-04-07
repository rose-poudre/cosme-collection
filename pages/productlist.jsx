import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../public/src/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ChooseBrand from "../components/ChooseBrand";
import ChooseCategorySmall from "../components/ChooseCategorySmall";

const Productlist = ({ searchResult }) => {
  const router = useRouter();

  const {
    brand,
    categorySmall,
    manufacture,
    activeIngredientName,
    allIngredientName,
  } = router.query;

  const [products, setProducts] = useState([]);

  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      let product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      if (brand) {
        product = product.filter((output, index) => {
          return output.brand.includes(brand);
        });
        setProducts(product);
      } else if (manufacture) {
        product = product.filter((output, index) => {
          return output.manufacture.includes(manufacture);
        });
        setProducts(product);
      } else if (categorySmall) {
        product = product.filter((output, index) => {
          return output.categorySmall.includes(categorySmall);
        });
        setProducts(product);
      } else if (activeIngredientName) {
        product = product.filter((output, index) => {
          return output.activeIngredientName.includes(activeIngredientName);
        });
        setProducts(product);
      } else if (allIngredientName) {
        product = product.filter((output, index) => {
          return output.allIngredientName.includes(allIngredientName);
        });
        setProducts(product);
      } else {
      }
    };
    getProducts();
  }, [router.query]);

  return (
    <div>
      <Header />

      <main className="">
        <section className="flex-grow pt-14 px-6">
          <h2 className="text-3xl md:text-4xl font-semibold py-8">
            「
            {brand ||
              categorySmall ||
              manufacture ||
              activeIngredientName ||
              allIngredientName}
            」 を含む検索結果
          </h2>
          <div className="flex flex-col">
            {products.map(
              ({
                img,
                manufacture,
                brand,
                product,
                categorySmall,
                price,
                capacity,
                unit,
                star_point,
                activeIngredientName,
              }) => (
                <ProductCard
                  key={img}
                  img={img}
                  manufacture={manufacture}
                  brand={brand}
                  categorySmall={categorySmall}
                  product={product}
                  price={price}
                  capacity={capacity}
                  unit={unit}
                  star_point={star_point}
                  activeIngredientName={activeIngredientName}
                />
              )
            )}
          </div>
        </section>
        <section className="mb-20 ml-6">
          <h2 className="text-3xl md:text-4xl font-semibold mt-10 py-8">
            ブランドから探す
          </h2>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap"></div>
          <ChooseBrand />
        </section>
        <section className="mb-20 ml-6">
          <h2 className="text-3xl md:text-4xl font-semibold mt-10 py-8">
            カテゴリから探す
          </h2>
          <div className="text-wrap inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap"></div>
          <ChooseCategorySmall />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Productlist;
