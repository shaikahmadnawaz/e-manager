import Cards from "@/components/Cards";
import SearchInput from "@/components/SearchInput";
import { User } from "@nextui-org/react";
import { Bell } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="h-full overflow-y-auto w-full">
      <div className="flex p-4 justify-between items-center border border-b-primary/20 mr-auto border-b-1">
        <div className="w-1/3">
          <SearchInput />
        </div>
        <div className="flex items-center gap-x-4">
          <Bell />
          <User
            name=""
            avatarProps={{
              src: "https://avatars.githubusercontent.com/u/30373425?v=4",
            }}
          />
        </div>
      </div>
      <div>
        <Cards />
      </div>
    </div>
  );
};

export default Dashboard;
