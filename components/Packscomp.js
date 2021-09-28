import Image from "next/image";

const Packscomp = (data) => {

  return (
    <div className="flex flex-col items-center">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-y-[50px] gap-x-[50px] py-[30px] text-white">
        {data.data.map((pack) => (
          <div className="flex flex-col justify-center " key={pack.image}>
            <div className="w-[125px] h-[125px] relative bg-[#E1E0E4] flex justify-center">
              <Image src={pack.image} layout="fill" />
            </div>
            <div>
              <h1>{pack.name}</h1>
              <p className="font-thin text-[14px]">
                Net Weight : {pack.weight}
              </p>
              <p className="font-thin text-[14px]">Volume : {pack.volume}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-[50%] h-[2px] bg-[#F75568]"></div>
    </div>
  );
};

export default Packscomp;
