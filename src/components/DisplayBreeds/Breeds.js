import React, {useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import "./Breeds.css"
import Modal from "react-modal";
import BreedImage from "../BreedImage/BreedImage";
import { getBreeds } from '../../redux/actions/actions';


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

    const dispatch = useDispatch();

    function toggleModal() {
        setIsOpen(!isOpen);
        

    }

    useEffect(() => {
        dispatch(getBreeds())
       
      }, [])

 

    return (

        <div className="breedContainer" >
            {breeds.map((breed, i) => (
                <div>
                    <Link className="breedButton" onClick={toggleModal} to={`/${breed}/images`}>
                        <h1 className=" breedButton breedsList" key={i}>{breed.charAt(0).toUpperCase() + breed.slice(1)}</h1>
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
                    <Link className="breedButton" onClick={toggleModal} to={`/`}>
                        <button >Close</button>
                    </Link>
               
                </div>
            </Modal>
        </div>
    );

};

export default Breeds