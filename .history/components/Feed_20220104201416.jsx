import {
  DotsVerticalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

// import { SearchIcon } from '@heroicons/react/solid';
const Feed = () => {
  return (
    <div className=" flex-grow  bg-white">
      <div className="flex items-center  justify-between py-4 px-8">
        <div className="flex items-center bg-[#fbfbfb] rounded-lg p-1">
          <SearchIcon className="h-5" />
          <input
            type="text"
            placeholder={`Search`}
            className="outline-none bg-[#fbfbfb]"
          />
        </div>
        <div className="flex space-x-4 ">
          <NewspaperIcon className="h-5 text-[#fbfbfb]" />
          <PhotographIcon className="h-5 text-[#fbfbfb]" />
          <DotsVerticalIcon className="h-5 text-[#fbfbfb]" />
        </div>
        <div className="flex text-xs space-x-4 ">
          <p className="text-[#9A9FAD]">Wallet</p>
          <p className="text-[#fbfbfb]">Invoice</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
