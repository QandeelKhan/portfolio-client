import React, { useCallback, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "./crop";
import "./crop.css";

interface EasyCropProps {
    image: string | null;
    onSave?: (croppedImg: string) => void;
    onCancel?: () => void;
    onRotationChange?: (rotation: number) => void;
    onZoomChange?: (zoom: number) => void;
    rotation?: number;
    zoom?: number;
}

const EasyCrop: React.FC<EasyCropProps> = ({
    image,
    onSave,
    onCancel,
    onRotationChange,
    onZoomChange,
}) => {
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<any>(null);
    const [zoom, setZoom] = useState<number>(1);
    const [rotation, setRotation] = useState<number>(0);
    const [croppedImage, setCroppedImage] = useState<string | null>(null);

    const onCropComplete = useCallback(
        (croppedArea: any, croppedAreaPixels: any) => {
            setCroppedAreaPixels(croppedAreaPixels);
        },
        []
    );

    const handleSave = async () => {
        try {
            if (image && croppedAreaPixels) {
                const croppedImg = await getCroppedImg(
                    image,
                    croppedAreaPixels,
                    rotation
                );
                setCroppedImage(croppedImg);
                onSave && onSave(croppedImg || "");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const handleClose = () => {
        onCancel && onCancel();
    };

    return (
        // <div className="cropper-modal fixed top-0 left-0 flex flex-col items-center justify-center w-full h-full bg-black bg-opacity-70 z-50">
        <div className="container">
            <div className="crop-container">
                <Cropper
                    image={image || ""}
                    crop={crop}
                    rotation={rotation}
                    zoom={zoom}
                    zoomSpeed={0.1}
                    maxZoom={3}
                    zoomWithScroll={true}
                    showGrid={true}
                    aspect={4 / 4}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={onZoomChange}
                    onRotationChange={onRotationChange}
                    cropShape="round"
                />
                <div className="controls-container">
                    <div>
                        <label className="font-bold">
                            Rotate:
                            <input
                                type="range"
                                value={rotation}
                                min={0}
                                max={360}
                                step={0.1}
                                aria-label="rotate"
                                onChange={(e) =>
                                    setRotation(Number(e.target.value))
                                }
                                className="range"
                            />
                        </label>
                    </div>
                    <div>
                        <label className="font-bold">
                            Zoom:
                            <input
                                type="range"
                                value={zoom}
                                min={1}
                                max={3}
                                step={0.1}
                                aria-label="zoom"
                                onChange={(e) =>
                                    setZoom(Number(e.target.value))
                                }
                                className="range"
                            />
                        </label>
                    </div>
                    <div className="model-buttons">
                        <button className="save" onClick={handleSave}>
                            Save{" "}
                            <i className="text-white text-xl cursor-pointer fas fa-check" />
                        </button>
                        <button className="cancel" onClick={handleClose}>
                            Cancel{" "}
                            <i className="text-white text-xl cursor-pointer fas fa-cancel" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EasyCrop;

type CropModelProps = {
    modelChildren?: React.ReactNode;
    active?: boolean; // Add active prop
};

export const CropModel: React.FC<CropModelProps> = ({
    modelChildren,
    active,
}) => {
    return (
        <div className={`model-cropper ${active ? "active" : ""}`}>
            {modelChildren}
        </div>
    );
};
