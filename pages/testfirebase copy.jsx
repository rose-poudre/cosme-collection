import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/router";
import { format } from "date-fns";
import InfoCard from "../components/InfoCard";
import { useState, useEffect } from "react";
import { db } from "../public/src/firebase-config";
import { collection, getDocs } from "firebase/firestore";
import FirebaseCard from "../components/FirebaseCard";

const Search = ({ searchResult }) => {
  const router = useRouter();

  // console.log(searchResult);
  const { location, startDate, endDate, noOfGuests } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");
  const range = `${formattedStartDate} - ${formattedEndDate}`;

  // const [users, setUsers] = useState([]);
  // const usersCollectionRef = collection(db, "users");

  // 上記2行を以下に変更
  const [products, setProducts] = useState([]);
  const productsCollectionRef = collection(db, "products");

  useEffect(() => {
    const getProducts = async () => {
      const data = await getDocs(productsCollectionRef);
      console.log(data.docs);
      setProducts(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getProducts();
  }, []);
  console.log(products);

  let results = products;
  if (process.browser) {
    window.onload = () => {
      let tag;
      products.forEach((value) => {
        tag += `<FirebaseCard
        key=${value.img}
        img=${value.img}
        manufacture=${value.manufacture}
        brand=${value.brand}
        category=${value.category}
        age=${value.brand}
        product=${value.product}
        price=${value.price}
        capacity=${value.capacity}
        unit=${value.unit}
        star_point=${value.star_point}
      />`;
      });
      console.log(tag);
      document.getElementById("results").innerHTML = tag;
    };
  }

  const brand_list = [];

  const brand_filter = () => {
    products.forEach((elm) => {
      Object.keys(elm).forEach((brand) => {
        const brand_name = "アクアレーベル";
        if (brand === "brand") {
          if (elm[brand] === brand_name) {
            brand_list.push(elm);
            console.log(brand_list);
            results = brand_list;
            if (process.browser) {
              console.log(results);
              document.getElementById("results").innerHTML = results.map(
                (
                  img,
                  manufacture,
                  brand,
                  product,
                  category,
                  price,
                  capacity,
                  unit,
                  star_point
                ) =>
                  `<FirebaseCard
            key=${img}
            img=${img}
            manufacture=${manufacture}
            brand=${brand}
            category=${category}
            age=${brand}
            product=${product}
            price=${price}
            capacity=${capacity}
            unit=${unit}
            star_point=${star_point}
          />`
              );
            }
          }
        }
      });
    });
  };

  return (
    <div>
      <Header placeholder={`${location} | ${range} | ${noOfGuests} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-tx">
            300+ Stays - {range}- for {noOfGuests} guests
          </p>

          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden sm:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">化粧水</p>
            <button className="button" onClick={brand_filter}>
              アクアレーベル
            </button>
            <p className="button">Price</p>
            <p className="button">Rooms and Beds</p>
            <p className="button">More filters</p>
          </div>

          {/* <div className="flex flex-col">
            {searchResult.map(
              ({ img, location, title, description, star, price, total }) => (
                <InfoCard
                  key={img}
                  img={img}
                  location={location}
                  title={title}
                  description={description}
                  star={star}
                  price={price}
                  total={total}
                />
              )
            )}
          </div> */}

          <div id="results" className="flex flex-col">
            表示テスト
            {/* {results.map(
              ({
                img,
                manufacture,
                brand,
                product,
                category,
                price,
                capacity,
                unit,
                star_point,
              }) => (
                <FirebaseCard
                  key={img}
                  img={img}
                  manufacture={manufacture}
                  brand={brand}
                  category={category}
                  age={brand}
                  product={product}
                  price={price}
                  capacity={capacity}
                  unit={unit}
                  star_point={star_point}
                />
              )
            )} */}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Search;

export async function getServerSideProps() {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
}
