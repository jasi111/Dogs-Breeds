import React, { Suspense, lazy, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Breeds.css"
import Modal from "react-modal";
import BreedImage from "../BreedImage/BreedImage";
Modal.setAppElement("#root");

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        backgroundColor: 'rgba(241, 248, 241, 0.8)'
    },
};

const Breeds = () => {
    const [isOpen, setIsOpen] = useState(false);

    const breeds = useSelector((state) => state.breedList.breeds);

    function toggleModal() {
        setIsOpen(!isOpen);
    }


    return (

        <div className="breedContainer" >

            {breeds.map((breed, i) => (

                <div key={i}>
                    <Link className="breedButton" onClick={toggleModal} to={`/${breed}/images`}>
                        <h1 className=" breedButton breedsList" key={i}>{breed}</h1>
                    </Link>
                </div>
            ))}

            <Modal
                isOpen={isOpen}
                onRequestClose={toggleModal}
                style={customStyles}
                contentLabel="My dialog"
            >
                <div>
                    <BreedImage />
                </div>
                <div className="modalButton">
                    <button  onClick={toggleModal}>Close modal</button>
                </div>
            </Modal>





        </div>
    );

};

export default Breeds;