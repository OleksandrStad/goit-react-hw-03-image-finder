import React from "react";
import { ImageGalleryList } from './ImageGallery.styled'
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem'


export const ImageGallery = ({ images }) => {

    return (
        < ImageGalleryList >

            {images.map((el) => {
                return (
                    < ImageGalleryItem images={el} key={el.id} />
                );
            })}
        </ImageGalleryList >

    )

}


