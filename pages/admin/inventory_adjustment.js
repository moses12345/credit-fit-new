import React, { useCallback, useState, useEffect } from "react";
import { useCartStore } from "../../store/store";

// components
import CardTable from "components/Cards/CardTable.js";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  const [addItems, setAddItems] = useState(false);

  const inventory_adjustment = useCartStore(
    (store) => store.inventory_adjustment
  );
  const setInventoryAdjustment = useCartStore(
    (store) => store.setInventoryAdjustment
  );

  const onItemsClick = useCallback((val) => {
    setAddItems(val);
  }, []);

  const addItem = useCallback((data) => {
    setInventoryAdjustment(data);
  }, []);

  //  type: "",
  // date: "",
  // account: "",
  // referenceNumber: "",
  // quantityAvailable: 0,
  // newQuantityOnHand: 0,
  // quantityAdjusted: "",
  // costPrice: "",
  // reason: "",
  // description: "",
  const tableColums = {
    Date: "date",
    Reason: "reason",
    Status: "status",
    Type: "type",
  };

  const formFields = {
    name: "",
    sku: "",
    des: "",
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full  px-4">
          <CardSettings
            title={"Groups"}
            addItems={addItems}
            onItemsSave={onItemsClick}
            addItem={addItem}
            formFields={formFields}
          />
          <CardTable
            title="Groups"
            data={inventory_adjustment}
            tableColums={tableColums}
            addItems={addItems}
            onItemsSave={onItemsClick}
          />
        </div>
        <div className="w-full lg:w-4/12 px-4">{/* <CardProfile /> */}</div>
      </div>
    </>
  );
}

Settings.layout = Admin;
