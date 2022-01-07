import {
  DotsHorizontalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

const Feed = () => {
  return (
    <div className="flex flex-grow">
      <div>
        <div className="bg-gray-700 rounded-2xl">
          <input type="text" placeholder={`Search`} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
