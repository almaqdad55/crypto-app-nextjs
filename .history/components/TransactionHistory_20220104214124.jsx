import DropDownList from './DropDownList';

const TransactionHistory = () => {
  return (
    <div className=" flex flex-col justify-between relative  min-h-[323px]">
      <DropDownList />
      <h1 className="text-[20px] text-[#061423] p-2">Transaction History</h1>
      <div className="p-2">
        <p className="text-xs text-[#A6AEC9]">Transaction In April 2021</p>
        <p className="text-[20px] text-[#061423]"> $50,000</p>
      </div>
      <div className="">
        <img src="/history.svg" alt="" className="" />
        <img src="/months.svg" alt="" className="w-[376px]" />
      </div>
    </div>
  );
};

export default TransactionHistory;
