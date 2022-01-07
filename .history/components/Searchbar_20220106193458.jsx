const Searchbar = () => {
  return (
    <div className="mt-20 bg-red-100 flex items-center justify-center px-8">
      <input
        type="text"
        placeholder={`Search`}
        className="outline-none bg-[#F2F4F5]"
      />
    </div>
  );
};

export default Searchbar;