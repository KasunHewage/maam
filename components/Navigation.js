import Image from "next/image";

const Navigation = () => {
  return (
    <div className="flex py-[20px]">
      <div className="w-[70%] lg:w-[30%] flex items-center   justify-start">
        <div className="text-white flex flex-col items-center">
          <div className="relative w-[100px] h-[45px] md:w-[150px] md:h-[65px]">
            <Image
              src="https://res.cloudinary.com/slktech/image/upload/v1632824978/Maam/maam_axl9ye.png"
              layout="fill"
            />
          </div>
          <p>Maam Biscuits Lanka (Pvt) Ltd</p>
        </div>
      </div>
      <div className="w-[30%] lg:w-[70%] flex items-center justify-end">
        <div className="gap-x-[50px] text-[20px] text-[#F75568] items-center hidden lg:flex">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">About</p>
          <p className="cursor-pointer">Our Products</p>
          <p className=" flex flex-col items-center text-sm cursor-pointer">
            <svg
              width="31"
              height="20"
              viewBox="0 0 41 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M39.2 24.9C38.8 27 37.1 28.6 35 28.9C31.7 29.4 26.2 30 20 30C13.9 30 8.4 29.4 5 28.9C2.9 28.6 1.2 27 0.8 24.9C0.4 22.6 0 19.2 0 15C0 10.8 0.4 7.4 0.8 5.1C1.2 3 2.9 1.4 5 1.1C8.3 0.6 13.8 0 20 0C26.2 0 31.6 0.6 35 1.1C37.1 1.4 38.8 3 39.2 5.1C39.6 7.4 40.1 10.8 40.1 15C40 19.2 39.6 22.6 39.2 24.9Z"
                fill="#FF3D00"
              />
              <path d="M16 22V8L28 15L16 22Z" fill="white" />
            </svg>
            Watch Us on Youtube
          </p>
        </div>
        <div className="space-y-2 cursor-pointer lg:hidden">
          <div className="w-[25px] h-[2px] bg-white"></div>
          <div className="w-[25px] h-[2px] bg-white"></div>
          <div className="w-[25px] h-[2px] bg-white"></div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
