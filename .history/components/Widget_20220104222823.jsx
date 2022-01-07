import {
  ChartBarIcon,
  RefreshIcon,
  CurrencyDollarIcon,
  SwitchHorizontalIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';
import StatsDisplay from './StatsDisplay';
const Widget = () => {
  return (
    <div className="bg-[#fbfbfb] min-w-[352px]">
      <div className="bg-red-100 flex justify-center space-x-3">
        <img src="/logo.svg" alt="" className="" />
        <h2>Malik Kamal</h2>
      </div>
      <StatsDisplay />
    </div>
  );
};

export default Widget;
