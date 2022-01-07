import {
  ChartBarIcon,
  RefreshIcon,
  CurrencyDollarIcon,
  SwitchHorizontalIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';
import StatsDisplay from './StatsDisplay';
import Button from './Button';
const Widget = () => {
  return (
    <div className="bg-[#fbfbfb] min-w-[352px] flex flex-col items-center justify-around">
      <div className=" flex justify-center space-x-3">
        <img src="/logo.svg" alt="" className="" />
        <h2>Malik Kamal</h2>
      </div>

      <div className="">
        <StatsDisplay />
        <hr className="border-b border-gray-200 mt-3" />
      </div>
      <div className="flex flex-col space-y-8">
        <StatsDisplay />
        <StatsDisplay />
        <StatsDisplay />
      </div>

      <Button />
    </div>
  );
};

export default Widget;