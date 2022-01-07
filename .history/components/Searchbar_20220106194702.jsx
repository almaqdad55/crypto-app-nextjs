const Searchbar = () => {
  return (
    <div className="mt-20 mx-auto w-[240px]">
      <input
        type="text"
        placeholder={`Search Cryptocurrency`}
        className=" bg-[#F2F4F5] px-4 py-2  outline-blue-300 w-full"
      />
    </div>
  );
};

export default Searchbar;
