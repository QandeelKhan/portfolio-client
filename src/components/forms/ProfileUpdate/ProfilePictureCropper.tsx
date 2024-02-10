//         onCropComplete(croppedImage);
const createImage = (url: string): Promise<HTMLImageElement> => {
    return new Promise((resolve, reject) => {
        const img = new Image();
        // img.crossOrigin = "Anonymous";

        img.addEventListener("load", () => resolve(img));
        img.addEventListener("error", (error) => reject(error));
        // img.setAttribute("crossOrigin", "anonymous");
        img.src = url;
    });
};

export const getRadianAngle = (degreeValue: number): number => {
    return (degreeValue * Math.PI) / 180;
};

export function rotateSize(width: any, height: any, rotation: any) {
    const rotRad = getRadianAngle(rotation);

    return {
        width:
            Math.abs(Math.cos(rotRad) * width) +
            Math.abs(Math.sin(rotRad) * height),
        height:
            Math.abs(Math.sin(rotRad) * width) +
            Math.abs(Math.cos(rotRad) * height),
    };
}

export const getCroppedImg = async (
    imageSrc: string,
    croppedAreaPixels?: any,
    flip = { horizontal: false, vertical: false },
    rotation = 0
) => {
    // const img = new Image();
    // img.src = imageSrc;
    const img = await createImage(imageSrc);
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    if (!ctx) {
        return null;
    }

    const rotRad = getRadianAngle(rotation);

    // calculate bounding box of the rotated image
    const { width: bBoxWidth, height: bBoxHeight } = rotateSize(
        img.width,
        img.height,
        rotation
    );

    // set canvas size to match the bounding box
    canvas.width = bBoxWidth;
    canvas.height = bBoxHeight;

    // translate canvas context to a central location to allow rotating and flipping around the center
    ctx.translate(bBoxWidth / 2, bBoxHeight / 2);
    ctx.rotate(rotRad);
    ctx.scale(flip.horizontal ? -1 : 1, flip.vertical ? -1 : 1);
    ctx.translate(-img.width / 2, -img.height / 2);

    // draw rotated image
    ctx.drawImage(img, 0, 0);

    // croppedAreaPixels values are bounding box relative
    // extract the cropped image using these values
    const data = ctx.getImageData(
        croppedAreaPixels.x,
        croppedAreaPixels.y,
        croppedAreaPixels.width,
        croppedAreaPixels.height
    );

    // set canvas width to final desired crop size - this will clear existing context
    canvas.width = croppedAreaPixels.width;
    canvas.height = croppedAreaPixels.height;

    // paste generated rotated image at the top left corner
    ctx.putImageData(data, 0, 0);

    return new Promise<string>((resolve, reject) => {
        canvas.toBlob((blob) => {
            if (!blob) {
                reject(new Error("Canvas is empty"));
                return;
            }
            resolve(URL.createObjectURL(blob));
        }, "image/jpeg");
    });
};

import React, { useState, useCallback } from "react";
import Cropper from "react-easy-crop";
import "./crop.css";

interface ImageCropperProps {
    imageSrc: string;
    aspect: number;
    onCropComplete: (croppedArea: any, croppedAreaPixels: any) => void;
}

const ImageCropper: React.FC<ImageCropperProps> = ({
    imageSrc,
    aspect,
    onCropComplete: cropComplete,
}) => {
    const [crop, setCrop] = useState<any>({ x: 0, y: 0 });
    const [rotation, setRotation] = useState<number>(0);
    const [zoom, setZoom] = useState<number>(1);

    const handleCropChange = useCallback((newCrop: any) => {
        setCrop(newCrop);
    }, []);

    const handleRotationChange = useCallback((newRotation: number) => {
        setRotation(newRotation);
    }, []);

    const handleZoomChange = useCallback((newZoom: number) => {
        setZoom(newZoom);
    }, []);

    return (
        <div>
            <div className="crop-container">
                <Cropper
                    image={imageSrc}
                    crop={crop}
                    cropSize={{ width: 400, height: 400 }}
                    rotation={rotation}
                    zoom={zoom}
                    aspect={aspect}
                    onCropChange={setCrop}
                    onRotationChange={setRotation}
                    onCropComplete={cropComplete}
                    onZoomChange={handleZoomChange}
                    cropShape="round"
                />
            </div>
            <div className="controls flex justify-center">
                <input
                    type="range"
                    value={zoom}
                    min={1}
                    max={3}
                    step={0.1}
                    aria-labelledby="Zoom"
                    onChange={(e: any) => {
                        setZoom(e.target.value);
                    }}
                    className="zoom-range"
                />
                <input
                    type="range"
                    value={rotation}
                    min={0}
                    max={360}
                    step={0.1}
                    aria-labelledby="Rotation"
                    onChange={(e: any) => {
                        setRotation(e.target.value);
                    }}
                    className="zoom-range"
                />
            </div>
        </div>
    );
};

export default ImageCropper;

// const ImageCropper: React.FC<ImageCropperProps> = ({
//     imageSrc,
//     onCropComplete,
// }) => {
//     const [crop, setCrop] = useState({ x: 0, y: 0 });
//     const [zoom, setZoom] = useState(1);

//     const onCropCompleted = async (
//         croppedArea: any,
//         croppedAreaPixels: any
//     ) => {
//         // assuming no rotation,
//         const croppedImage = await getCroppedImg(imageSrc, croppedAreaPixels, 0);
//         onCropComplete(croppedImage);
//     };

//     // Function to convert cropped image data to a file
//     const getCroppedImg = async (imageSrc: string, croppedAreaPixels: any, rotation:number) => {
//         const img = new Image();
//         // img.crossOrigin = "Anonymous";
//         img.src = imageSrc;
//         const canvas = document.createElement("canvas");
//         canvas.width = croppedAreaPixels.width;
//         canvas.height = croppedAreaPixels.height;
//         const ctx = canvas.getContext("2d");

//         if (ctx) {
//             ctx.drawImage(
//                 img,
//                 croppedAreaPixels.x,
//                 croppedAreaPixels.y,
//                 croppedAreaPixels.width,
//                 croppedAreaPixels.height,
//                 0,
//                 0,
//                 croppedAreaPixels.width,
//                 croppedAreaPixels.height
//             );

//             return new Promise<string>((resolve, reject) => {
//                 canvas.toBlob((blob) => {
//                     if (!blob) {
//                         reject(new Error("Canvas is empty"));
//                         return;
//                     }
//                     resolve(URL.createObjectURL(blob));
//                 }, "image/jpeg");
//             });
//         } else {
//             return Promise.reject(new Error("Canvas context is missing"));
//         }
//     };
// ---------------------------------
//     // Function to convert cropped image data to a file
//     const getCroppedImg = async (
//         imageSrc: string,
//         croppedAreaPixels: any,
//         rotation: number
//     ) => {
//         const image = new Image();
//         image.crossOrigin = "Anonymous";
//         image.src = imageSrc;
//         const canvas = document.createElement("canvas");
//         const ctx = canvas.getContext("2d");

//         // Get the width of the image
//         var imageWidth = Math.max(1, Math.floor(image.width));
//         // Get the maximum dimension of the image
//         const maxSize = Math.max(imageWidth, image.height);
//         // Get the safe area for the image to rotate
//         // This is the diagonal length of the image, multiplied by 2
//         const safeArea = 2 * ((maxSize / 2) * Math.sqrt(2));

//         // set each dimensions to double largest dimension to allow for a safe area for the
//         // image to rotate in without being clipped by canvas context
//         canvas.width = safeArea;
//         canvas.height = safeArea;

//         // translate canvas context to a central location on image to allow rotating around the center.
//         ctx!.translate(safeArea / 2, safeArea / 2);
//         ctx!.rotate((rotation * Math.PI) / 180);
//         ctx!.translate(-safeArea / 2, -safeArea / 2);

//         // draw rotated image and store data.
//         ctx!.drawImage(
//             image,
//             safeArea / 2 - image.width * 0.5,
//             safeArea / 2 - image.height * 0.5
//         );
//         const data = ctx!.getImageData(0, 0, safeArea, safeArea);

//         // set canvas width to final desired crop size - this will clear existing context
//         canvas.width = croppedAreaPixels.width;
//         canvas.height = croppedAreaPixels.height;

//         // paste generated rotate image with correct offsets for x,y crop values.
//         ctx!.putImageData(
//             data,
//             Math.round(
//                 0 - safeArea / 2 + image.width * 0.5 - croppedAreaPixels.x
//             ),
//             Math.round(
//                 0 - safeArea / 2 + image.height * 0.5 - croppedAreaPixels.y
//             )
//         );

//         // As Base64 string
//         // return canvas.toDataURL('image/jpeg');

//         // As a blob
//         return new Promise<string>((resolve, reject) => {
//             canvas.toDataURL("image/jpeg", (dataUrl: string) => {
//                 resolve(dataUrl);
//             });
//         });
//     };

// Function to convert data URL to file object
// const dataURLtoFile = (dataurl: string, filename: string) => {
//     let arr = dataurl.split(","),
//         mime = arr[0].match(/:(.*?);/)![1],
//         bstr = atob(arr[1]),
//         n = bstr.length,
//         u8arr = new Uint8Array(n);

//     while (n--) {
//         u8arr[n] = bstr.charCodeAt(n);
//     }

//     return new File([u8arr], filename, { type: mime });
// };
