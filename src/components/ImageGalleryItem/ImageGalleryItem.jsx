import React from "react";
import PropTypes from 'prop-types';
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ images }) => {
    return (

        <GalleryItem>
            <GalleryItemImage src={images.webformatURL} alt="" />
        </GalleryItem>

    )
};


ImageGalleryItem.propTypes = {
    images: PropTypes.object.isRequired,
    // openModal: PropTypes.func.isRequired,
};