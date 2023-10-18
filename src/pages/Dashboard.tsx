import DashboardCard from "@/components/DashboardCard";
import SearchInput from "@/components/SearchInput";
import { User } from "@nextui-org/react";
import { Bell } from "lucide-react";

const cards = [
  {
    title: "Total Orders",
    value: 452,
    percentage: 78,
    color: "indigo",
  },
  {
    title: "Total Sales",
    value: 578,
    percentage: 64,
    color: "yellow",
  },
  {
    title: "Total Customers",
    value: 800,
    percentage: 90,
    color: "green",
  },
  {
    title: "Total Products",
    value: 1000,
    percentage: 83,
    color: "fuchsia",
  },
];

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
      <div className="p-8 bg-primary/5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
