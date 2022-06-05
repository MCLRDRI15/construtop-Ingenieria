import { Portal } from "@HOC";

interface MainModalProps {
  showModal: boolean;
  children: JSX.Element;
  handleClose: Function;
  id: string;
}

const MainModal = ({
  showModal,
  children,
  handleClose,
  id,
}: MainModalProps) => {
  let closeModal = false;
  return (
    <>
      {showModal ? (
        <Portal>
          <div
            className={
              closeModal
                ? "fixed z-50 h-full top-0 right-0 w-full 2xl:w-1/5 overflow-auto"
                : "fixed z-50 h-full top-0 right-0 w-full 2xl:w-1/5 overflow-auto"
            }
            id={id}
            onClick={() => {
              setTimeout(() => {
                handleClose();
              }, 400);
              !closeModal;
            }}
          >
            <div
              className={[
                "fixed z-50 h-full top-0 right-0 overflow-auto w-modal 2xl:w-1/5",
              ].join(" ")}
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              {children}
            </div>
          </div>
        </Portal>
      ) : null}
    </>
  );
};

export default MainModal;
