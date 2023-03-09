// import Search from '@mui/icons-material/Search'
import EqualizerIcon from '@mui/icons-material/Equalizer';
import BookCard from './BookCard';
import TrackList from './TrackList';

function MainArea() {
  return (
    <div>
      <span className="flex pl-20">
        <div>
          <ActiveBookSection />
        </div>
        <div>
          <BookGrid />
        </div>
      </span>
    </div>
  );
}

function BookGrid() {
  return (
    <div className="flex h-[1000px] pl-16 pr-8 overflow-scroll scrollbar scrollbar-thumb-gray-900 scrollbar-track-gray-100 grid grid-flow-rows grid-cols-4 gap-x-4 gap-y-12">
      {new Array(50).fill(null).map((_) => (
        <BookCard
          image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg"
          title="The Night Shift"
          author="Alex Finlay"
        />
      ))}
    </div>
  );
}

function ActiveBookSection() {
  return (
    <div>
      <LargeBookCard
        image="https://dsxuu8etcj8kw.cloudfront.net/e/u/eu5c/eu5c-square-400.jpg"
        title="The Night Shift"
        author="Alex Finlay"
      />
      <div className="py-8">
        <TracksBookmarks />
      </div>
    </div>
  );
}

interface LargeBookCardProps {
  image: string;
  title: string;
  author: string;
}

function LargeBookCard({ image, title, author }: LargeBookCardProps) {
  return (
    <div className="w-96">
      <img src={image} alt="No Image" />
      <div className="p-4 bg-gray-900 text-gray-300">
        <span className="flex">
          <div className="pr-52">
            {title}
            <div>by {author}</div>
          </div>
          <EqualizerIcon />
        </span>
      </div>
    </div>
  );
}

function TracksBookmarks() {
  return (
    <div className="py-6 bg-gray-900 text-white">
      <ul className="flex text-white font-bold text-lg">
        <li className="px-11 py-2 hover:border-b-2 hover:border-y-blue-400 hover:pb-1">
          <span className="">Audiobooks</span>
        </li>
        <li className="hover:border-b-2 hover:border-y-blue-600 hover:pb-1 px-11 py-2">
          <span>Bookmarks</span>
        </li>
      </ul>
      <div className="overflow-auto h-96">
        <TrackList />
      </div>
    </div>
  );
}

export default MainArea;
