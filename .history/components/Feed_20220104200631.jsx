import {
  DotsVerticalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

// import { SearchIcon } from '@heroicons/react/solid';
const Feed = () => {
  return (
    <div className=" flex-grow  ">
      <div className="flex items-center bg-red-300 justify-between py-4 px-8">
        <div className="flex items-center bg-[#fbfbfb] rounded-lg p-1">
          <SearchIcon className="h-5" />
          <input type="text" placeholder={`Search`} className="outline-none" />
        </div>
        <div className="flex space-x-4">
          <NewspaperIcon className="h-5" />
          <PhotographIcon className="h-5" />
          <DotsVerticalIcon className="h-5" />
        </div>
        <div className="flex text-xs">
          <p>Wallet</p>
          <p>Invoice</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
