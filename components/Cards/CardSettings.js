import React from "react";
import { useState, useEffect } from "react";
import { useCartStore } from "../../store/store";
import TabContent from "./TabContent";
import NestedTable from "./NestedTable";

// components

export default function CardSettings({
  title,
  addItems,
  onItemsSave,
  addItem,
  formFields,
}) {
  const cart = useCartStore((store) => store.cart);
  const add = useCartStore((store) => store.add);
  const groups = useCartStore((store) => store.groups);

  const [includeSalesInfo, setIncludeSalesInfo] = useState(false);
  const [includePurchaseInfo, setIncludePurchaseInfo] = useState(false);
  const [trackInventory, setTrackInventory] = useState(false);
  const [tab, setTab] = useState("Other Details");

  const [formData, setFormData] = useState(formFields);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let data;
    if (title == "Items") {
      data = {
        name: formData.name,
        sku: formData.sku,
        des: `Service: ${formData.name}`,
        purchase_des: formData.purchaseDescription,
        rate: formData.costPrice,
        purchase_rate: formData.sellingPrice,
        usage_unit: formData.unit,
        inventory: trackInventory,
        inventory_account: formData?.inventory_account,
        opening_stock: formData?.opening_stock,
        stock_in_hand: formData?.opening_stock,
        opening_stock_price: formData?.opening_stock_price,
        status: "Active",
      };
    }
    if (title == "Groups") {
      data = {
        name: formData.name,
        sku: formData.sku,
        des: `Service: ${formData.des}`,
        status: "Active",
      };
    }

    console.log("this is data:", data);

    addItem(data);
    onItemsSave(false);
  };
  const NestedColums = {
    "ITEM DETAILS": "name",
    QUANTITY: "sku",
    RATE: "des",
    DISCOUNT: "purchase_des",
    TAX: "purchase_des",
    AMOUNT: "amount",
  };
  const PackageNestedColums = {
    "ITEMS & DESCRIPTION": "ITEMS_&_DESCRIPTION",
    ORDERED: "ORDERED",
    PACKED: "PACKED",
    "QUANTITY TO PACK": "QUANTITY_TO_PACK",
  };
  const CreitNotesNestedColums = {
    "ITEM DETAILS": "name",
    Account: "account",
    QUANTITY: "sku",
    RATE: "des",
    DISCOUNT: "purchase_des",
    TAX: "purchase_des",
    "CUSTOMER DETAILS": "customer_details",
    AMOUNT: "amount",
  };
  const creditnotescolums = [
    {
      name: "hello",
      account: "account",
      sku: "hello",
      des: "hello",
      purchase_des: "hello",
      purchase_des: "cool",
      customer_details: "cool",
      amount: 100,
    },
  ];
  const BillsNestedColums = {
    "ITEM DETAILS": "name",
    QUANTITY: "sku",
    RATE: "des",
    DISCOUNT: "purchase_des",
    TAX: "purchase_des",
    "CUSTOMER DETAILS": "customer_details",
    AMOUNT: "amount",
  };
  const billscolums = [
    {
      name: "hello",
      sku: "hello",
      des: "hello",
      purchase_des: "hello",
      purchase_des: "cool",
      customer_details: "cool",
      amount: 100,
    },
  ];
  const colums = [
    {
      name: "hello",
      sku: "hello",
      des: "hello",
      purchase_des: "hello",
      purchase_des: "cool",
      amount: 100,
    },
  ];
  const packageData = [
    {
      "ITEMS_&_DESCRIPTION": "hello",
      ORDERED: "hello",
      PACKED: "hello",
      QUANTITY_TO_PACK: "10 qty",
    },
    {
      "ITEMS_&_DESCRIPTION": "hello this is description",
      ORDERED: "hello",
      PACKED: "hello",
      QUANTITY_TO_PACK: "10 qty",
    },
    {
      "ITEMS_&_DESCRIPTION": "hello",
      ORDERED: "hello",
      PACKED: "hello",
      QUANTITY_TO_PACK: "10 qty",
    },
    {
      "ITEMS_&_DESCRIPTION": "hello",
      ORDERED: "hello",
      PACKED: "hello",
      QUANTITY_TO_PACK: "10 qty",
    },
    {
      "ITEMS_&_DESCRIPTION": "hello",
      ORDERED: "hello",
      PACKED: "hello",
      QUANTITY_TO_PACK: "10 qty",
    },
  ];

  return (
    <>
      {addItems && (
        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
          <div className="rounded-t bg-white mb-0 px-6 py-6">
            <div className="text-center flex justify-between">
              <h6 className="text-blueGray-700 text-xl font-bold">
                New {title}
              </h6>
              <button
                className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                type="button"
                onClick={add}
              >
                {cart}
              </button>
            </div>
          </div>
          {title == "Items" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Item Information
                </h6>
                <div className="flex flex-wrap">
                  {/* Type */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Type
                    </label>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="goods"
                        name="type"
                        value="goods"
                        checked={formData.type === "goods"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="goods" className="mr-4">
                        Goods
                      </label>
                      <input
                        type="radio"
                        id="service"
                        name="type"
                        value="service"
                        checked={formData.type === "service"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="service">Service</label>
                    </div>
                  </div>
                  {/* Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* SKU */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="sku"
                    >
                      SKU
                    </label>
                    <input
                      type="text"
                      id="sku"
                      name="sku"
                      value={formData.sku}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Unit */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="unit"
                    >
                      Unit
                    </label>
                    <input
                      type="text"
                      id="unit"
                      name="unit"
                      value={formData.unit}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* HSN Code */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="hsn-code"
                    >
                      HSN Code
                    </label>
                    <div className="flex items-center">
                      <input
                        type="text"
                        id="hsn-code"
                        name="hsnCode"
                        value={formData.hsnCode}
                        onChange={handleChange}
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                      />
                      <button
                        type="button"
                        className="ml-3 bg-blueGray-700 text-white px-2 py-1 rounded"
                      >
                        Help
                      </button>
                    </div>
                  </div>
                  {/* Tax Preference */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="tax-preference"
                    >
                      Tax Preference
                    </label>
                    <select
                      id="tax-preference"
                      name="taxPreference"
                      value={formData.taxPreference}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      <option value="taxable">Taxable</option>
                      <option value="non-taxable">Non-taxable</option>
                    </select>
                  </div>
                  {/* Select Group */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="tax-preference"
                    >
                      Select Group
                    </label>
                    <select
                      id="tax-preference"
                      name="taxPreference"
                      value={""}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    >
                      {groups.map((data) => (
                        <option value={data.name}>{data.name}</option>
                      ))}
                    </select>
                  </div>
                  {/* Image Upload */}
                  <div className="w-full px-4 mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Image Upload
                    </label>
                    <div className="border-dashed border-2 border-blueGray-300 p-4 rounded flex flex-col items-center justify-center">
                      <p>
                        Drag & drop an image or{" "}
                        <button type="button" className="text-blueGray-700">
                          browse
                        </button>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {/* Sales Information */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id="include-sales-info"
                        checked={includeSalesInfo}
                        onChange={() => setIncludeSalesInfo(!includeSalesInfo)}
                        className="mr-2"
                      />
                      <label
                        htmlFor="include-sales-info"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Sales Information
                      </label>
                    </div>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                          className="block uppercase text-red-500 text-xs font-bold mb-2"
                          htmlFor="selling-price"
                        >
                          Selling Price*
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-blueGray-600 bg-gray-200 border border-r-0 border-blueGray-300 rounded-l-md">
                            INR
                          </span>
                          <input
                            type="text"
                            id="selling-price"
                            name="sellingPrice"
                            value={formData.sellingPrice}
                            onChange={handleChange}
                            disabled={!includeSalesInfo}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-r-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                          className="block uppercase text-red-500 text-xs font-bold mb-2"
                          htmlFor="sales-account"
                        >
                          Account*
                        </label>
                        <select
                          id="sales-account"
                          name="salesAccount"
                          value={formData.salesAccount}
                          onChange={handleChange}
                          disabled={!includeSalesInfo}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                          <option value="sales">Sales</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  {/* Purchase Information */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id="include-purchase-info"
                        checked={includePurchaseInfo}
                        onChange={() =>
                          setIncludePurchaseInfo(!includePurchaseInfo)
                        }
                        className="mr-2"
                      />
                      <label
                        htmlFor="include-purchase-info"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Purchase Information
                      </label>
                    </div>
                    <div className="flex flex-wrap">
                      <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                          className="block uppercase text-red-500 text-xs font-bold mb-2"
                          htmlFor="cost-price"
                        >
                          Cost Price*
                        </label>
                        <div className="flex">
                          <span className="inline-flex items-center px-3 text-sm text-blueGray-600 bg-gray-200 border border-r-0 border-blueGray-300 rounded-l-md">
                            INR
                          </span>
                          <input
                            type="text"
                            id="cost-price"
                            name="costPrice"
                            value={formData.costPrice}
                            onChange={handleChange}
                            disabled={!includePurchaseInfo}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-r-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          />
                        </div>
                      </div>
                      <div className="w-full lg:w-6/12 px-4 mb-3">
                        <label
                          className="block uppercase text-red-500 text-xs font-bold mb-2"
                          htmlFor="purchase-account"
                        >
                          Account*
                        </label>
                        <select
                          id="purchase-account"
                          name="purchaseAccount"
                          value={formData.purchaseAccount}
                          onChange={handleChange}
                          disabled={!includePurchaseInfo}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        >
                          <option value="cost-of-goods-sold">
                            Cost of Goods Sold
                          </option>
                        </select>
                      </div>
                      <div className="w-full px-4 mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="purchase-description"
                        >
                          Description
                        </label>
                        <textarea
                          id="purchase-description"
                          name="purchaseDescription"
                          value={formData.purchaseDescription}
                          onChange={handleChange}
                          disabled={!includePurchaseInfo}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          rows="2"
                        ></textarea>
                      </div>
                      <div className="w-full px-4 mb-3">
                        <label
                          className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                          htmlFor="preferred-vendor"
                        >
                          Preferred Vendor
                        </label>
                        <input
                          type="text"
                          id="preferred-vendor"
                          name="preferredVendor"
                          value={formData.preferredVendor}
                          onChange={handleChange}
                          disabled={!includePurchaseInfo}
                          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap">
                  {/* Inventory Information */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id="include-sales-info"
                        checked={trackInventory}
                        onChange={() => setTrackInventory(!trackInventory)}
                        className="mr-2"
                      />
                      <label
                        htmlFor="include-sales-info"
                        className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      >
                        Track Inventory for this item
                      </label>
                    </div>
                    {trackInventory && (
                      <div>
                        <div className="flex flex-wrap">
                          <div className="w-full lg:w-6/12 px-4 mb-3">
                            <label
                              className="block uppercase text-red-500 text-xs font-bold mb-2"
                              htmlFor="selling-price"
                            >
                              Opening Stock Rate per Unit*
                            </label>
                            <div className="flex">
                              <span className="inline-flex items-center px-3 text-sm text-blueGray-600 bg-gray-200 border border-r-0 border-blueGray-300 rounded-l-md">
                                INR
                              </span>
                              <input
                                type="text"
                                id="selling-price"
                                name="opening_stock_price"
                                value={formData.opening_stock_price}
                                onChange={handleChange}
                                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-r-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                              />
                            </div>
                          </div>
                          <div className="w-full lg:w-6/12 px-4 mb-3">
                            <label
                              className="block uppercase text-red-500 text-xs font-bold mb-2"
                              htmlFor="sales-account"
                            >
                              Opening Stock*
                            </label>
                            <input
                              type="text"
                              id="selling-price"
                              name="opening_stock"
                              value={formData.opening_stock}
                              onChange={handleChange}
                              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded-r-md text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                            />
                          </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4 mb-3">
                          <label
                            className="block uppercase text-red-500 text-xs font-bold mb-2"
                            htmlFor="sales-account"
                          >
                            Inventory Account*
                          </label>
                          <select
                            id="sales-account"
                            name="inventory_account"
                            value={formData.inventory_account}
                            onChange={handleChange}
                            className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                          >
                            <option value="Inventory Asset">
                              Inventory Asset
                            </option>
                            <option value="Stock">Stock</option>
                          </select>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Groups" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Item Information
                </h6>
                <div className="flex flex-wrap">
                  {/* Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* SKU */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="sku"
                    >
                      SKU
                    </label>
                    <input
                      type="text"
                      id="sku"
                      name="sku"
                      value={formData.sku}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Unit */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="unit"
                    >
                      Descriptions
                    </label>
                    <input
                      type="text"
                      id="des"
                      name="des"
                      value={formData.des}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Customers" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Customers Information
                </h6>
                <div className="flex flex-wrap">
                  {/* Type */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
                      Customer Type
                    </label>
                    <div className="flex items-center">
                      <input
                        type="radio"
                        id="goods"
                        name="type"
                        value="goods"
                        checked={formData.type === "goods"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="goods" className="mr-4">
                        Business
                      </label>
                      <input
                        type="radio"
                        id="service"
                        name="type"
                        value="service"
                        checked={formData.type === "service"}
                        onChange={handleChange}
                        className="mr-2"
                      />
                      <label htmlFor="service">Individual</label>
                    </div>
                  </div>
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Primary Contact Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Customer Display Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Email */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Customer Email
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/*  Customer Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Customer Number
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/*  Customer Phone */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Customer Phone
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap px-4 tabs">
                  <div
                    onClick={() => {
                      setTab("Other Details");
                    }}
                    className={`tab ${
                      tab == "Other Details" ? "tab-active" : ""
                    }`}
                  >
                    Other Details
                  </div>
                  <div
                    className={`tab ${tab == "Address" ? "tab-active" : ""}`}
                    onClick={() => {
                      setTab("Address");
                    }}
                  >
                    Address
                  </div>
                  <div
                    className={`tab ${
                      tab == "Contact Persons" ? "tab-active" : ""
                    }`}
                    onClick={() => {
                      setTab("Contact Persons");
                    }}
                  >
                    Contact Persons
                  </div>
                  <div
                    className={`tab ${
                      tab == "Bank Details" ? "tab-active" : ""
                    }`}
                    onClick={() => {
                      setTab("Bank Details");
                    }}
                  >
                    Bank Details
                  </div>
                  <div
                    className={`tab ${tab == "Remarks" ? "tab-active" : ""}`}
                    onClick={() => {
                      setTab("Remarks");
                    }}
                  >
                    Remarks
                  </div>
                </div>

                <TabContent tab={tab} />

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Sales Order" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Sales Order Information
                </h6>
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="customer-name"
                  >
                    Customer Name
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">
                          Select or add a customer
                        </span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Field */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <div className="w-full lg:w-4/12 relative">
                    <div className="relative">
                      <div
                        id="branch-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">Head Office</span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              id="Layer_2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 374.98 227.51"
                              className="icon icon-sm"
                            >
                              <path d="M187.46 227.51c-10.23 0-20.46-3.9-28.27-11.71L11.73 68.45C-3.9 52.83-3.91 27.51 11.71 11.88c15.62-15.63 40.94-15.64 56.57-.02l119.18 119.09L306.69 11.72c15.62-15.62 40.95-15.62 56.57 0 15.62 15.62 15.62 40.95 0 56.57L215.75 215.8c-7.81 7.81-18.05 11.72-28.28 11.72z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Source Of Supply:{" "}
                      <span className="text-dark">Karnataka</span>
                    </p>
                  </div>
                </div>

                {/* /////////////////////////////////////// */}
                <div className="">
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Sales Order#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Reference#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Sales Order Date
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Email */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Expected Shipment Date
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Customer Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Payment Terms Due on Receipt
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Customer Phone */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Delivery Method
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Salesperson Select or Add Salesperson
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="w-full px-4 mb-3">
                    <NestedTable
                      column={NestedColums}
                      data={colums}
                      title="Items Table"
                      canAdd={true}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Vendors" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  New Vendor
                </h6>
                <div className="flex flex-wrap">
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Primary Contact Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Vendor Display Name*
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Vendor Email */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Vendor Email
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/*  Vendor Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Vendor Number
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/*  Vendor Phone */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Vendor Phone
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>
                <div className="flex flex-wrap px-4 tabs">
                  <div
                    onClick={() => {
                      setTab("Other Details");
                    }}
                    className={`tab ${
                      tab == "Other Details" ? "tab-active" : ""
                    }`}
                  >
                    Other Details
                  </div>
                  <div
                    className={`tab ${tab == "Address" ? "tab-active" : ""}`}
                    onClick={() => {
                      setTab("Address");
                    }}
                  >
                    Address
                  </div>
                  <div
                    className={`tab ${
                      tab == "Contact Persons" ? "tab-active" : ""
                    }`}
                    onClick={() => {
                      setTab("Contact Persons");
                    }}
                  >
                    Contact Persons
                  </div>
                  <div
                    className={`tab ${
                      tab == "Bank Details" ? "tab-active" : ""
                    }`}
                    onClick={() => {
                      setTab("Bank Details");
                    }}
                  >
                    Bank Details
                  </div>
                  <div
                    className={`tab ${tab == "Remarks" ? "tab-active" : ""}`}
                    onClick={() => {
                      setTab("Remarks");
                    }}
                  >
                    Remarks
                  </div>
                </div>

                <TabContent tab={tab} />

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Purchase Order" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  Purchase Order Information
                </h6>

                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="Vendor-name"
                  >
                    Vendor Name
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">
                          Select or add a vendor
                        </span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Field */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <div className="w-full lg:w-4/12 relative">
                    <div className="relative">
                      <div
                        id="branch-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">Head Office</span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              id="Layer_2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 374.98 227.51"
                              className="icon icon-sm"
                            >
                              <path d="M187.46 227.51c-10.23 0-20.46-3.9-28.27-11.71L11.73 68.45C-3.9 52.83-3.91 27.51 11.71 11.88c15.62-15.63 40.94-15.64 56.57-.02l119.18 119.09L306.69 11.72c15.62-15.62 40.95-15.62 56.57 0 15.62 15.62 15.62 40.95 0 56.57L215.75 215.8c-7.81 7.81-18.05 11.72-28.28 11.72z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Source Of Supply:{" "}
                      <span className="text-dark">Karnataka</span>
                    </p>
                  </div>
                </div>

                {/* /////////////////////////////////////// */}
                <div className="">
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Delivery Address
                    </label>
                    <div class="col-lg-9 flex space-x-4">
                      <div class="form-check form-check-inline flex items-center space-x-2">
                        <input
                          name="customer-type"
                          id="business"
                          class="form-check-input"
                          type="radio"
                          value="business"
                        />
                        <label for="business" class="form-check-label">
                          Organization
                        </label>
                      </div>
                      <div class="form-check form-check-inline flex items-center space-x-2">
                        <input
                          name="customer-type"
                          id="individual"
                          class="form-check-input"
                          type="radio"
                          value="individual"
                        />
                        <label for="individual" class="form-check-label">
                          Customer
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Purchase Order#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Reference#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Date
                    </label>
                    <input
                      type="date"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Email */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Expected Shipment Date
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Customer Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Payment Terms Due on Receipt
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Customer Phone */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Delivery Method
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Salesperson Select or Add Salesperson
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="w-full px-4 mb-3">
                    <NestedTable
                      column={NestedColums}
                      data={colums}
                      title="Items Table"
                      canAdd={true}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Invoice" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  New Invoice Information
                </h6>

                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="Vendor-name"
                  >
                    Customer Name
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">
                          Select or add a vendor
                        </span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Field */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <div className="w-full lg:w-4/12 relative">
                    <div className="relative">
                      <div
                        id="branch-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">Head Office</span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              id="Layer_2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 374.98 227.51"
                              className="icon icon-sm"
                            >
                              <path d="M187.46 227.51c-10.23 0-20.46-3.9-28.27-11.71L11.73 68.45C-3.9 52.83-3.91 27.51 11.71 11.88c15.62-15.63 40.94-15.64 56.57-.02l119.18 119.09L306.69 11.72c15.62-15.62 40.95-15.62 56.57 0 15.62 15.62 15.62 40.95 0 56.57L215.75 215.8c-7.81 7.81-18.05 11.72-28.28 11.72z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Source Of Supply:{" "}
                      <span className="text-dark">Karnataka</span>
                    </p>
                  </div>
                </div>

                {/* /////////////////////////////////////// */}
                <div className="">
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Invoice##
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Order Number
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Invoice Date
                    </label>
                    <input
                      type="date"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Email */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Salesperson
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Customer Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="w-full px-4 mb-3">
                    <NestedTable
                      column={NestedColums}
                      data={colums}
                      title="Items Table"
                      canAdd={true}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Package" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  New Package
                </h6>

                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="Vendor-name"
                  >
                    Customer Name
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">
                          Select or add a vendor
                        </span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Sales Order# */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="sales-order"
                  >
                    Sales Order#
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="sales-order"
                      name="salesOrder"
                      value={formData.salesOrder}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Package# */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="package"
                  >
                    Package Slip#
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Date */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="ship-date"
                  >
                    Date
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="date"
                      id="ship-date"
                      name="shipDate"
                      value={formData.shipDate}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                <div className="w-full px-4 mb-3">
                  <NestedTable
                    column={PackageNestedColums}
                    data={packageData}
                    title="Items Table"
                    canAdd={false}
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Credit Note" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  New Credit Note
                </h6>

                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="Vendor-name"
                  >
                    Customer Name
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">
                          Select or add a vendor
                        </span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Field */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <div className="w-full lg:w-4/12 relative">
                    <div className="relative">
                      <div
                        id="branch-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">Head Office</span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              id="Layer_2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 374.98 227.51"
                              className="icon icon-sm"
                            >
                              <path d="M187.46 227.51c-10.23 0-20.46-3.9-28.27-11.71L11.73 68.45C-3.9 52.83-3.91 27.51 11.71 11.88c15.62-15.63 40.94-15.64 56.57-.02l119.18 119.09L306.69 11.72c15.62-15.62 40.95-15.62 56.57 0 15.62 15.62 15.62 40.95 0 56.57L215.75 215.8c-7.81 7.81-18.05 11.72-28.28 11.72z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Source Of Supply:{" "}
                      <span className="text-dark">Karnataka</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="Vendor-name"
                  >
                    Reason
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">Select Reason</span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* /////////////////////////////////////// */}
                <div className="">
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Credit Note#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Reference#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Credit Note Date
                    </label>
                    <input
                      type="date"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Email */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Salesperson
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Customer Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="w-full px-4 mb-3">
                    <NestedTable
                      column={CreitNotesNestedColums}
                      data={creditnotescolums}
                      title="Items Table"
                      canAdd={true}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Bills" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  New Bill
                </h6>

                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="Vendor-name"
                  >
                    Vendor Name
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">
                          Select or add a vendor
                        </span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Field */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <div className="w-full lg:w-4/12 relative">
                    <div className="relative">
                      <div
                        id="branch-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">Head Office</span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              id="Layer_2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 374.98 227.51"
                              className="icon icon-sm"
                            >
                              <path d="M187.46 227.51c-10.23 0-20.46-3.9-28.27-11.71L11.73 68.45C-3.9 52.83-3.91 27.51 11.71 11.88c15.62-15.63 40.94-15.64 56.57-.02l119.18 119.09L306.69 11.72c15.62-15.62 40.95-15.62 56.57 0 15.62 15.62 15.62 40.95 0 56.57L215.75 215.8c-7.81 7.81-18.05 11.72-28.28 11.72z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Source Of Supply:{" "}
                      <span className="text-dark">Karnataka</span>
                    </p>
                  </div>
                </div>

                {/* /////////////////////////////////////// */}
                <div className="">
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Bill#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Order Number
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Bill Date
                    </label>
                    <input
                      type="date"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Due Date
                    </label>
                    <input
                      type="date"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/*  Customer Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="w-full px-4 mb-3">
                    <NestedTable
                      column={BillsNestedColums}
                      data={billscolums}
                      title="Items Table"
                      canAdd={true}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Shipment" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  New Shipment
                </h6>

                {/* Customer Name */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="customer-name"
                  >
                    Customer Name
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="customer-name"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Sales Order# */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="sales-order"
                  >
                    Sales Order#
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="sales-order"
                      name="salesOrder"
                      value={formData.salesOrder}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Package# */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="package"
                  >
                    Package#
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="package"
                      name="package"
                      value={formData.package}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Shipment Order# */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="shipment-order"
                  >
                    Shipment Order#
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="shipment-order"
                      name="shipmentOrder"
                      value={formData.shipmentOrder}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Ship Date */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="ship-date"
                  >
                    Ship Date
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="date"
                      id="ship-date"
                      name="shipDate"
                      value={formData.shipDate}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Carrier */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="carrier"
                  >
                    Carrier
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="carrier"
                      name="carrier"
                      value={formData.carrier}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Tracking# */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="tracking"
                  >
                    Tracking#
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="tracking"
                      name="tracking"
                      value={formData.tracking}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Tracking URL */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="tracking-url"
                  >
                    Tracking URL
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="text"
                      id="tracking-url"
                      name="trackingUrl"
                      value={formData.trackingUrl}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Shipping Charges */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="shipping-charges"
                  >
                    Shipping Charges (if any)
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="number"
                      id="shipping-charges"
                      name="shippingCharges"
                      value={formData.shippingCharges}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                {/* Notes */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="notes"
                  >
                    Notes
                  </label>
                  <div className="w-full lg:w-6/12">
                    <textarea
                      id="notes"
                      name="notes"
                      value={formData.notes}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    ></textarea>
                  </div>
                </div>

                {/* Shipment Already Delivered */}
                <div className="flex flex-wrap mb-6 px-4">
                  <div className="w-full lg:w-6/12">
                    <input
                      type="checkbox"
                      id="delivered"
                      name="delivered"
                      checked={formData.delivered}
                      // onChange={handleCheckboxChange}
                      className="form-checkbox h-5 w-5 text-blue-600"
                    />
                    <label
                      className=" w-full lg:w-2/12 text-blueGray-600 text-xs font-bold m-2"
                      htmlFor="delivered"
                    >
                      Shipment Already Delivered
                    </label>{" "}
                  </div>
                </div>
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="deliveredOn"
                  >
                    Delivered On
                  </label>
                  <div className="w-full lg:w-6/12">
                    <input
                      type="datetime-local"
                      id="deliveredOn"
                      name="deliveredOn"
                      value={formData.deliveredOn}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
          {title == "Vendor Credits" && (
            <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
              <form onSubmit={handleSubmit}>
                <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
                  New Vendor Credits
                </h6>

                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="Vendor-name"
                  >
                    Vendor Name
                  </label>
                  <div className="w-full lg:w-6/12 relative">
                    <div className="relative">
                      <div
                        id="customer-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">
                          Select or add a vendor
                        </span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              version="1.1"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 512 512"
                              className="icon icon-sm"
                            >
                              <path
                                fill="#FFF"
                                d="M421 97C365.3 4 244.4-26.3 151.5 29.4S28.3 205.9 83.9 298.8c49.5 82.6 150.5 115.7 237.5 83l66.3 110.7c10 16.7 31.7 22.1 48.4 12.1 16.7-10 22.1-31.7 12.1-48.4L382 345.6c70-61.4 88.4-166 39-248.6zm-85.6 239.5c-76.4 45.8-175.8 20.8-221.6-55.6S93 105.1 169.4 59.3 345.2 38.5 391 114.9s20.8 175.8-55.6 221.6z"
                              ></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Branch Field */}
                <div className="flex flex-wrap mb-6 px-4">
                  <label
                    className="block w-full lg:w-2/12 text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="branch"
                  >
                    Branch
                  </label>
                  <div className="w-full lg:w-4/12 relative">
                    <div className="relative">
                      <div
                        id="branch-dropdown"
                        className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full flex items-center"
                      >
                        <span className="flex-grow">Head Office</span>
                        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
                          <button
                            className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-600 focus:outline-none"
                            type="button"
                          >
                            <svg
                              id="Layer_2"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 374.98 227.51"
                              className="icon icon-sm"
                            >
                              <path d="M187.46 227.51c-10.23 0-20.46-3.9-28.27-11.71L11.73 68.45C-3.9 52.83-3.91 27.51 11.71 11.88c15.62-15.63 40.94-15.64 56.57-.02l119.18 119.09L306.69 11.72c15.62-15.62 40.95-15.62 56.57 0 15.62 15.62 15.62 40.95 0 56.57L215.75 215.8c-7.81 7.81-18.05 11.72-28.28 11.72z"></path>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      Source Of Supply:{" "}
                      <span className="text-dark">Karnataka</span>
                    </p>
                  </div>
                </div>

                {/* /////////////////////////////////////// */}
                <div className="">
                  {/* Primary Contact Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Credit Note#
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/*  Company Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Order Number
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>
                  {/* Customer Display Name */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Vendor Credit Date
                    </label>
                    <input
                      type="date"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  {/*  Customer Numb */}
                  <div className="w-full lg:w-6/12 px-4 mb-3">
                    <label
                      className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                      htmlFor="name"
                    >
                      Subject
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    />
                  </div>

                  <div className="w-full px-4 mb-3">
                    <NestedTable
                      column={NestedColums}
                      data={colums}
                      title="Items Table"
                      canAdd={true}
                    />
                  </div>
                </div>

                <div className="flex justify-end">
                  <button
                    className="bg-red-500 active:bg-red-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="button"
                  >
                    Cancel
                  </button>
                  <button
                    className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      {/* <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-blueGray-100 border-0">
        <div className="rounded-t bg-white mb-0 px-6 py-6">
          <div className="text-center flex justify-between">
            <h6 className="text-blueGray-700 text-xl font-bold">ITEM</h6>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150"
              type="button"
            >
              Settings
            </button>
          </div>
        </div>
        <div className="flex-auto px-4 lg:px-10 py-10 pt-0">
          <form>
            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              User Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Username
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="lucky.jesse"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Email address
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="jesse@example.com"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Lucky"
                  />
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Jesse"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              Contact Information
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Bld Mihail Kogalniceanu, nr. 8 Bl 1, Sc 1, Ap 09"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    City
                  </label>
                  <input
                    type="email"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="New York"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="United States"
                  />
                </div>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    defaultValue="Postal Code"
                  />
                </div>
              </div>
            </div>

            <hr className="mt-6 border-b-1 border-blueGray-300" />

            <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
              About Me
            </h6>
            <div className="flex flex-wrap">
              <div className="w-full lg:w-12/12 px-4">
                <div className="relative w-full mb-3">
                  <label
                    className="block uppercase text-blueGray-600 text-xs font-bold mb-2"
                    htmlFor="grid-password"
                  >
                    About me
                  </label>
                  <textarea
                    type="text"
                    className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
                    rows="4"
                    defaultValue="A beautiful UI Kit and Admin for NextJS & Tailwind CSS. It is Free
                    and Open Source."
                  ></textarea>
                </div>
              </div>
            </div>
            <button
              className="bg-blueGray-700 active:bg-blueGray-600 text-white font-bold uppercase text-xs px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none mr-1 ease-linear transition-all duration-150 float-right"
              type="button"
            >
              Create
            </button>
          </form>
        </div>
      </div> */}
    </>
  );
}
