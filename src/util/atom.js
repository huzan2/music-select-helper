import { atom } from "recoil";

export const isModalOpen = atom({
  key: "isModalOpen",
  default: false,
});

export const isLoggedIn = atom({
  key: "isLoggedIn",
  default: false,
});

export const userDataState = atom({
  key: "userData",
  default: {
    memberId: 0,
    name: "name",
  },
});
