import {
  HomeIcon,
  UserIcon,
  CashIcon,
  ShoppingBagIcon,
  PresentationChartBarIcon,
  CogIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/solid';
import { useSession, signOut } from 'next-auth/react';

const Sidebar = () => {
  const { data: session } = useSession();
  return (
    <div className="flex flex-col items-center  h-screen w-[142px]  bg-[#fbfbfb] cursor-pointer ">
      <div className="mt-20 flex flex-col items-center" onClick={signOut}>
        <img
          src={session.user.image}
          alt=""
          className="rounded-full h-12 w-12"
        />
        <p className="text-sm">{session.user.name}</p>
      </div>
      <div className="mb-40 mt-20 flex flex-col space-y-7">
        <div className="icon-group group">
          <HomeIcon className="h-6 " />
          <span className="">Home</span>
        </div>
        <div className="icon-group group">
          <UserIcon className="h-6 " />
          <span className="">Account</span>
        </div>
        <div className="icon-group group">
          <ShoppingBagIcon className="h-6 " />
          <span className="">Wallets</span>
        </div>
        <div className="icon-group group ">
          <CashIcon className="h-6 " />
          <span className="">Buy/Sell</span>
        </div>
        <div className="icon-group group">
          <PresentationChartBarIcon className="h-6 " />
          <span className="">Markets</span>
        </div>
        <div className="icon-group group">
          <CogIcon className="h-6 " />
          <span className="">Settings</span>
        </div>
        <div className="icon-group group">
          <DocumentDuplicateIcon className="h-6 " />
          <span className="">Ad Pages</span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
