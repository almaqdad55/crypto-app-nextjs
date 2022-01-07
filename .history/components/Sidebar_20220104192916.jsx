import {
  HomeIcon,
  UserIcon,
  CashIcon,
  ShoppingBagIcon,
  PresentationChartBarIcon,
  CogIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="flex flex-col h-screen w-[142px]  bg-red-300">
      <div>
        <img src="/logo.svg" alt="" />
      </div>
      <div>
        <div className="icon-group">
          <span className="text-black">Home</span>
          <HomeIcon className="h-7" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
