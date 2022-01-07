import { ChevronDownIcon } from '@heroicons/react/outline';

const DropDownList = () => {
  return (
    <div className="flex items-center absolute top-2 right-2 rounded-lg bg-[#F1F2FB] p-2">
      <p className="text-xs text-[#35404E]">6 months</p>
      <ChevronDownIcon className="h-4 text-[#7C838F]" />
    </div>
  );
};

export default DropDownList;
