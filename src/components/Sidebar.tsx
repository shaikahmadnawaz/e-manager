import { cn } from "@/lib/utils";
import {
  BarChart4,
  ChevronsLeft,
  History,
  LayoutDashboard,
  LineChart,
  MenuIcon,
  PieChart,
  ShoppingBag,
  Users,
} from "lucide-react";
import { ElementRef, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";
import SidebarItem from "./SidebarItem";

const Sidebar = () => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  // const isResizingRef = useRef(false);
  const sidebarRef = useRef<ElementRef<"aside">>(null);
  const navbarRef = useRef<ElementRef<"div">>(null);
  const [isResetting, setIsResetting] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(isMobile);

  useEffect(() => {
    if (isMobile) {
      collapse();
    } else {
      resetWidth();
    }
  }, [isMobile]);

  // const handleMouseDown = (
  //   event: React.MouseEvent<HTMLDivElement, MouseEvent>
  // ) => {
  //   event.preventDefault();
  //   event.stopPropagation();

  //   isResizingRef.current = true;
  //   document.addEventListener("mousemove", handleMouseMove);
  //   document.addEventListener("mouseup", handleMouseUp);
  // };

  // const handleMouseMove = (event: MouseEvent) => {
  //   if (!isResizingRef.current) return;
  //   let newWidth = event.clientX;

  //   if (newWidth < 240) newWidth = 240;
  //   if (newWidth > 480) newWidth = 480;

  //   if (sidebarRef.current && navbarRef.current) {
  //     sidebarRef.current.style.width = `${newWidth}px`;
  //     navbarRef.current.style.setProperty("left", `${newWidth}px`);
  //     navbarRef.current.style.setProperty(
  //       "width",
  //       `calc(100% - ${newWidth}px)`
  //     );
  //   }
  // };

  // const handleMouseUp = () => {
  //   isResizingRef.current = false;
  //   document.removeEventListener("mousemove", handleMouseMove);
  //   document.removeEventListener("mouseup", handleMouseUp);
  // };

  const resetWidth = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(false);
      setIsResetting(true);

      sidebarRef.current.style.width = isMobile ? "100%" : "240px";
      navbarRef.current.style.setProperty(
        "width",
        isMobile ? "0" : "calc(100% - 240px)"
      );
      navbarRef.current.style.setProperty("left", isMobile ? "100%" : "240px");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const collapse = () => {
    if (sidebarRef.current && navbarRef.current) {
      setIsCollapsed(true);
      setIsResetting(true);

      sidebarRef.current.style.width = "0";
      navbarRef.current.style.setProperty("width", "100%");
      navbarRef.current.style.setProperty("left", "0");
      setTimeout(() => setIsResetting(false), 300);
    }
  };

  const routes = [
    {
      icon: LayoutDashboard,
      label: "Home",
      url: "/",
    },
    {
      icon: ShoppingBag,
      label: "Products",
      url: "/products",
    },
    {
      icon: Users,
      label: "Customers",
      url: "/customers",
    },
    {
      icon: History,
      label: "Transactions",
      url: "/transactions",
    },
  ];

  const chartsRoutes = [
    {
      icon: BarChart4,
      label: "Bar",
      url: "/chart/bar",
    },
    {
      icon: PieChart,
      label: "Pie",
      url: "/chart/pie",
    },
    {
      icon: LineChart,
      label: "Line",
      url: "/chart/line",
    },
  ];

  return (
    <>
      <aside
        ref={sidebarRef}
        className={cn(
          "group/sidebar h-full overflow-y-auto relative flex w-60 flex-col z-[99999] px-5 py-4 bg-primary/5",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "w-0"
        )}
      >
        <div
          onClick={collapse}
          role="button"
          className={cn(
            "h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 dark:hover:bg-neutral-600 absolute top-3 right-2 opacity-0 group-hover/sidebar:opacity-100 transition",
            isMobile && "opacity-100"
          )}
        >
          <ChevronsLeft className="h-6 w-6" />
        </div>
        <div>
          <h1 className="font-bold text-2xl">E-Manager</h1>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-y-4">
            <p className="capitalize font-medium">DASHBOARD</p>
            {routes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </div>
        <div className="mt-4">
          <div className="flex flex-col gap-y-4">
            <p className="capitalize font-medium">CHARTS</p>
            {chartsRoutes.map((item) => (
              <SidebarItem key={item.label} {...item} />
            ))}
          </div>
        </div>
        <div
          // onMouseDown={handleMouseDown}
          onClick={resetWidth}
          className="opacity-100 transition absolute h-full w-1 bg-primary/10 right-0 top-0"
        />
      </aside>
      <div
        ref={navbarRef}
        className={cn(
          "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
          isResetting && "transition-all ease-in-out duration-300",
          isMobile && "left-0 w-full"
        )}
      >
        <nav className="bg-transparent px-3 py-2 w-full">
          {isCollapsed && (
            <MenuIcon
              role="button"
              onClick={resetWidth}
              className="h-6 w-6 text-muted-foreground"
            />
          )}
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
