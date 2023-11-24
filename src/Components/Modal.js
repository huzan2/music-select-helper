import { useModal } from "../util/useModal";
import { useRef } from "react";

const Modal = () => {
  const { modalDataState, closeModal } = useModal();
  const ref = useRef();
  return (
    <>
      {modalDataState.isOpen && (
        <div
          ref={ref}
          className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.4)] flex justify-center items-center"
          onClick={(e) => {
            if (e.target === ref.current) {
              closeModal();
            }
          }}
        >
          <div className="flex flex-col w-full h-1/3 max-w-sm bg-white rounded-lg">
            <p className="">{modalDataState.title}</p>
            <div>
              <modalDataState.content />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
