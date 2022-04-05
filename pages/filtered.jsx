import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FilterdCard from "../components/FilterdCard";

const Filtered = () => {
  return (
    <div>
      <section className="sticky top-0">
        <Header />
      </section>
      <main className="max-w-7xl mx-auto mb-40 px-8 sm:px-16">
        <section className="pt-6">
          <FilterdCard />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Filtered;
