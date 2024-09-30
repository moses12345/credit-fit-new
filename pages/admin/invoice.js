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
      invoice_number: "INV1234",
      order_number: "ORD5678",
      customer_name: "Alice Johnson",
      status: "Pending",
      due_date: "2024-07-15",
      amount: "$500",
      balance_due: "$250",
    },
    {
      date: "2024-07-02",
      invoice_number: "INV1235",
      order_number: "ORD5679",
      customer_name: "Bob Brown",
      status: "Paid",
      due_date: "2024-07-16",
      amount: "$300",
      balance_due: "$0",
    },
    {
      date: "2024-07-03",
      invoice_number: "INV1236",
      order_number: "ORD5680",
      customer_name: "Charlie Smith",
      status: "Overdue",
      due_date: "2024-07-10",
      amount: "$200",
      balance_due: "$200",
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
    "INVOICE#": "invoice_number",
    "ORDER NUMBER": "order_number",
    CUSTOMERNAME: "customer_name",
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
            title={"Invoice"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Invoice"
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
