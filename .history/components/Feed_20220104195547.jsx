import {
  DotsHorizontalIcon,
  PhotographIcon,
  NewspaperIcon,
  SearchIcon,
} from '@heroicons/react/outline';

const Feed = () => {
  return (
    <div className="">
      <div>
        <div className="bg-gray-300 rounded-2xl">
          <input type="text" placeholder={`${(<SearchIcon />)} Search`} />
        </div>
      </div>
    </div>
  );
};

export default Feed;
