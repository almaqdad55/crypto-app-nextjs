const Searchbar = () => {
  return (
    <div className="mx-auto bg-red-100 flex items-center ">
      <input
        type="text"
        placeholder={`Search`}
        className="outline-none bg-[#F2F4F5]"
      />
    </div>
  );
};

export default Searchbar;
