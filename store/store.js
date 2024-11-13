import { create } from "zustand";
import { persist, createJSONStorage, devtools } from "zustand/middleware";

// inital data
const GROUPS = [
  {
    name: "hello",
    sku: "cool",
    des: "this is decition",
  },
  {
    name: "hello",
    sku: "cool",
    des: "this is decition",
  },
  {
    name: "hello",
    sku: "cool",
    des: "this is decition",
  },
];

const ITEMS = [
  {
    name: "hello",
    sku: "cool",
    des: "this is decition",
    purchase_des: "cool purchase",
    rate: "1",
    purchase_rate: "1",
    stock_in_hand: "10",
    usage_unit: "pcs",
    status: "Active",
  },
  {
    name: "hello1",
    sku: "cool",
    des: "this is decition",
    purchase_des: "cool purchase",
    rate: "1",
    purchase_rate: "1",
    stock_in_hand: "10",
    usage_unit: "pcs",
    status: "Active",
  },
  {
    name: "hello2",
    sku: "cool",
    des: "this is decition",
    purchase_des: "cool purchase",
    rate: "1",
    purchase_rate: "1",
    stock_in_hand: "10",
    usage_unit: "pcs",
    status: "Active",
  },
];
//////////////
export const useCartStore = create(
  persist(
    (set) => ({
      groups: GROUPS,
      items: ITEMS,
      cart: 0,
      inventory_adjustment: [],
      login: false,
      userData: {},
      setGroups: (data) =>
        set((state) => ({ groups: [data, ...state.groups] })),
      setItems: (data) => set((state) => ({ items: [data, ...state.items] })),
      setInventoryAdjustment: (data) =>
        set((state) => ({
          inventory_adjustment: [data, ...state.inventory_adjustment],
        })),
      add: () => set((state) => ({ cart: state.cart + 1 })),
      remove: () => set((state) => ({ cart: state.cart - 1 })),
      removeAll: () => set({ login: false, userData: {} }),
      setLogin: (data) =>
        set((state) => ({
          login: data,
        })),
      setUserData: (data) =>
        set((state) => ({
          userData: data,
        })),
    }),
    {
      name: "auth-storage", // Unique name for local storage
      partialize: (state) => ({
        login: state.login,
        userData: state.userData,
      }),
    }
  )
);
