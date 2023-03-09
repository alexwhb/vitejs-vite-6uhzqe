import StyleIcon from '@mui/icons-material/Style';
import Favorite from '@mui/icons-material/Favorite';
import Search from '@mui/icons-material/Search';
import { ReactNode } from 'react';

interface SideNavItemProps {
  name: string;
  icon: ReactNode;
}

function SideNavItem({ name, icon }: SideNavItemProps) {
  return (
    <span className="flex justify-between py-4 px-8 ">
      {icon}
      <span className="hover:border-b-2 hover:border-y-green-400 hover:pb-1">
        {name}
      </span>
    </span>
  );
}

function SideNav() {
  return (
    <div className="py-5 text-white">
      <div>
        <SideNavItem name="My Library" icon={<StyleIcon />} />
      </div>
      <div>
        <SideNavItem name="Wishlist" icon={<Favorite />} />
      </div>
      <div>
        <SideNavItem name="Search" icon={<Search />} />
      </div>
      <div>
        <SideNavItem name="Add Folder" icon={<StyleIcon />} />
      </div>
    </div>
  );
}

export default SideNav;
