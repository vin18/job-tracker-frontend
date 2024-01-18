import Footer from "@/components/Footer";
import Register from "@/components/Register";
import { useUser } from "@/hooks/useUser";
import { Link, Navigate } from "react-router-dom";

function RegisterPage() {
  const user = useUser();

  if (user) {
    return <Navigate to={"/dashboard"} replace />;
  }

  return (
    <>
      <div
        className={`relative m-auto flex h-[100vh] w-full flex-col items-center justify-center bg-gradient-to-br from-orange-100 via-white to-orange-50 pl-2 pr-2`}
      >
        <div className="absolute z-50 m-auto flex w-[380px] flex-1 flex-col justify-center p-6 sm:w-[468px] sm:p-10">
          <Link to="https://expense.fyi">
            <h1 className="flex flex-col items-center text-3xl">
              <span className="font-black text-gray-900">Linear</span>
            </h1>
          </Link>

          <p className="mb-6 mt-2 text-center text-sm font-medium text-zinc-600">
            Fill in the details and get started!
          </p>
          <Register />

          <p className="text-center text-sm font-medium text-gray-700 mt-4">
            Already registered? &nbsp;
            <Link
              to="/login"
              className="border-b-[1px] border-gray-700 pb-[1px] font-bold hover:border-gray-500 hover:text-gray-600"
            >
              Sign in
            </Link>{" "}
            to your account.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default RegisterPage;
