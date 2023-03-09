function TopNav() {
  return (
    <ul className="flex text-white">
      <li className="border-r-2 border-x-gray-600 px-14 py-2">
        <span className="hover:border-b-2 hover:border-y-green-400 hover:pb-1">
          Audiobooks
        </span>
      </li>
      <li className="border-r-2 border-x-gray-600 px-14 py-2">
        <span className="hover:border-b-2 hover:border-y-green-400 hover:pb-1">
          E-Books
        </span>
      </li>
      <li className="border-r-2 border-x-gray-600 px-14 py-2">
        <span className="hover:border-b-2 hover:border-y-green-400 hover:pb-1">
          Rentals
        </span>
      </li>
      <li className="px-14 py-2">
        <span className="hover:border-b-2 hover:border-y-green-400 hover:pb-1">
          Folders
        </span>
      </li>
    </ul>
  );
}

export default TopNav;
