import {
  DotsHorizontalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

// import { SearchIcon } from '@heroicons/react/solid';
const Feed = () => {
  return (
    <div className=" flex-grow  ">
      <div>
        <div className="flex items-center bg-[#fbfbfb] rounded-lg p-1">
          <SearchIcon className="h-5" />
          <input type="text" placeholder={`Search`} className="outline-none" />
        </div>
      </div>
    </div>
  );
};

export default Feed;
