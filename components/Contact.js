import Image from "next/image";

const Contact = () => {
  return (
    <div className="py-[50px] grid grid-cols-1 lg:grid-cols-2">
      <div className="px-[20px]">
        <input
          type="text"
          placeholder="Name"
          className="w-[100%] bg-transparent  border-b-2 text-white placeholder-white p-2 mb-4"
        />
        <input
          type="text"
          placeholder="Contact no"
          className="w-[100%] bg-transparent  border-b-2 text-white placeholder-white p-2 mb-4"
        />
        <input
          type="text"
          placeholder="Email"
          className="w-[100%] bg-transparent  border-b-2 text-white placeholder-white p-2 mb-4"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-[100%] bg-transparent  border-b-2 text-white placeholder-white p-2 mb-4"
        />
        <textarea
          placeholder="Message"
          className="w-[100%] bg-transparent  border-b-2 text-white placeholder-white p-2 mb-4"
        />
        <button className="rounded-3xl border-4 py-2 px-10 text-white cursor-pointer">
          Submit
        </button>
      </div>
      <div className="hidden lg:flex justify-end">
        <div className="relative w-[75%] h-[500px]">
          <Image src="https://res.cloudinary.com/slktech/image/upload/v1633018060/Maam/2-01_qzddbv.png" layout="fill" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
