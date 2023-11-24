import { atom } from "recoil";

export const modalState = atom({
  key: "modalState",
  default: {
    isOpen: false,
    title: "",
    content: () => {},
    callback: () => {},
  },
});

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});
