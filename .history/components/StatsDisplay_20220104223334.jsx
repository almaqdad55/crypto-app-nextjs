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
      <div className="bg-[#427A0A]/20 p-2 rounded-lg">
        <ChartBarIcon className="h-5 text-[#427A0A]" />
      </div>
      <div>
        <p className="text-[#9A9FAD] text-xs">Total Worth</p>
        <h2 className="text-base">$51,250</h2>
      </div>
    </div>
  );
};

export default StatsDisplay;
