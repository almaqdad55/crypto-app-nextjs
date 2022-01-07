import { SwitchHorizontalIcon } from '@heroicons/react/outline';

const Swap = () => {
  return (
    <div className="text-[#2A316F]">
      <div></div>
      <div className=" flex  text-sm">
        <p>0.62844WETH</p>
        <SwitchHorizontalIcon className="h-4" />
        <p>200USDT</p>
      </div>
      <p>$9,252.20</p>
    </div>
  );
};

export default Swap;
