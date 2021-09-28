import { useRouter } from "next/router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";

const About = () => {
  const router = useRouter();

  const url = router.query;



  return (
    <div className="bg-[#28056B]">
      <div className=" mx-[10px] sm:mx-[50px] lg:mx-[150px]">
        <Navigation url={url.path} />

        <h1 className="text-[#F75568] pt-[70px] pb-[30px] text-center text-[30px]">
          Company Profile
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-[50px]">
          <div className="pr-0 md:pr-[30px]">
            <p className="text-center text-white text-[14px]">
              The Orient Lanka Confectionery (Pvt) Ltd was established in the
              year 2000 for the purpose of manufacturing high quality Biscuits &
              Cookies in multiple flavors and designs under the brand name of
              “MAAM”.
              <br />
              <br />
              Our factory is located in the cooling hill capital, Kandy, Sri
              Lanka surrounded with lush greenery and clean air suited naturally
              for baking biscuits, which has 365/24 production capability for
              consistent supply of demand. Our modern technology in biscuit
              making has enabled us to highlight ourselves as the “Quality
              Biscuit Makers”.
              <br />
              <br />
              In a short time frame, we have acquired a number of quality
              achievements including SLS 251, ISO 22000 : 2005, HACCP, etc as
              well as a number of awards including Star Award – Large scale and
              5S Productivity Award – Large scale, which demonstrates our
              strength, market acceptance and growth undoubtedly.
              <br />
              <br />
              During our infant stage we utilized very few employees in order to
              produce our goods and packing. Since then we were able to expand
              our range of products thus justifying our requirements to fully
              automate our production lines with the latest in technology to
              further enhance efficiency and productivity. Consequently Orient
              Lanka’s business was flourishing, but, more importantly MAAM was
              acquiring a reputation for quality, taste and value. As a result,
              our consumer base and the MAAM FAMILY, comprising of both skilled
              and non skilled members has grown significantly.
              <br />
              <br />
              We have a state of the art laboratory and an expert quality
              assurance team. We implemented various quality control departments
              fully equipped with instruments to measure quality in every stage
              of development and ending with us delivering the goods to all our
              valued customers around the world. We use various types of raw
              materials and packing materials purchased from internationally
              approved vendors. We manufacture all varieties of biscuits which
              are popular around the globe, including Soft Dough, Hard Dough &
              Cookies. Furthermore, it is our ‘Vision’ to be innovative to
              introduce new taste to the market.
              <br />
              <br />
              We started to export our goods to major parts of the world since
              2005 and are now catering for customers in many countries.
              Locally, we already have a well established island wide
              distribution network.
            </p>
          </div>
          <div className="bg-white"></div>
        </div>

        <h1 className="text-[#F75568] pt-[70px] pb-[30px] text-center text-[30px]">
          History of Maam
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 pb-[50px]">
          <div className="bg-white"></div>
          <div className="pr-0 md:pl-[30px]">
            <p className="text-center text-white text-[14px]">
              From a humble homemade tiny candy manufacturing facility with five
              employees and almost no machinery MAAM has come a long way in just
              over thirtyyears to become one of Sri Lanka's most recognized
              brands. The dedication and unity of one family is the backbone of
              this achievement.
              <br />
              <br />
              Luckily we also had a simple business strategy from the beginning.
              If the products were good enough, then word of mouth would spread
              the word. It’s a philosophy that worked.
              <br />
              <br />
              The parent company of MAAM - Orient Lanka Confectionery Ltd was
              established in 1979 as a family business in the hill city of
              Kandy, Sri Lanka manufacturing candies for the local market.
              However to fulfill the huge demand for the products the facility
              was moved to a new location in the year 1981.
              <br />
              <br />
              By the year 1983 the product portfolio had also expanded from
              ordinary candies to well packed sweets. Therefore once again the
              manufacturing facility was relocated to a better location in Kandy
              district during the period 1987.
              <br />
              <br />
              After extensive market research,our company moved into high demand
              venture of biscuitsmanufacturing, under the brand name of "RICH"
              and the company was registered with the new name of "SUNRAY LANKA
              (PVT) LTD".
              <br />
              <br />
              The brand Rich had become very popular and widely accepted by
              consumers due to its taste, quality, standards and attractive
              prices. The demand for the products was overwhelming yet
              management decided that this is the right time to switch to a
              fully modernized and a state of the art manufacturing plant to
              cater the demand on time.
            </p>
          </div>
        </div>
      </div>
      <Footer url={url.path} />
    </div>
  );
};

export default About;
