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
      credit_note_number: "CN1234",
      reference_number: "REF1234",
      customer_name: "Alice Johnson",
      invoice_number: "INV1001",
      status: "Issued",
      amount: "$100",
      balance: "$100",
    },
    {
      date: "2024-07-02",
      credit_note_number: "CN1235",
      reference_number: "REF1235",
      customer_name: "Bob Brown",
      invoice_number: "INV1002",
      status: "Applied",
      amount: "$50",
      balance: "$50",
    },
    {
      date: "2024-07-03",
      credit_note_number: "CN1236",
      reference_number: "REF1236",
      customer_name: "Charlie Smith",
      invoice_number: "INV1003",
      status: "Expired",
      amount: "$200",
      balance: "$200",
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
    "CREDIT NOTE#": "credit_note_number",
    "REFERENCE NUMBER": "reference_number",
    CUSTOMERNAME: "customer_name",
    "INVOICE#": "invoice_number",
    STATUS: "status",
    AMOUNT: "amount",
    BALANCE: "balance",
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
        <div className="w-full">
          <CardSettings
            title={"Credit Note"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Credit Notes"
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
