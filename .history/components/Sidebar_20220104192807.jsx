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
    <div className="flex flex-cols h-screen w-[142px]  bg-red-300">
      <div>
        <img src="/logo.svg" alt="" />
      </div>
      <div>
        <div>
          <span>Home</span>
          <HomeIcon className="h-7" />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
