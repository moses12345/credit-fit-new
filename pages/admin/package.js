import React, { useCallback, useState } from "react";
import { useCartStore } from "../../store/store";

import CardSettings from "components/Cards/CardSettings.js";
import CardKanbanBoard from "components/Cards/CardKanbanBoard.js";

// layout for page

import Admin from "layouts/Admin.js";

const NestedColums = {
  NAME: "name",
  SKU: "sku",
  DESCRIPTION: "des",
  "PURCHASE DESCRIPTION": "purchase_des",
};

export default function Package() {
  const [addItems, setAddItems] = useState(false);

  const items = useCartStore((store) => store.items);
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
    SKU: "sku",
    DESCRIPTION: "des",
    "PURCHASE DESCRIPTION": "purchase_des",
    RATE: "rate",
    "PURCHASE RATE": "purchase_rate",
    "STOCK ON HAND": "stock_in_hand",
    "USAGE UNIT": "usage_unit",
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
            title={"Package"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardKanbanBoard
            title="Package"
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

Package.layout = Admin;
