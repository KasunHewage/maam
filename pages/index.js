import Head from "next/head";
import Contact from "../components/Contact";
import Csr from "../components/Csr";
import Footer from "../components/Footer";
import Header from "../components/Header";

import Navigation from "../components/Navigation";
import Partners from "../components/Partners";

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-[#28056B] via-[#741660] to-[#F75568]">
      <Head>
        <title>Maam Biscuits Lanka (Pvt) Ltd</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className=" mx-[10px] sm:mx-[50px] lg:mx-[150px]">
        <Navigation />
        <Header />
        <Csr />
        <Partners />
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
