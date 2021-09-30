import Image from "next/image";

const Header = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 py-[70px] lg:py-[170px] relative">
      <div className=" text-[#F75568] space-y-10  flex flex-col items-center lg:items-start  z-50">
        <div className="  cursor-pointer border-2 border-[#F75568] rounded-3xl w-[250px] text-center py-[8px]">
          What's new
        </div>
        <div className=" cursor-pointer border-2 border-[#F75568] rounded-3xl w-[250px] text-center py-[8px]">
          Download Product Catalog
        </div>
      </div>
      <div>
        <div className="relative lg:flex flex-col items-center hidden">
          <div className=" absolute w-[500px] h-[700px] mt-[-250px] ml-[5px]">
            <Image src="https://res.cloudinary.com/slktech/image/upload/v1633018057/Maam/2-02_daobf4.png" layout="fill"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
