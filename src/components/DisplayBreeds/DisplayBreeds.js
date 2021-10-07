import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { getBreeds } from '../../redux/actions/actions';
import Breeds from './Breeds';

import Modal from "react-modal";
import BreedImage from '../BreedImage/BreedImage';

Modal.setAppElement("#root");
const DisplayBreeds = () => {
  const [isOpen, setIsOpen] = useState(false);

  const breeds = useSelector((state) => state);
  const dispatch = useDispatch();

  function toggleModal() {
    setIsOpen(!isOpen);
  }

  useEffect(() => {
    dispatch(getBreeds())
  }, [])

  return (
    <div>
      <Breeds />
      {/* <Modal
        isOpen={isOpen}
        onRequestClose={toggleModal}
        contentLabel="My dialog"
      >
        <div>My modal dialog
          <BreedImage />

        </div>
        <button onClick={toggleModal}>Close modal</button>
      </Modal> */}
    </div>
  )
}

export default DisplayBreeds