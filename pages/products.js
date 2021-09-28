import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Packscomp from "../components/Packscomp";

// ApIs
import standardPack from "./api/standards";
import familyPack from "./api/family";
import giftPack from "./api/gift";
import valuePack from "./api/value";
import savoryPack from "./api/savory";

const Products = () => {
  const router = useRouter();
  const url = router.query;

  const [standards, setStandards] = useState([]);
  const [family, setFamily] = useState([]);
  const [gift, setGift] = useState([]);
  const [value, setValue] = useState([]);
  const [savory, setSavory] = useState([]);

  useEffect(() => {
    const stPack = async () => {
      const response = await standardPack.get();
      setStandards(response.data);
    };

    const fmPack = async () => {
      const response = await familyPack.get();
      setFamily(response.data);
    };

    const gfPack = async () => {
      const response = await giftPack.get();
      setGift(response.data);
    };

    const vPack = async () => {
      const response = await valuePack.get();
      setValue(response.data);
    };

    const sPack = async () => {
      const response = await savoryPack.get();
      setSavory(response.data);
    };

    stPack();
    fmPack();
    gfPack();
    vPack();
    sPack();
  }, []);

  return (
    <div className="bg-[#5B1164]">
      <div className="mx-[10px] sm:mx-[50px] lg:mx-[150px]">
        <Navigation url={url.path} />

        <div className="py-[50px]">
          <h1 className="text-center text-[30px] text-[#F75568] pb-[20px]">
            Biscuits
          </h1>
          <h1 className="text-white text-center text-[20px]">Standard Pack</h1>
          <Packscomp data={standards} />
          <h1 className="text-white text-center text-[20px] mt-[50px]">
            Family
          </h1>
          <Packscomp data={family} />
          <h1 className="text-white text-center text-[20px] mt-[50px]">
            Gift Item
          </h1>
          <Packscomp data={gift} />
          <h1 className="text-white text-center text-[20px] mt-[50px]">
            Value Added
          </h1>
          <Packscomp data={value} />
          <h1 className="text-white text-center text-[20px] mt-[50px]">
            Savory
          </h1>
          <Packscomp data={savory} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Products;
