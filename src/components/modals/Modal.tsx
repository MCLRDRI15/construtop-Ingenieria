import React from "react";
import { XIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import Image from "next/image";

interface MainModalProps {
  showModal: boolean;
  handleClose: Function;
  setCloseModal: Function;
  id: string;
}

const Modal = ({
  showModal,
  handleClose,
  id,
  setCloseModal,
}: MainModalProps) => {
  let closeModal = false;
  const item = useSelector<any, any>((state) => state.globalReducer.item);
  return (
    <>
      {showModal ? (
        <div
          className="w-full h-full fixed top-0 left-0 z-50 flex items-center justify-center overflow-auto"
          style={{ background: "rgba(0,0,0,.5)" }}
          id={id}
          onClick={() => {
            setTimeout(() => {
              handleClose();
            }, 400);
            !closeModal;
          }}
        >
          <div
            className="my-20 bg-white relative border shadow-xl"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <div className="bg-white border-gray-200 border-2 h-full p-2 text-center">
              <div className="flex content-between mt-1">
                <span className="text-center font-serif text-xl text-red-800">
                  {item.title}
                </span>
                <XIcon
                  className="w-4 cursor-pointer text-gray-light ml-auto  font-black"
                  onClick={() => setCloseModal(false)}
                />
              </div>

              <div className="mt-4 relative w-[90vw] max-w-[800px] h-auto mx-auto">
                {item.image && (
                  <Image
                    width={0}
                    height={0}
                    src={item.image}
                    sizes="100vw"
                    alt="Obras civiles"
                    className="rounded-lg z-10 absolute overflow-hidden object-cover"
                  />
                )}
              </div>
              <div className="w-full p-3 border bg-gray-200 border-gray-300 rounded-b-xl">
                <span className="text-md font-serif"> {item.description ?  `${item.description} - ${item.id}` : `Evidencias - ${item.id}`} </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Modal;
