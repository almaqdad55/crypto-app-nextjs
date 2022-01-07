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
    <div className="bg-[#fbfbfb] min-w-[352px] flex flex-col items-center">
      <div className=" flex justify-center space-x-3">
        <img src="/logo.svg" alt="" className="" />
        <h2>Malik Kamal</h2>
      </div>
      <StatsDisplay />

      <StatsDisplay />
      <StatsDisplay />
      <StatsDisplay />

      <Button />
    </div>
  );
};

export default Widget;
