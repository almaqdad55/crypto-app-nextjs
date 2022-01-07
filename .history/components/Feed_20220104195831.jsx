import {
  DotsHorizontalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

const Feed = () => {
  return (
    <div className=" flex-grow bg-red-300">
      <div>
        <div className="">
          <input
            type="text"
            placeholder={`Search`}
            className="bg-gray-700 rounded-lg p-1 mr-3"
          />
        </div>
      </div>
    </div>
  );
};

export default Feed;
