const Searchbar = () => {
  return (
    <div className="mt-20 flex items-center justify-center ">
      <input
        type="text"
        placeholder={`Search`}
        className=" bg-[#F2F4F5] px-4 py-2 rounded-lg  outline-[0.2px]"
      />
    </div>
  );
};

export default Searchbar;
