import Image from "next/image";

const Csr = () => {
  return (
    <div className="py-[50px] text-center text-[#F75568]">
      <h1 className=" text-[40px]">Corporate Social Responsibility</h1>
      <p className="text-white py-[30px]">
        Commitment to people, society and the environment is second nature to
        MAAM. We want to make a contribution to sustainable developments not
        only in our products but also in the way we do business. We are
        committed to further increase our competitiveness yet with the minimal
        impact on people and our environment while maximizing the values for our
        stakeholders.
      </p>
      <p className="text-white">
        Continuously, we seek a balance between the results of our organization
        and our efforts for the environment and society: People, Planet &
        Profit. Our most recent “Corporate Social Responsibility” related
        activity is one of its kinds and never has been done by any other local
        organizations in the industry. “We donate a percentage of our profits
        from selling the Cream Crackers to the “National Cancer Institute” for
        the well being of not just the cancer victims, yet the entire society.
      </p>
      <div className="py-[50px] sm:grid hidden sm:grid-cols-3">
        <div className="flex justify-center">
          <div className="w-[200px] h-[200px] relative">
            <Image
              src="https://res.cloudinary.com/slktech/image/upload/v1632816779/Maam/CSR1_asomox.png"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[200px] h-[200px] relative">
            <Image
              src="https://res.cloudinary.com/slktech/image/upload/v1632816777/Maam/CSR2_yrpus6.png"
              layout="fill"
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="w-[200px] h-[200px] relative">
            <Image
              src="https://res.cloudinary.com/slktech/image/upload/v1632816776/Maam/CSR3_x7wcay.png"
              layout="fill"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Csr;
