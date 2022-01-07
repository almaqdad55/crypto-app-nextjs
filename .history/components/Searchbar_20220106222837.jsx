const Searchbar = ({ ...rest }) => {
  return (
    <div className="mt-20 mx-auto w-[240px] ">
      <input className=" bg-[#F2F4F5] px-4 py-1   w-full " {...rest} />
    </div>
  );
};

export default Searchbar;
