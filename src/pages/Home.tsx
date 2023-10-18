import Sidebar from "@/components/Sidebar";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex h-full">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Home;
