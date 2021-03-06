import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterdCard from "../components/FilterdCard";

const Filtered = () => {
  return (
    <div>
      <Head>
        <title>Cosmetics Collection</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="bg-white md:mx-20 lg:mx-40 py-8 sm:py-20 px-4 sm:px-20">
          <FilterdCard />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Filtered;
