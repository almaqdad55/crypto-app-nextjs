import { SwitchHorizontalIcon } from '@heroicons/react/outline';

const Swap = () => {
  return (
    <div className=" flex text-[#2A316F] justify-between">
      <div className="relative flex p-5 bg-red-100">
        <img src="/bitcoin-icon.svg" alt="" className="h-50 absolute top-0" />
        <img
          src="/ripple-icon.svg"
          alt=""
          className="h-50 absolute top-0 right-0"
        />
      </div>
      <div className="py-5">
        <div className=" flex  text-sm ">
          <p>0.62844WETH</p>
          <SwitchHorizontalIcon className="h-4" />
          <p>200USDT</p>
        </div>
        <p className="text-xs text-[#9A9FAD]">Tokennlon-6minutes ago</p>
      </div>

      <p className="py-5">$9,252.20</p>
    </div>
  );
};

export default Swap;
