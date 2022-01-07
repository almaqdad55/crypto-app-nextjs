const Card = () => {
  return (
    <div className="  flex flex-col justify-between w-[241px] h-[284px] bg-[#FDF9E5] rounded-lg relative text-[#8B7F50] p-4">
      <div className="absolute bg-[#FBE591] text-[#8B7F50] text-xs rounded-lg p-2 font-bold top-7 right-3">
        +0.25%
      </div>
      <h1 className="text-3xl ">BTC</h1>
      <p className="text-[15px]">Bitcion to AUD</p>

      <svg src="/bg-btc.svg" alt="" className=" fill-red-200 ">
        <img src="/bg-btc.svg" alt="" />
      </svg>
      <p className="text-[29px] text-[#0F111D]">$65,271</p>
      <p className="text-[#9D9DAE]">30% of your portfolio</p>
    </div>
  );
};

export default Card;
