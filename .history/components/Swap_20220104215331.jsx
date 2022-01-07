import { SwitchHorizontalIcon } from '@heroicons/react/outline';

const Swap = () => {
  return (
    <div>
      <div></div>
      <div className=" flex text-[#2A316F] text-sm">
        <p>0.62844WETH</p>
        <SwitchHorizontalIcon className="h-4" />
        <p>200USDT</p>
      </div>
    </div>
  );
};

export default Swap;
