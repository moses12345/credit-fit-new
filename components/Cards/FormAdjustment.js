import { useState, useEffect } from "react";
import { useCartStore } from "../../store/store";
import { useRouter } from "next/router";

const FormComponent = ({ itemData }) => {
  const router = useRouter();
  const setInventoryAdjustment = useCartStore(
    (store) => store.setInventoryAdjustment
  );
  const getCurrentDate = () => {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months start at 0!
    const dd = String(today.getDate()).padStart(2, "0");
    return `${yyyy}-${mm}-${dd}`;
  };

  const [formData, setFormData] = useState({
    type: "",
    date: "",
    account: "",
    referenceNumber: "",
    quantityAvailable: 0,
    newQuantityOnHand: 0,
    quantityAdjusted: "",
    costPrice: "",
    reason: "",
    description: "",
    status: "Adjustment",
  });

  useEffect(() => {
    setFormData({
      type: "quantity",
      date: getCurrentDate(),
      account: "Cost of Goods Sold",
      referenceNumber: "",
      quantityAvailable: parseInt(itemData?.stock_in_hand),
      newQuantityOnHand: parseInt(itemData?.stock_in_hand),
      quantityAdjusted: "",
      costPrice: "",
      reason: "",
      description: "",
      status: "Adjustment",
    });
  }, []);

  useEffect(() => {
    const adjustedQuantity = parseInt(formData.quantityAdjusted, 10) || 0;
    const newQuantityOnHand = formData.quantityAvailable + adjustedQuantity;
    setFormData((prevData) => ({
      ...prevData,
      newQuantityOnHand,
    }));
  }, [formData.quantityAdjusted]);

  useEffect(() => {
    const newQuantityOnHand =
      parseInt(formData.newQuantityOnHand, 10) || formData.quantityAvailable;
    const quantityAdjusted = newQuantityOnHand - formData.quantityAvailable;
    setFormData((prevData) => ({
      ...prevData,
      quantityAdjusted,
    }));
  }, [formData.newQuantityOnHand]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setInventoryAdjustment(formData);
    router.push("/admin/inventory_adjustment");
  };

  return (
    <div className="flex-auto px-4 lg:px-10 py-10 pt-0 h-screen">
      <form onSubmit={handleSubmit}>
        <h6 className="text-blueGray-400 text-sm mt-3 mb-6 font-bold uppercase">
          Adjustment Information
        </h6>
        <div className="flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Adjustment Type
            </label>
            <div className="flex items-center">
              <input
                type="radio"
                id="quantity"
                name="type"
                value="quantity"
                checked={formData.type === "quantity"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="quantity" className="mr-4">
                Quantity Adjustment
              </label>
              <input
                type="radio"
                id="value"
                name="type"
                value="value"
                checked={formData.type === "value"}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="value">Value Adjustment</label>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              placeholder="dd/MM/yyyy"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Account
            </label>
            <div className="relative">
              <select
                id="account"
                name="account"
                value={formData.account}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="Cost of Goods Sold">Cost of Goods Sold</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Reference Number
            </label>
            <input
              type="text"
              id="referenceNumber"
              name="referenceNumber"
              value={formData.referenceNumber}
              onChange={handleChange}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Quantity Available
            </label>
            <input
              type="text"
              id="quantityAvailable"
              name="quantityAvailable"
              value={formData.quantityAvailable}
              onChange={handleChange}
              disabled
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              New Quantity on Hand
            </label>
            <input
              type="text"
              id="newQuantityOnHand"
              name="newQuantityOnHand"
              value={formData.newQuantityOnHand}
              onChange={handleChange}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Quantity Adjusted
            </label>
            <input
              type="text"
              id="quantityAdjusted"
              name="quantityAdjusted"
              value={formData.quantityAdjusted}
              onChange={handleChange}
              placeholder="Eg. +10, -10"
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          <div className="w-full lg:w-6/12 px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Cost Price
            </label>
            <input
              type="text"
              id="costPrice"
              name="costPrice"
              value={formData.costPrice}
              onChange={handleChange}
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
            />
          </div>

          <div className="w-full px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Reason
            </label>
            <div className="relative">
              <select
                id="reason"
                name="reason"
                value={formData.reason}
                onChange={handleChange}
                className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              >
                <option value="" disabled>
                  Select a reason
                </option>
                <option value="reason1">Reason 1</option>
                <option value="reason2">Reason 2</option>
              </select>
              <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-700"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 9.293a1 1 0 011.414 0L10 12.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
          </div>

          <div className="w-full px-4 py-6 mb-3">
            <label className="block uppercase text-blueGray-600 text-xs font-bold mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Description here..."
              className="border-0 px-3 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150"
              rows="4"
            />
          </div>

          <div className="w-full px-4 py-6 mb-3">
            <button
              type="submit"
              className="bg-blueGray-800 text-white active:bg-blueGray-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Save
            </button>
            <button
              type="button"
              className="bg-white text-blueGray-700 active:bg-white-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormComponent;
