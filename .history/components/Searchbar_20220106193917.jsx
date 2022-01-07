const Searchbar = () => {
  return (
    <div className="mt-20 flex items-center justify-center ">
      <input
        type="text"
        placeholder={`Search`}
        className=" bg-[#F2F4F5] px-4 py-2 rounded-lg outline outline-1"
      />
    </div>
  );
};

export default Searchbar;
