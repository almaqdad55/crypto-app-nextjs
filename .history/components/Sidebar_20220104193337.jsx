import {
  HomeIcon,
  UserIcon,
  CashIcon,
  ShoppingBagIcon,
  PresentationChartBarIcon,
  CogIcon,
  NewspaperIcon,
} from '@heroicons/react/outline';

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-center space-y-40 h-screen w-[142px]  bg-red-300">
      <div>
        <img src="/logo.svg" alt="" />
      </div>
      <div>
        <div className="icon-group">
          <HomeIcon className="h-6" />
          <span className="text-black">Home</span>
        </div>
        <div className="icon-group">
          <UserIcon className="h-6" />
          <span className="text-black">Account</span>
        </div>
        <div className="icon-group">
          <ShoppingBagIcon className="h-6" />
          <span className="text-black">Wallets</span>
        </div>
        <div className="icon-group">
          <CashIcon className="h-6" />
          <span className="text-black">Buy/Sell</span>
        </div>
        <div className="icon-group">
          <PresentationChartBarIcon className="h-6" />
          <span className="text-black">Markets</span>
        </div>
        <div className="icon-group">
          <CogIcon className="h-6" />
          <span className="text-black">Settings</span>
        </div>
        <div className="icon-group">
          <NewspaperIcon className="h-6" />
          <span className="text-black">Ad Pages</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
