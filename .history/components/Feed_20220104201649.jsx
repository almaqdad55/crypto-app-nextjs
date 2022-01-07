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
        <div className="flex items-center bg-[#F2F4F5] rounded-lg p-1">
          <SearchIcon className="h-5" />
          <input
            type="text"
            placeholder={`Search`}
            className="outline-none bg-[#F2F4F5]"
          />
        </div>
        <div className="flex space-x-4 text-[#9A9FAD] ">
          <NewspaperIcon className="h-5 " />
          <PhotographIcon className="h-5 " />
          <DotsVerticalIcon className="h-5 " />
        </div>
        <div className="flex text-xs space-x-4 text-[#9A9FAD] font-xs">
          <p className="">Wallet</p>
          <p className="">Invoice</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
