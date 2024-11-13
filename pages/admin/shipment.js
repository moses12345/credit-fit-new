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

export default function Shipment() {
  const [addItems, setAddItems] = useState(false);

  const items = [
    {
      date: "2024-07-01",
      shipment_order_number: "SO1234",
      customer_name: "Alice Johnson",
      sales_order_number: "SO1001",
      package_number: "PKG001",
      carrier: "FedEx",
      tracking_number: "1234567890",
      status: "Shipped",
    },
    {
      date: "2024-07-02",
      shipment_order_number: "SO1235",
      customer_name: "Bob Brown",
      sales_order_number: "SO1002",
      package_number: "PKG002",
      carrier: "UPS",
      tracking_number: "0987654321",
      status: "In Transit",
    },
    {
      date: "2024-07-03",
      shipment_order_number: "SO1236",
      customer_name: "Charlie Smith",
      sales_order_number: "SO1003",
      package_number: "PKG003",
      carrier: "DHL",
      tracking_number: "1122334455",
      status: "Delivered",
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
    "SHIPMENT ORDER#": "shipment_order_number",
    "CUSTOMER NAME": "customer_name",
    "SALES ORDER#": "sales_order_number",
    "PACKAGE#": "package_number",
    CARRIER: "carrier",
    "TRACKING#": "tracking_number",
    STATUS: "status",
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
            title={"Shipment"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Shipment"
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

Shipment.layout = Admin;
