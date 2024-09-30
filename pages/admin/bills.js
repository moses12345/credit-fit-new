import React, { useCallback, useState } from "react";
import { useCartStore } from "../../store/store";
// components
import CardTable from "components/Cards/CardTable.js";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import NestedTable from "components/Cards/NestedTable";

// layout for page

import Admin from "layouts/Admin.js";

const NestedColums = {
  NAME: "name",
  SKU: "sku",
  DESCRIPTION: "des",
  "PURCHASE DESCRIPTION": "purchase_des",
};

export default function SalesOrder() {
  const [addItems, setAddItems] = useState(false);

  const items = [
    {
      date: "2024-07-01",
      bill_number: "BILL1234",
      reference_number: "REF1234",
      vendor_name: "Acme Supplies",
      status: "Unpaid",
      due_date: "2024-07-15",
      amount: "$2000",
      balance_due: "$2000",
    },
    {
      date: "2024-07-02",
      bill_number: "BILL1235",
      reference_number: "REF1235",
      vendor_name: "Global Traders",
      status: "Partially Paid",
      due_date: "2024-07-16",
      amount: "$1500",
      balance_due: "$500",
    },
    {
      date: "2024-07-03",
      bill_number: "BILL1236",
      reference_number: "REF1236",
      vendor_name: "Quality Goods",
      status: "Paid",
      due_date: "2024-07-10",
      amount: "$750",
      balance_due: "$0",
    },
  ];
  const setItems = useCartStore((store) => store.setItems);

  const onItemsClick = useCallback((val) => {
    setAddItems(val);
  }, []);

  const addItem = useCallback(
    (data) => {
      setItems(data);
    },
    [items]
  );
  const tableColums = {
    DATE: "date",
    "BILL#": "bill_number",
    "REFERENCE NUMBER": "reference_number",
    "VENDOR NAME": "vendor_name",
    STATUS: "status",
    "DUE DATE": "due_date",
    AMOUNT: "amount",
    "BALANCE DUE": "balance_due",
  };

  const formFields = {
    type: "",
    name: "",
    sku: "",
    unit: "",
    hsnCode: "",
    taxPreference: "taxable",
    group: "",
    sellingPrice: "",
    salesAccount: "sales",
    costPrice: "",
    purchaseAccount: "cost-of-goods-sold",
    purchaseDescription: "",
    preferredVendor: "",
    inventory: false,
    inventory_account: "Inventory Asset",
    opening_stock: "",
    opening_stock_price: "",
  };
  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardSettings
            title={"Bills"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Bills"
            data={items}
            tableColums={tableColums}
            // addItems={addItems}
            onItemsSave={onItemsClick}
            NestedTablePresent={true}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">{/* <CardProfile /> */}</div>
      </div>
    </>
  );
}

SalesOrder.layout = Admin;
