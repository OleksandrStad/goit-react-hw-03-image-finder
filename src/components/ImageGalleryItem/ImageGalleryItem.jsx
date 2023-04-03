import React from "react";
import { GalleryItem, GalleryItemImage } from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({ images }) => {
    return (

        <GalleryItem>
            <GalleryItemImage src={images.webformatURL} alt="" />
        </GalleryItem>

    )
};