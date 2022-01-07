import { SwitchHorizontalIcon } from '@heroicons/react/outline';

const Swap = () => {
  return (
    <div className=" flex text-[#2A316F] justify-between">
      <div className="relative flex">
        <img src="/bitcoin-icon.svg" alt="" className="h-10" />
        <img src="/ripple-icon.svg" alt="" className="absolute" />
      </div>
      <div>
        <div className=" flex  text-sm">
          <p>0.62844WETH</p>
          <SwitchHorizontalIcon className="h-4" />
          <p>200USDT</p>
        </div>
        <p className="text-xs text-[#9A9FAD]">Tokennlon-6minutes ago</p>
      </div>

      <p>$9,252.20</p>
    </div>
  );
};

export default Swap;
