import DashboardCard from "@/components/DashboardCard";
import SearchInput from "@/components/SearchInput";
import DashboardBarChart from "@/components/charts/DashboardBarChart";
import DashboardProgressbar from "@/components/charts/DashboardProgressbar";
import { User } from "@nextui-org/react";
import { Card, Title } from "@tremor/react";
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

const progressData = [
  {
    item: "Laptops",
    value: 45,
    total: 20000,
  },
  {
    item: "Bags",
    value: 85,
    total: 10000,
  },
  {
    item: "Shoes",
    value: 65,
    total: 15000,
  },
  {
    item: "T-Shirts",
    value: 25,
    total: 25000,
  },
  {
    item: "Jeans",
    value: 75,
    total: 5000,
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
              src: "./dp.png",
            }}
          />
        </div>
      </div>
      <section className="p-8 bg-primary/5 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => (
          <DashboardCard key={card.title} {...card} />
        ))}
      </section>
      <section className="grid gap-4 md:grid-cols-2 lg:grid-cols-7 p-8">
        <div className="col-span-4">
          <DashboardBarChart />
        </div>
        <div className="col-span-3 ">
          <Card className="max-w-sm mx-auto">
            <Title className="mb-2">INVENTORY</Title>
            <div className="flex flex-col gap-y-2">
              {progressData.map((data) => (
                <DashboardProgressbar key={data.item} {...data} />
              ))}
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
