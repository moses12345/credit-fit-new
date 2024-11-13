/* eslint-disable react/jsx-no-target-blank */
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useCartStore } from "../store/store";

const orders = [
  {
    date: "Jun 13, 2023",
    order: "1113-222/01",
    invoice: "999900125",
    customer: "SJMATRIX",
  },
  {
    date: "Mar 01, 2023",
    order: "1113-220/01",
    invoice: "999900124",
    customer: "SJMATRIX",
  },
  // More data here...
];

function OrdersTable() {
  return (
    <div className="bg-white p-4 rounded-lg shadow-sm">
      <table className="w-full">
        <thead>
          <tr className="text-left border-b text-gray-500">
            <th className="py-2">Date placed</th>
            <th>Order #</th>
            <th>Invoice #</th>
            <th>Customer</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, index) => (
            <tr key={index} className="text-gray-700 border-b">
              <td className="py-2">{order.date}</td>
              <td>{order.order}</td>
              <td>{order.invoice}</td>
              <td>{order.customer}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Filters({ onClose }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-6">Filters: all orders</h2>

      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Order created</h3>
        <div className="flex flex-col space-y-2 mt-2">
          <label className="inline-flex items-center">
            <input type="radio" name="orderCreated" className="text-blue-500" />
            <span className="ml-2">In Merchant portal</span>
          </label>
          <label className="inline-flex items-center">
            <input type="radio" name="orderCreated" className="text-blue-500" />
            <span className="ml-2">In your Webshop</span>
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Credit & fraud risk type</h3>
        <div className="flex flex-col space-y-2 mt-2">
          <label>
            <input type="radio" name="creditRisk" /> Any
          </label>
          <label>
            <input type="radio" name="creditRisk" /> Direct Invoice
          </label>
          <label>
            <input type="radio" name="creditRisk" /> Funded Invoice
          </label>
        </div>
      </div>

      <div className="mb-4">
        <h3 className="font-medium text-gray-700">Order status</h3>
        <div className="flex flex-col space-y-2 mt-2">
          <label>
            <input type="radio" name="orderStatus" /> Any
          </label>
          <label>
            <input type="radio" name="orderStatus" /> Pending
          </label>
          <label>
            <input type="radio" name="orderStatus" /> Fulfilled
          </label>
          <label>
            <input type="radio" name="orderStatus" /> Refunded
          </label>
        </div>
      </div>

      <div className="mt-4">
        <button className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg mb-2">
          Apply filters
        </button>
        <button
          className="w-full py-2 px-4 bg-gray-300 text-gray-700 rounded-lg"
          onClick={onClose}
        >
          Clear all
        </button>
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-64 bg-white h-full p-6 shadow-lg border-r">
      <h2 className="text-2xl font-bold mb-8">two.</h2>
      <nav className="space-y-4">
        <a
          href="#"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          Dashboard
        </a>
        <a href="#" className="block py-2 bg-blue-100 text-blue-500 rounded">
          Orders
        </a>
        <a
          href="#"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          Customers
        </a>
        <a
          href="#"
          className="block py-2 text-gray-700 hover:bg-gray-100 rounded"
        >
          Statements
        </a>
      </nav>
    </div>
  );
}

export default function Index() {
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const router = useRouter();
  const login = useCartStore((store) => store.login);

  useEffect(() => {
    if (!login) {
      router.push("/auth/login");
    } else {
      router.push("/admin/dashboard");
    }
  }, []);

  return (
    <div className="flex h-screen bg-gray-100">
      {/* <Sidebar />
      <div className="flex-grow p-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Orders</h1>
          <button
            className="text-blue-500 font-medium"
            onClick={() => setIsFilterOpen(true)}
          >
            Filters
          </button>
        </div>
        <OrdersTable />
      </div>
      {isFilterOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-10"
          onClick={() => setIsFilterOpen(false)}
        >
          <div
            className="w-80 bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Filters onClose={() => setIsFilterOpen(false)} />
          </div>
        </div>
      )} */}
    </div>
  );
}
