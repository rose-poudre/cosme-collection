import Head from "next/head";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { db } from "../public/src/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import Header from "../components/Header";
import Banner from "../components/Banner";
import MediumCard from "../components/MediumCard";
import Footer from "../components/Footer";
import SkinTroubleCard from "../components/SkinTroubleCard";
import ChooseBrand from "../components/ChooseBrand";
import ChooseCategorySmall from "../components/ChooseCategorySmall";
import TopBottomBanner from "../components/TopBottomBanner";
import ChooseActiveIngredientName from "../components/ChooseActiveIngredientName";

const Index = ({ searchResult, cardsData }) => {
  const router = useRouter();
  const { brand } = router.query;

  const [skintroubles, setSkintroubles] = useState([]);
  const skinTroublesCollectionRef = collection(db, "skinTroubles");

  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getSkintroubles = async () => {
      let skintroubledata = await getDocs(skinTroublesCollectionRef);

      let trouble = skintroubledata.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));

      if (brand) {
        trouble = trouble.filter((output, index) => {
          return output.brand.includes(trouble);
        });
      }
      setSkintroubles(trouble);
    };
    getSkintroubles();
  }, []);
  // console.log(products);

  useEffect(() => {
    const getProducts = async () => {
      let data = await getDocs(productsCollectionRef);

      let product = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));

      if (brand) {
        product = product.filter((output, index) => {
          return output.brand.includes(brand);
        });
      }
      setProducts(product);
    };
    getProducts();
  }, []);

  // export default function Home({ exploreData, cardsData }) {
  return (
    <div className="bg-gold-500">
      <Head>
        <title>Cosmetics Collection</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="apple-touch-icon"
          href="https://firebasestorage.googleapis.com/v0/b/rikejo-cosme.appspot.com/o/apple-touch-icon_cosme-science.png?alt=media&token=566a470a-d05e-4c92-9491-949961f1e148"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <ProductCard /> */}
      <Header />
      <Banner />
      {/* <PriceCard /> */}

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-3xl md:text-4xl font-semibold mt-10 py-8">
            ???????????????
          </h2>

          <div className="grid grid-cols-1 text-sm sm:text-base sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
            {skintroubles?.map(({ img, trouble }) => (
              <SkinTroubleCard key={img} img={img} trouble={trouble} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold mt-10 py-8">
            ????????????????????????
          </h2>
          <div className="text-wrap inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap"></div>
          <ChooseActiveIngredientName />
        </section>

        <section>
          <h2 className="text-3xl md:text-4xl font-semibold mt-10 py-8">
            ???????????????
          </h2>
          <div className="flex space-x-3 overflow-scroll scrollbar-hide p-3 -ml-3">
            {products?.map(
              ({
                img,
                product,
                brand,
                categorySmall,
                activeIngredientName,
              }) => (
                <MediumCard
                  key={img}
                  img={img}
                  product={product}
                  brand={brand}
                  categorySmall={categorySmall}
                  activeIngredientName={activeIngredientName}
                />
              )
            )}
          </div>
        </section>
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold mt-10 py-8">
            ????????????????????????
          </h2>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap"></div>
          <ChooseBrand />
        </section>
        <section>
          <h2 className="text-3xl md:text-4xl font-semibold mt-10 py-8">
            ????????????????????????
          </h2>
          <div className="text-wrap inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap"></div>
          <ChooseCategorySmall />
        </section>

        <TopBottomBanner
          img="https://firebasestorage.googleapis.com/v0/b/rikejo-cosme.appspot.com/o/top-bottom-bn.jpg?alt=media&token=a4ff2f8c-520f-4eee-9161-d999de620818"
          title="What's the difference?"
          description="????????????????????????????????????"
          buttonText="Click"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
