import DropDownList from './DropDownList';
import Swap from './Swap';
const RecentSwaps = () => {
  return (
    <div className=" flex flex-col  relative  min-w-[450px]  p-3 justify-between">
      {/* <DropDownList /> */}
      <h1 className="text-[20px] text-[#061423] font-bold">Recent Swaps</h1>
      <div className="text-[#A6AEC9] flex justify-between ">
        <p>Pair</p>
        <p>Value</p>
      </div>
      <div className="flex flex-col space-y-4">
        <Swap />
        <Swap />
        <Swap />
        <Swap />
      </div>
    </div>
  );
};

export default RecentSwaps;
