import React, { useState } from "react";

import Modal from "react-modal";
import BreedImage from "../BreedImage/BreedImage";

Modal.setAppElement("#root");

export default function BreedModal() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="App">
      <button onClick={toggleModal}>Open modal</button>

      <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog
        <BreedImage/>

        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal>
    </div>
  );
}
