import {
  DotsVerticalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

// import { SearchIcon } from '@heroicons/react/solid';
const Feed = () => {
  return (
    <div className=" flex-grow  bg-white px-14 py-10">
      <div className="flex items-center  justify-between ">
        <div className="flex items-center bg-[#F2F4F5] rounded-lg p-1">
          <SearchIcon className="h-5" />
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
        <div className="flex text-md font-bold space-x-4 text-[#9A9FAD] ">
          <p className="">Wallet</p>
          <p className="">Invoice</p>
        </div>
      </div>
    </div>
  );
};

export default Feed;
