const Searchbar = () => {
  return (
    <div className="mt-20 flex items-center justify-center min-w-[100px]">
      <input
        type="text"
        placeholder={`Search cryptocurrencies...`}
        className=" bg-[#F2F4F5] px-4 py-2  outline-blue-300"
      />
    </div>
  );
};

export default Searchbar;
