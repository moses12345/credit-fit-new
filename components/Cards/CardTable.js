import React, { useState } from "react";
import PropTypes from "prop-types";
import FormAdjustment from "./FormAdjustment";
import ShowInfo from "./ShowInfo";
import NestedTable from "./NestedTable";

// components

import TableDropdown from "components/Dropdowns/TableDropdown.js";

const Td = ({ dataum, col, color }) => {
  const tds = col.map((data) => dataum[data]);
  return (
    <>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          src="/img/bootstrap.jpg"
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
        ></img>{" "}
        <span
          className={
            "ml-3 font-bold " +
            +(color === "light" ? "text-blueGray-600" : "text-white")
          }
        >
          {tds[0]}
        </span>
      </th>
      {tds.slice(1).map((d) => (
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          {d}
        </td>
      ))}
    </>
  );
};

const TdEdit = ({ dataum, col, color }) => {
  const tds = col.map((data) => dataum[data]);
  return (
    <>
      <th className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-left flex items-center">
        <img
          src="/img/bootstrap.jpg"
          className="h-12 w-12 bg-white rounded-full border"
          alt="..."
        ></img>{" "}
        <select
          id="purchase-account"
          name="purchaseAccount"
          className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
        >
          <option value="cost-of-goods-sold">Items</option>
        </select>
      </th>
      {tds.slice(1).map((d) => (
        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4">
          <input className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150" />
        </td>
      ))}
    </>
  );
};

export default function CardTable({
  title,
  color,
  tableColums,
  data,
  addItems,
  onItemsSave,
  NestedTablePresent,
  addAble,
}) {
  const [Colums, setColums] = useState(Object.keys(tableColums));
  const [values, setvalues] = useState(Object.values(tableColums));
  const [adjustStockForm, setAdjustStockForm] = useState(false);

  const [item, setItem] = useState(null);

  const onClickItem = (data) => {
    setItem(data);
    setColums(["NAME", "RATE"]);
    setvalues(["name", "rate"]);
  };

  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const openAdjustForm = () => {
    setAdjustStockForm(!adjustStockForm);
  };

  const NestedColums = {
    NAME: "name",
    SKU: "sku",
    DESCRIPTION: "des",
    "PURCHASE DESCRIPTION": "purchase_des",
  };

  return (
    <>
      {!addItems && (
        <div className={item != null && "card-table-grid"}>
          <div
            className={
              "col-span-2  relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded " +
              (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
            }
          >
            <div className="rounded-t mb-0 px-4 py-3 border-0">
              <div className="flex flex-wrap items-center">
                <div className="relative w-full px-4 max-w-full flex justify-between flex-grow flex-1">
                  <h3
                    className={
                      "font-semibold text-lg " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                  >
                    {title}
                  </h3>
                  <h3
                    className={
                      "font-semibold text-lg cursor-pointer " +
                      (color === "light" ? "text-blueGray-700" : "text-white")
                    }
                    onClick={onItemsSave}
                  >
                    Add {title} +
                  </h3>
                </div>
              </div>
            </div>
            <div className="block w-full overflow-x-auto">
              {/* Projects table */}
              <table className="items-center w-full bg-transparent border-collapse">
                <thead>
                  <tr>
                    {Colums.map((data) => (
                      <th
                        className={
                          "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                          (color === "light"
                            ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                            : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                        }
                      >
                        {data}
                      </th>
                    ))}
                    <th
                      className={
                        "px-6 align-middle border border-solid py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left " +
                        (color === "light"
                          ? "bg-blueGray-50 text-blueGray-500 border-blueGray-100"
                          : "bg-blueGray-600 text-blueGray-200 border-blueGray-500")
                      }
                    ></th>
                  </tr>
                </thead>
                <tbody>
                  {data.length > 0 &&
                    data.map((datum) => (
                      <tr
                        className="hover:bg-gray-500"
                        onClick={() => {
                          if (!addAble) {
                            onClickItem(datum);
                          }
                        }}
                      >
                        {addAble ? (
                          <TdEdit dataum={datum} col={values} color={color} />
                        ) : (
                          <Td dataum={datum} col={values} color={color}></Td>
                        )}
                        <td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 text-right">
                          <TableDropdown />
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          {item != null && (
            <div
              className={
                "col-span-8 relative flex flex-col min-w-0 break-words w-full h-screen overflow-y-scroll mb-6 px-3 shadow-lg rounded " +
                (color === "light" ? "bg-white" : "bg-blueGray-700 text-white")
              }
            >
              <div className="content-column" id="item-details-content">
                <div className="header flex justify-between items-center border-b border-gray-200 py-3">
                  <h3 className="text-xl font-semibold">
                    <span>{item.name}</span>
                  </h3>
                  <div className="flex gap-2">
                    <button className="icon-button btn btn-secondary p-2">
                      {/* Icon button content can be added here */}
                    </button>
                    <button
                      className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                      onClick={openAdjustForm}
                    >
                      Adjust Stock
                    </button>
                    <div className="relative">
                      <button
                        className="btn btn-secondary"
                        onClick={toggleDropdown}
                      >
                        More
                      </button>
                      {showDropdown && (
                        <div className="dropdown-menu absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg">
                          <button className="dropdown-item px-4 py-2 w-full text-left">
                            Clone Item
                          </button>
                          <button className="dropdown-item px-4 py-2 w-full text-left">
                            Mark as Inactive
                          </button>
                          <button className="dropdown-item px-4 py-2 w-full text-left">
                            Delete
                          </button>
                        </div>
                      )}
                    </div>
                    <button className="icon-button close-entity close-details ms-4 p-2">
                      {/* Close button content can be added here */}
                    </button>
                  </div>
                </div>
                <div className="flex border-b border-gray-200 relative gap-2">
                  <h6>Overview</h6>
                  <h6>Transactions</h6>
                  <h6>History</h6>
                </div>
                {adjustStockForm ? (
                  <FormAdjustment itemData={item} />
                ) : (
                  <>
                    <ShowInfo item={item} sidepane={true} />
                    hello
                    {NestedTablePresent && (
                      <NestedTable
                        column={NestedColums}
                        data={[]}
                        title="Adjustment Items"
                      />
                    )}
                  </>
                )}
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
}

CardTable.defaultProps = {
  color: "light",
};

CardTable.propTypes = {
  color: PropTypes.oneOf(["light", "dark"]),
};
