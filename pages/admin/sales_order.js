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
      sales_order_number: "SO1234",
      reference_number: "REF1234",
      customer_name: "Alice Johnson",
      status: "Pending",
      amount: "$500",
      invoiced: "Yes",
      payment: "Paid",
    },
    {
      date: "2024-07-02",
      sales_order_number: "SO1235",
      reference_number: "REF1235",
      customer_name: "Bob Brown",
      status: "Completed",
      amount: "$300",
      invoiced: "Yes",
      payment: "Pending",
    },
    {
      date: "2024-07-03",
      sales_order_number: "SO1236",
      reference_number: "REF1236",
      customer_name: "Charlie Smith",
      status: "Shipped",
      amount: "$200",
      invoiced: "No",
      payment: "Paid",
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
    "SALES ORDER#": "sales_order_number",
    "REFERENCE#": "reference_number",
    CUSTOMERNAME: "customer_name",
    STATUS: "status",
    AMOUNT: "amount",
    INVOICED: "invoiced",
    PAYMENT: "payment",
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
            title={"Sales Order"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Sales Order"
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
