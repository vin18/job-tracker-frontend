import { useUser } from "@/hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./ui/sidebar";

const ProtectedRoute = ({ redirectPath = "/login" }) => {
  const user = useUser();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div className="w-screen h-screen flex flex-col items-stretch justify-start">
      <div className="w-full grow">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
