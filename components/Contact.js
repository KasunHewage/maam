const Contact = () => {
  return (
    <div className="py-[50px] grid grid-cols-1 md:grid-cols-2">
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
      <div className="bg-white "></div>
    </div>
  );
};

export default Contact;
