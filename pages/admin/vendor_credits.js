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

export default function VendorCredits() {
  const [addItems, setAddItems] = useState(false);

  const items = [
    {
      date: "2024-07-01",
      credit_note_number: "CN1234",
      reference_number: "REF1234",
      vendor_name: "Acme Supplies",
      status: "Issued",
      amount: "$200",
      balance: "$200",
    },
    {
      date: "2024-07-02",
      credit_note_number: "CN1235",
      reference_number: "REF1235",
      vendor_name: "Global Traders",
      status: "Applied",
      amount: "$150",
      balance: "$0",
    },
    {
      date: "2024-07-03",
      credit_note_number: "CN1236",
      reference_number: "REF1236",
      vendor_name: "Quality Goods",
      status: "Expired",
      amount: "$300",
      balance: "$300",
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
    "VENDOR NAME": "vendor_name",
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
            title={"Vendor Credits"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Vendor Credits"
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

VendorCredits.layout = Admin;
