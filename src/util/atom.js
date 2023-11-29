import { atom } from "recoil";

export const isModalOpen = atom({
  key: "isModalOpen",
  default: false,
});

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});
