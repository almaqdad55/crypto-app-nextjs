const Searchbar = () => {
  return (
    <div className="mt-20 mx-auto w-[240px] ">
      <input
        type="text"
        placeholder={`Search Cryptocurrency`}
        className=" bg-[#F2F4F5] px-4 py-1   w-full transition duration-500 outline-1 "
      />
    </div>
  );
};

export default Searchbar;
