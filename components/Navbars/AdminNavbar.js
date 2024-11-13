import React from "react";

import UserDropdown from "components/Dropdowns/UserDropdown.js";

export default function Navbar() {
  const [openMenu, setOpenMenu] = React.useState(false);
  return (
    <>
      {/* Navbar */}
      <nav className="absolute top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4">
        <div className="w-full mx-autp items-center flex justify-between md:flex-nowrap flex-wrap md:px-10 px-4 gap-6">
          {/* Brand */}
          <a
            className="text-white text-sm uppercase hidden lg:inline-block font-semibold"
            href="#pablo"
            onClick={(e) => e.preventDefault()}
          >
            Dashboard
          </a>
          <div className="">
            <div
              className="inline-flex items-center overflow-hidden rounded-md border bg-white"
              onClick={() => {
                setOpenMenu((data) => !data);
              }}
            >
              <a
                href="#"
                className="border-e px-4 py-2 text-sm/none text-gray-600 hover:bg-gray-50 hover:text-gray-700"
              >
                Demo Data
              </a>

              <button className="h-full p-2 text-gray-600 hover:bg-gray-50 hover:text-gray-700">
                <i className={`fas fa-caret-down`} />
                {/* <i
                  className={`fas ${
                    items?.purchase ? "fa-caret-up" : "fa-caret-down"
                  }`}
                /> */}
              </button>
            </div>
            {openMenu && (
              <div
                className="absolute end-0 z-10 mt-2 w-56 rounded-md border border-gray-100 bg-white shadow-lg"
                role="menu"
              >
                <div className="p-2">
                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm hover:text-blueGray-500"
                    role="menuitem"
                  >
                    View on Storefront
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm hover:text-blueGray-500"
                    role="menuitem"
                  >
                    View Warehouse Info
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm hover:text-blueGray-500"
                    role="menuitem"
                  >
                    Duplicate Product
                  </a>

                  <a
                    href="#"
                    className="block rounded-lg px-4 py-2 text-sm hover:text-blueGray-500"
                    role="menuitem"
                  >
                    Unpublish Product
                  </a>

                  {/* <form method="POST" action="#">
                  <button
                    type="submit"
                    className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                    role="menuitem"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="size-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                    Delete Product
                  </button>
                </form> */}
                </div>
              </div>
            )}
          </div>
          {/* Form */}
          <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3">
            <div className="relative flex w-full flex-wrap items-stretch">
              <span className="z-10 h-full leading-snug font-normal absolute text-center text-blueGray-300 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3">
                <i className="fas fa-search"></i>
              </span>
              <input
                type="text"
                placeholder="Search here..."
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:ring w-full pl-10"
              />
            </div>
          </form>
          {/* User */}
          <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
            <UserDropdown />
          </ul>
        </div>
      </nav>
      {/* End Navbar */}
    </>
  );
}
