import { Link } from "react-router-dom";
import logo from "../assets/react.svg";
import Footer from "@/components/Footer";

export default function LoginPage() {
  return (
    <div className="relative h-full bg-gradient-to-br from-sky-100 via-white to-sky-100 pl-2 pr-2 text-gray-800">
      <header className="relative m-auto h-[56px] max-w-4xl pt-3">
        <div className="absolute left-0 right-0 top-3 z-20 flex items-center justify-between">
          <Link to="/" className="flex max-w-[180px] items-center p-3 text-2xl">
            <img src={logo} alt="expense.fyi logo" className="mr-2" />
            <span className="font-black tracking-[-0.03em] text-gray-900">
              Linear
            </span>
          </Link>
          <Link
            to="/login"
            className="leading-2 mr-4 inline-flex h-[38px] items-center overflow-hidden rounded-full bg-gray-900 px-4 py-1 text-sm font-medium text-white transition hover:bg-primary/90"
          >
            Sign in
          </Link>
        </div>
      </header>
      <main>
        <div className="absolute inset-x-0 top-[-55px] z-10 h-96 overflow-hidden text-gray-900/40 opacity-10 [mask-image:linear-gradient(to_top,transparent,white)]">
          <svg
            className="absolute inset-0 top-0 h-full w-full text-gray-900"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <pattern
                id="pattern"
                width="32"
                height="32"
                patternUnits="userSpaceOnUse"
                x="50%"
                y="100%"
                patternTransform="translate(0 -1)"
              >
                <path d="M0 32V.5H32" fill="none" stroke="currentColor"></path>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#pattern)"></rect>
          </svg>
        </div>
        <div className="mx-auto mb-16 mt-16 max-w-md px-3 text-center sm:max-w-lg sm:px-0">
          <h1 className="mt-4 text-4xl font-black leading-[1.15] tracking-[-0.03em] text-black sm:text-5xl sm:leading-[1.15]">
            Seamlessly Track{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Job Applications.
            </span>
          </h1>
          <p className="mt-5 text-base font-normal leading-6 tracking-tight sm:text-lg">
            Our easy-to-use platform allows you to track your job applications,
            giving you a clear picture of your job hunting process.
          </p>
          <div className="mt-8 flex justify-center">
            <Link
              to="/login"
              className="inline-flex h-[38px] items-center justify-center rounded-full bg-gray-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-primary/90 hover:shadow"
            >
              Get started
            </Link>
            <Link
              to="/github"
              className="ml-6 inline-flex h-[38px] items-center justify-center  rounded-full bg-white/0 px-4 py-2.5 text-sm font-medium text-slate-900 ring-1 ring-slate-900/10 hover:bg-gray-100 hover:shadow"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                className="mr-2"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
              Star on GitHub
            </Link>
          </div>
        </div>
        <div className="mx-auto mb-16 mt-16 max-w-md px-3 text-center sm:max-w-lg sm:px-0">
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-black sm:text-4xl">
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Why to use
            </span>{" "}
            Linear?
          </h2>
          <ul className="mt-6 list-decimal px-4 text-left leading-6 [counter-reset:section] sm:px-2">
            <li className="before::h-2 mt-4 text-base tracking-tight sm:text-lg">
              <b className="font-sans font-bold text-black">Easy to use:</b>{" "}
              Track job applications on-the-go with a seamless user experience.
            </li>
            <li className="before::h-2 mt-4 text-base tracking-tight sm:text-lg">
              <b className="font-sans font-bold text-black">
                Data-driven insights:
              </b>{" "}
              Linear provides valuable insights allowing you to efficiently
              track your job applications.
            </li>
            <li className="before::h-2 mt-4 text-base tracking-tight sm:text-lg">
              <b className="font-sans font-bold text-black">
                Real-time visibility:
              </b>{" "}
              Monitor your job applications anywhere, whether you are at home or
              on-the-go, with a user-friendly responsive interface.
            </li>
          </ul>
        </div>

        <div className="mx-auto mb-16 mt-16 max-w-md px-3 text-center sm:max-w-lg sm:px-0">
          <h2 className="mt-4 text-3xl font-extrabold tracking-[-0.03em] text-black sm:text-4xl sm:leading-[3.5rem]">
            Proudly{" "}
            <span className="bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
              Open Sourced!
            </span>
          </h2>
          <p className="mt-3 text-base leading-7 sm:text-lg">
            Source code is available on GitHub
          </p>
          <Link
            to="/sigin"
            className="mt-6 inline-flex h-[36px] items-center justify-center  rounded-full bg-white/0 px-4 py-2.5 text-sm font-medium text-slate-900 ring-1 ring-slate-900/10 hover:bg-gray-100 hover:shadow"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              className="mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
            </svg>
            Star on GitHub
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
