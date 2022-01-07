const Searchbar = () => {
  return (
    <div className="mt-20 bg-red-100 flex items-center justify-center ">
      <input
        type="text"
        placeholder={`Search`}
        className="outline-none bg-[#F2F4F5] px-4 py-2 rounded-lg"
      />
    </div>
  );
};

export default Searchbar;
