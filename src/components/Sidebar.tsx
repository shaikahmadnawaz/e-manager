import { ChevronsLeft } from "lucide-react";

const Sidebar = () => {
  return (
    <>
      <aside className="group/sidebar h-full overflow-y-auto relative flex w-60 flex-col z-[99999]">
        <div className="h-6 w-6">
          <ChevronsLeft className="h-6 w-6" />
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
