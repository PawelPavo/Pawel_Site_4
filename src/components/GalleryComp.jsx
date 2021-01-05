import React from 'react';
import Lightbox from 'react-image-lightbox';
import { FiCamera } from "react-icons/fi"


// const images = [
//     '//placekitten.com/1500/500',
//     '//placekitten.com/4000/3000',
//     '//placekitten.com/800/1200',
//     '//placekitten.com/1500/1500',
// ];

function GalleryComp({photos}) {

    const [isOpen, setOpen] = React.useState(false);
    const [photoIndex, setPhotoIndex] = React.useState(0);

    const handleClick = () => {
        setOpen(!isOpen)
    }

    const handleNext = () => {
        setPhotoIndex((photoIndex + 1) % photos.length)
    }

    const handlePrev = () => {
        setPhotoIndex((photoIndex + photos.length - 1) % photos.length)
    }

    return (
        <>
            <div>
                <div onClick={handleClick}>
                    <FiCamera />
                </div>

                {isOpen && (
                    <Lightbox
                        mainSrc={photos[photoIndex]}
                        nextSrc={photos[(photoIndex + 1) % photos.length]}
                        prevSrc={photos[(photoIndex + photos.length - 1) % photos.length]}
                        onCloseRequest={handleClick}
                        onMovePrevRequest={handlePrev}
                        onMoveNextRequest={handleNext}
                    />
                )}
            </div>
        </>
    )

}

export default GalleryComp;