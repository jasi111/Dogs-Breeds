import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getBreedImage, removeClickedBreed } from '../../redux/actions/actions';
import "./BreedImage.css";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';


const BreedImage = () => {
    const breed = useSelector((state) => state.breedImage.breed);
    const dispatch = useDispatch();

    const { breedName } = useParams();

    useEffect(() => {
        if (breedName && breedName !== "") dispatch(getBreedImage(breedName));
           return () => {
               dispatch(removeClickedBreed());
           }
       
    }, [breedName])


    return (
        <div className="breedImageContainer">


            <ImageList className="breeImageGallery" sx={{ width: 500, height: 450 }} cols={5} rowHeight={164}>
                {breed.map((getBreed, i) => (
                    <div key={i}>
                    <ImageListItem>
                        <img
                            src={getBreed}
                            loading="lazy"
                        />
                    </ImageListItem>
                    </div>

                ))}
            </ImageList>
        </div>




    )
}

export default BreedImage