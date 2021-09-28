const Header = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 py-[50px]">
      <div className=" text-[#F75568] space-y-10 md:flex flex-col justify-center items-center hidden ">
        <div className=" cursor-pointer border-2 border-[#F75568] rounded-3xl w-[200px] text-center py-[4px]">
          What's new
        </div>
        <div className=" cursor-pointer border-2 border-[#F75568] rounded-3xl w-[200px] text-center py-[4px]">
          Download Product Catalog
        </div>
      </div>
      <div>
        <div className="h-[500px] bg-white"></div>
      </div>
    </div>
  );
};

export default Header;
