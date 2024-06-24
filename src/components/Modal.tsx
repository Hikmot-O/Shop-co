import React from "react";
type ModalProps = {
  children: React.ReactNode;
};

const Modal = (props: ModalProps) => {
  return (
    <div className="z-20 fixed h-full w-full bg-[#00000033]">{props.children}</div>
  );
};

export default Modal;
