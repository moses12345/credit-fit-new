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

export default function Vendors() {
  const [addItems, setAddItems] = useState(false);

  const items = [
    {
      name: "Alice Johnson",
      company_name: "Tech Solutions",
      email: "alice@techsolutions.com",
      work_phone: "555-123-4567",
      payables: "$1000",
      unused_credits: "$300",
    },
    {
      name: "Bob Brown",
      company_name: "Innovative Designs",
      email: "bob@innovativedesigns.com",
      work_phone: "555-987-6543",
      payables: "$1500",
      unused_credits: "$100",
    },
    {
      name: "Charlie Smith",
      company_name: "Creative Co.",
      email: "charlie@creativeco.com",
      work_phone: "555-456-7890",
      payables: "$750",
      unused_credits: "$50",
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
    NAME: "name",
    "COMPANY NAME": "company_name",
    EMAIL: "email",
    "WORK PHONE": "work_phone",
    PAYABLES: "payables",
    "UNUSED CREDITS": "unused_credits",
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
            title={"Vendors"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Vendors"
            data={items}
            tableColums={tableColums}
            addItems={addItems}
            onItemsSave={onItemsClick}
            NestedTablePresent={true}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">{/* <CardProfile /> */}</div>
      </div>
    </>
  );
}

Vendors.layout = Admin;
