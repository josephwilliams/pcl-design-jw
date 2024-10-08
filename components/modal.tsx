import React from "react";
import Modal from "react-modal";

const ModalComponent = ({
  children,
  isOpen,
  onRequestClose,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  onRequestClose: () => void;
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="Example Modal"
      style={{
        overlay: {
          backgroundColor: "rgba(0, 0, 0, 0.75)",
        },
        content: {
          color: "lightsteelblue",
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        },
      }}
    >
      <h2>Modal</h2>
      <button onClick={onRequestClose}>Close</button>
      {children}
    </Modal>
  );
};

export default ModalComponent;
