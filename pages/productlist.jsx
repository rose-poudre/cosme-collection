import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../public/src/firebase-config";
import { collection, getDocs, query, where } from "firebase/firestore";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import ChooseBrand from "../components/ChooseBrand";

const Productlist = ({ searchResult }) => {
  const router = useRouter();
  const { brand, categorySmall, manufacture, activeIngredientName } =
    router.query;

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
      } else {
      }
    };
    getProducts();
  }, []);

  return (
    <div>
      <Header />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            「{brand}」 を含む検索結果
          </h1>

          <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <ChooseBrand />
          </div>

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
                />
              )
            )}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Productlist;
