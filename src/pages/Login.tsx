import Footer from "@/components/Footer";
import Login from "@/components/Login";
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
      <div
        className={`relative m-auto flex h-[100vh] w-full flex-col items-center justify-center bg-gradient-to-br from-sky-100 via-white to-sky-50 pl-2 pr-2`}
      >
        <div className="absolute z-50 m-auto flex w-[380px] flex-1 flex-col justify-center p-6 sm:w-[468px] sm:p-10">
          <Link to="https://expense.fyi">
            <h1 className="flex flex-col items-center text-3xl">
              <span className="font-black text-gray-900">Linear</span>
            </h1>
          </Link>
          <p className="mb-6 mt-3 text-center text-sm font-medium text-zinc-600">
            Use your email and password to sign in.
          </p>

          <Login />

          <p className="text-center text-sm font-medium text-gray-700 mt-4">
            Don{"'"}t have an account?{" "}
            <Link
              to="/register"
              className="border-b-[1px] border-gray-700 pb-[1px] font-bold hover:border-gray-500 hover:text-gray-600"
            >
              Sign up
            </Link>{" "}
            for free.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
