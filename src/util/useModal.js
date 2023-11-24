import { useRecoilState } from "recoil";
import { modalState } from "./atom";
import { useCallback } from "react";

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);
  const closeModal = useCallback(
    () =>
      setModalDataState((prev) => {
        return { ...prev, isOpen: false };
      }),
    [setModalDataState]
  );

  const openModal = useCallback(
    ({ title, content, callback }) =>
      setModalDataState({
        isOpen: true,
        title: title,
        content: content,
        callback: callback,
      }),
    [setModalDataState]
  );
  return { modalDataState, closeModal, openModal };
};
