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
    <div className="flex flex-col items-center  h-screen w-[142px]  bg-[#fbfbfb] ">
      <div className="mt-20">
        <img src="/logo.svg" alt="" />
      </div>
      <div className="mb-40 mt-20 flex flex-col space-y-7">
        <div className="icon-group group">
          <HomeIcon className="h-6 group-hover:fill-[#544AC3]" />
          <span className="">Home</span>
        </div>
        <div className="icon-group group">
          <UserIcon className="h-6 group-hover:fill-[#544AC3]" />
          <span className="">Account</span>
        </div>
        <div className="icon-group group">
          <ShoppingBagIcon className="h-6 group-hover:fill-[#544AC3]" />
          <span className="">Wallets</span>
        </div>
        <div className="icon-group group ">
          <CashIcon className="h-6 group-hover:fill-[#544AC3]" />
          <span className="">Buy/Sell</span>
        </div>
        <div className="icon-group group">
          <PresentationChartBarIcon className="h-6 group-hover:fill-[#544AC3]" />
          <span className="">Markets</span>
        </div>
        <div className="icon-group group">
          <CogIcon className="h-6 group-hover:fill-[#544AC3]" />
          <span className="">Settings</span>
        </div>
        <div className="icon-group group">
          <NewspaperIcon className="h-6 group-hover:fill-[#544AC3]" />
          <span className="">Ad Pages</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
