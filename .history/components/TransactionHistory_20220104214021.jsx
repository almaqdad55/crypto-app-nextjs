import DropDownList from './DropDownList';

const TransactionHistory = () => {
  return (
    <div className=" flex flex-col relative bg-red-100 min-h-[323px]">
      <DropDownList />
      <h1 className="text-[20px] text-[#061423]">Transaction History</h1>
      <div>
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