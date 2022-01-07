import {
  ChartBarIcon,
  RefreshIcon,
  CurrencyDollarIcon,
  SwitchHorizontalIcon,
  ShieldCheckIcon,
} from '@heroicons/react/outline';
import { signOut, useSession } from 'next-auth/react';
import StatsDisplay from './StatsDisplay';
import Button from './Button';
const Widget = () => {
  const { data: session } = useSession();
  return (
    <div className="bg-[#fbfbfb] min-w-[352px] flex flex-col items-center justify-around">
      <div
        className=" flex  flex-col items-center   space-y-1 cursor-pointer"
        onClick={signOut}
      >
        <img
          src={session.user.image}
          alt=""
          className="rounded-full h-12 w-12"
        />
        <span className=" text-sm font-bold">{session.user.name}</span>
      </div>

      <div className="">
        <StatsDisplay />
        <hr className="border-b border-gray-200 mt-4" />
      </div>
      <div className="flex flex-col space-y-8">
        <StatsDisplay />
        <StatsDisplay />
        <StatsDisplay />
      </div>

      <Button />
    </div>
  );
};

export default Widget;
