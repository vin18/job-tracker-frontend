import { useUser } from "@/hooks/useUser";
import { Navigate, Outlet } from "react-router-dom";

interface Props {
  redirectPath?: string;
}

const ProtectedRoute = ({ redirectPath = "/login" }: Props) => {
  const user = useUser();

  if (!user) {
    return <Navigate to={redirectPath} replace />;
  }

  return (
    <div className="w-screen h-screen flex flex-col items-stretch justify-start">
      <div className="w-full grow">
        <Outlet />
      </div>
    </div>
  );
};

export default ProtectedRoute;
