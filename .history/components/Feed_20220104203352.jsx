import {
  DotsVerticalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

import Card from './Card';

// import { SearchIcon } from '@heroicons/react/solid';
const Feed = () => {
  return (
    <div className=" flex-grow  bg-white px-14 py-10 space-y-20">
      {/* Top Menu */}
      <div className="flex items-center  justify-between ">
        <div className="flex items-center bg-[#F2F4F5] rounded-lg p-1 space-x-1">
          <SearchIcon className="h-5 text-[#9A9FAD]" />
          <input
            type="text"
            placeholder={`Search`}
            className="outline-none bg-[#F2F4F5]"
          />
        </div>
        <div className="flex space-x-4 text-[#9A9FAD] ">
          <NewspaperIcon className="h-6 " />
          <PhotographIcon className="h-6 " />
          <DotsVerticalIcon className="h-6 " />
        </div>
        <div className="flex text-[16px] font-bold space-x-4 text-[#9A9FAD] ">
          <p className="text-sm">Wallet</p>
          <p className="">Invoice</p>
        </div>
      </div>

      {/* Cards Display */}
      <div>
        <Card />
      </div>
    </div>
  );
};

export default Feed;
