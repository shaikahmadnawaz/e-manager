import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface SidebarItemProps {
  url: string;
  label: string;
  icon: LucideIcon;
}

const SidebarItem: React.FC<SidebarItemProps> = ({
  icon: Icon,
  label,
  url,
}) => {
  return (
    <Link
      to={url}
      className="flex flex-row h-auto items-center w-full gap-x-4 text-md font-medium cursor-pointer hover:text-white transition text-neutral-400 py-1"
    >
      <Icon size={26} />
      <p className="truncate w-100">{label}</p>
    </Link>
  );
};

export default SidebarItem;
