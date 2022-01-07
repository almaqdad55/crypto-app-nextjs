import {
  ChartBarIcon,
  RefreshIcon,
  CurrencyDollarIcon,
  SwitchHorizontalIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';

const StatsDisplay = () => {
  return (
    <div className="flex items-center">
      <div>
        <ChartBarIcon className="h-7" />
      </div>
      <div>
        <p className="text-[#9A9FAD] text-xs">Total Worth</p>
        <h2 className="text-base">$51,250</h2>
      </div>
    </div>
  );
};

export default StatsDisplay;
