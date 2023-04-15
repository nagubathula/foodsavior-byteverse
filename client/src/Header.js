import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { UserContext } from "./UserContext";

export default function Header({ search, setSearch }) {
  const { setUserInfo, userInfo } = useContext(UserContext);
  useEffect(() => {
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);

  function logout() {
    fetch('http://localhost:4000/logout', {
      credentials: 'include',
      method: 'POST',
    });
    setUserInfo(null);
  }

  const username = userInfo?.username;

  return (
    <header className="sticky top-0 z-50 ">
      <nav className="bg-support backdrop-blur-md bg-opacity-70 drop-shadow-2xl  rounded-b-xl">
        <div className="max-w-screen-xl flex flex-wrap items-center text-secondary  justify-between mx-auto p-4">
          <Link to="/" className="flex items-center">
            {/* <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Flowbite Logo" /> */}
            <span className="self-center text-4xl font-semibold whitespace-nowrap">
              FoodSavior
            </span>
          </Link>
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="navbar-default">
            {username ? (
              <>
                <div>
                  <div>
                    <Link to="/create">Create +</Link>
                  </div>
                  <a onClick={logout}>Logout ({username})</a>
                </div>
              </>
            ) : (
              <>
                <div className="flex flex-row gap-4">
                  <div className="relative">
                    <AiOutlineSearch className="text-primary absolute top-4 left-4" />
                    <input
                      type="text"
                      className="bg-white h-full text-primary w-full px-12 rounded-lg focus:outline-none hover:cursor-pointer"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                    />
                  </div>

                  <Link
                    to="/login"
                    className="relative rounded px-5 py-2.5 overflow-hidden group bg-secondary relative hover:bg-gradient-to-r hover:from-rose-400 hover:to-rose-300 text-white hover:ring-2 hover:ring-offset-2 hover:ring-rose-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Login</span>
                  </Link>
                  <Link
                    to="/register"
                    className="relative rounded px-5 py-2.5 overflow-hidden group bg-secondary relative hover:bg-gradient-to-r hover:from-rose-400 hover:to-rose-300 text-white hover:ring-2 hover:ring-offset-2 hover:ring-rose-400 transition-all ease-out duration-300"
                  >
                    <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-10 rotate-12 group-hover:-translate-x-40 ease"></span>
                    <span className="relative">Register</span>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}
