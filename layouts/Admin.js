import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";
const Filters = () => {
  return (
    <div className="bg-white w-1/3 h-full p-6 shadow-lg overflow-y-auto">
      <h2 className="text-xl font-semibold mb-4">Filters: all orders</h2>

      {/* Order Created */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Order created</h3>
        <div className="flex gap-4">
          <button className="flex-1 border border-gray-300 p-3 rounded-lg flex flex-col items-center gap-2 hover:border-blue-500 focus:ring focus:ring-blue-300">
            <div className="bg-blue-100 rounded-full p-2">
              {/* Icon Placeholder */}
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 10h11M9 21V3m0 4.5L6.5 8M9 7.5L11.5 8m9-4h-4m-1 4h4"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium">In Merchant portal</span>
          </button>

          <button className="flex-1 border border-gray-300 p-3 rounded-lg flex flex-col items-center gap-2 hover:border-blue-500 focus:ring focus:ring-blue-300">
            <div className="bg-blue-100 rounded-full p-2">
              {/* Icon Placeholder */}
              <svg
                className="w-6 h-6 text-blue-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16 2.13A10.3 10.3 0 0113 1m1 0v4m0-4l-1 2m-1-2L10 4M10 1v4M8.38 4l-1.25 2M7 5v4m3-3.5L6.38 5m4.62 1.5l2.62.12M10 6v5m0 5.5l1.25 1M11 16v4m-1 0H8"
                ></path>
              </svg>
            </div>
            <span className="text-sm font-medium">In your Webshop</span>
          </button>
        </div>
      </div>

      {/* Credit & Fraud Risk Type */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Credit & fraud risk type</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="creditRisk"
              className="form-radio text-blue-500"
              defaultChecked
            />
            <span>Any</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="creditRisk"
              className="form-radio text-blue-500"
            />
            <span>Direct invoice</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="creditRisk"
              className="form-radio text-blue-500"
            />
            <span>Funded invoice</span>
          </label>
          <label className="flex items-center gap-2">
            <input
              type="radio"
              name="creditRisk"
              className="form-radio text-blue-500"
            />
            <span>Funded invoice on recourse</span>
          </label>
        </div>
      </div>

      {/* Order Status */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Order status</h3>
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              className="form-checkbox text-blue-500"
              defaultChecked
            />
            <span>Any</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span>Refunded</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span>Pending</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span>Cancelled</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span>Fulfilled</span>
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" className="form-checkbox text-blue-500" />
            <span>Unverified</span>
          </label>
        </div>
      </div>

      {/* Purchase Date */}
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-2">Purchase date</h3>
        <input
          type="date"
          className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>

      {/* Actions */}
      <div className="flex justify-between">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600">
          Apply filters
        </button>
        <button className="text-blue-500 px-4 py-2 hover:underline">
          Clear all
        </button>
      </div>
    </div>
  );
};

const OverlayWithCard = () => {
  return (
    <div className="absolute top-0 inset-0 bg-black bg-opacity-50 flex z-50 w-full h-full">
      {/* Left Half with Card */}
      {/* Right Half */}
      <div className="w-1/2 h-full"></div>
      <div className="w-1/2 bg-white h-full p-6 flex flex-col justify-center">
        <Filters />{" "}
      </div>
    </div>
  );
};

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        {/* Header */}
        <HeaderStats />
        <div className="md:px-4 mx-auto w-full">
          {children}
          <FooterAdmin />
        </div>
      </div>
      {/* <OverlayWithCard /> */}
    </>
  );
}
