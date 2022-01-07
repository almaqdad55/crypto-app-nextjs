import { ChevronDownIcon } from '@heroicons/react/outline';
const RecentSwaps = () => {
  return (
    <div className="flex items-center absolute">
      <p className="text-xs text-[#35404E]">6 months</p>
      <ChevronDownIcon className="h-4 text-[#7C838F]" />
    </div>
  );
};

export default RecentSwaps;
