import { Link, useLocation, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { Button } from "./button";
import { useToast } from "./use-toast";
import {
  BarChart4,
  CircleUserRoundIcon,
  HomeIcon,
  LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ILink {
  id: number;
  href: string;
  linkName: string;
  icon: LucideIcon;
}

const LINKS: ILink[] = [
  {
    id: 0,
    href: "/dashboard",
    linkName: "Dashboard",
    icon: HomeIcon,
  },
  {
    id: 1,
    href: "/jobs",
    linkName: "Jobs",
    icon: BarChart4,
  },
  {
    id: 2,
    href: "/profile",
    linkName: "Profile",
    icon: CircleUserRoundIcon,
  },
];

const useLogout = () => {
  return useQuery({
    queryKey: ["auth"],
    queryFn: () => axios.get(`http://localhost:5000/api/v1/auth/logout`),
    enabled: false,
  });
};

const Sidebar = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const { refetch: logoutUser, data } = useLogout();
  const { pathname } = useLocation();

  if (data) {
    toast({
      variant: "destructive",
      title: "Logged out successfully",
    });
    navigate(`/login`);
  }

  return (
    <div className="h-screen w-screen bg-white dark:bg-slate-900">
      <aside
        id="sidebar"
        className="fixed left-0 top-0 z-40 h-screen w-64 transition-transform"
        aria-label="Sidebar"
      >
        <div className="flex h-full flex-col overflow-y-auto border-r border-slate-200 bg-white px-3 py-4 dark:border-slate-700 dark:bg-slate-900">
          <Link
            to="/"
            className="mb-8 flex items-center rounded-lg px-3 py-2 text-slate-900 dark:text-white"
          >
            <span className="text-xl text-base font-semibold">Linear</span>
          </Link>

          <ul className="space-y-2 text-sm font-medium">
            {LINKS.map((link: ILink) => {
              const isActive = link.href === pathname;

              return (
                <li key={link.id}>
                  <Link
                    to={link.href}
                    className={cn(
                      isActive
                        ? "bg-gray-100 text-gray-900"
                        : "text-gray-600 hover:bg-gray-50 hover:text-gray-900",
                      "group flex items-center rounded-md px-2 py-2 text-base font-medium"
                    )}
                  >
                    <link.icon
                      className={cn(
                        isActive
                          ? "text-indigo-500"
                          : "text-gray-400 group-hover:text-gray-500",
                        "mr-3 h-6 w-6 flex-shrink-0"
                      )}
                      aria-hidden="true"
                    />
                    <span className="flex-1 whitespace-nowrap">
                      {link.linkName}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="mt-auto">
            <Button onClick={() => logoutUser()} className="w-full">
              Logout
            </Button>
          </div>
        </div>
      </aside>
    </div>
  );
};

export default Sidebar;
