const Card = () => {
  return (
    <div className="  w-[241px] h-[284px] bg-[#FDF9E5] rounded-lg relative text-[#8B7F50] p-4">
      <div className="absolute bg-[#FBE591] text-[#8B7F50] text-xs rounded-lg p-2 font-bold top-7 right-3">
        +0.25%
      </div>
      <h1 className="text-3xl text-[#FAF1C7]">BTC</h1>
      <p className="text-[15px]">Bitcion to AUD</p>
      <img
        src="/btc-chart.svg"
        alt=""
        className="top-10 absolute bg-[#FAF1C7]"
      />
      <img src="/bg-btc.svg" alt="" className="z-50 " />
    </div>
  );
};

export default Card;
