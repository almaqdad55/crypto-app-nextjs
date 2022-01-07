import DropDownList from './DropDownList';
import Swap from './Swap';
const RecentSwaps = () => {
  return (
    <div className=" flex flex-col  relative  min-h-[323px] bg-red-100">
      {/* <DropDownList /> */}
      <h1 className="text-[20px] text-[#061423] p-2">Transaction History</h1>
      <div className="text-[#A6AEC9] flex justify-between">
        <p>Pair</p>
        <p>Value</p>
      </div>
      <div>
        <Swap />
      </div>
    </div>
  );
};

export default RecentSwaps;
