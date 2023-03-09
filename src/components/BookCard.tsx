export interface BookCardProps {
  image: string;
  title: string;
  author: string;
}

export default function BookCard({ image, title, author }: BookCardProps) {
  return (
    <div className="h-[270px] w-[235px]">
      <img src={image} alt="No Image" />
      <div className="p-2 bg-gray-900 text-gray-300">
        {title}
        <div>by {author}</div>
      </div>
    </div>
  );
}
