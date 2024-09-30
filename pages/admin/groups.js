import React, { useCallback, useState, useEffect } from "react";
import { useCartStore } from "../../store/store";

// components
import CardTable from "components/Cards/CardTable.js";

import CardSettings from "components/Cards/CardSettings.js";
import CardProfile from "components/Cards/CardProfile.js";
import axios from "axios";

// layout for page

import Admin from "layouts/Admin.js";

export default function Settings() {
  const [addItems, setAddItems] = useState(false);

  const [groups, setGroups] = useState([]);

  // const groups = useCartStore((store) => store.groups);
  // const setGroups = useCartStore((store) => store.setGroups);

  const onItemsClick = useCallback((val) => {
    setAddItems(val);
  }, []);

  const addItem = useCallback((data) => {
    setGroups(data);
  }, []);
  const tableColums = {
    NAME: "name",
    SKU: "sku",
    DESCRIPTION: "des",
  };

  const formFields = {
    name: "",
    sku: "",
    des: "",
  };

  const fetchGroups = async () => {
    axios
      .get("http://localhost:8001/tally/groups")
      .then((response) => {
        // Handle the successful response
        console.log("Data fetched:", response.data);
        setGroups(response?.data?.data);
      })
      .catch((error) => {
        // Handle the error
        console.error("Error fetching data:", error);
      });
  };

  useEffect(() => {
    fetchGroups();
  }, []);

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
            data={groups}
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
