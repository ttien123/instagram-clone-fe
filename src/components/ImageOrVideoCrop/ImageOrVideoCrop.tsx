import { useEffect, useState } from 'react';
import Cropper, { Point } from 'react-easy-crop';
import { initImageOrVideoUrl } from 'src/layouts/HomeLayout/components/CreatePost/CreatePost';

interface Props extends initImageOrVideoUrl {
    aspectInit: number;
    setImageOrVideoUrl: React.Dispatch<React.SetStateAction<initImageOrVideoUrl[]>>;
    isShowDescription?: boolean;
}

export interface CroppedArea {
    width: number;
    height: number;
    x: number;
    y: number;
}

const ImageOrVideoCrop = ({
    aspectInit,
    cropInit,
    type,
    url,
    zoomInit,
    croppedAreaInit,
    setImageOrVideoUrl,
    isShowDescription,
}: Props) => {
    const [croppedArea, setCroppedArea] = useState(croppedAreaInit);
    const [crop, setCrop] = useState(cropInit);
    const [zoom, setZoom] = useState(zoomInit);
    const onCropComplete = (_: any, croppedAreaPixels: CroppedArea) => {
        // isShowDescription && setCrop(cropInit);

        setCroppedArea(croppedAreaPixels);
    };

    const handleSetZoom = (zoom: number) => {
        setZoom(zoom);
    };
    const handleCrop = (location: Point) => {
        // if (aspectInit !== 16 / 9 && !isShowDescription) {
        if (!isShowDescription) {
            setCrop(location);
        }
        // } else {
        // setCrop({ x: 0, y: 0 });
        // setZoom(1);
        // }
        // setImageOrVideoUrl((prev) => {
        //     const lastArray = prev;
        //     const newArray = lastArray.map((item) => {
        //         if (item.url === url) {
        //             return { ...item, cropInit: location };
        //         }
        //         return item;
        //     });

        //     return newArray;
        // });
    };

    useEffect(() => {
        setZoom(zoomInit);
    }, [zoomInit]);

    useEffect(() => {
        setImageOrVideoUrl((prev) => {
            const lastArray = prev;
            const newArray = lastArray.map((item) => {
                if (item.url === url) {
                    return { ...item, croppedAreaInit: croppedArea };
                }
                return item;
            });

            return newArray;
        });
    }, [croppedArea]);

    return (
        <div className="max-w-none">
            {type.includes('image') ? (
                <Cropper
                    zoomWithScroll={false}
                    objectFit="cover"
                    style={{ mediaStyle: { maxWidth: `${aspectInit !== 16 / 9 ? 'none' : '100%'}` } }}
                    showGrid={!isShowDescription}
                    image={url}
                    crop={crop}
                    zoom={zoom}
                    minZoom={1}
                    maxZoom={2}
                    aspect={aspectInit}
                    onCropChange={handleCrop}
                    onZoomChange={handleSetZoom}
                    onCropComplete={onCropComplete}
                />
            ) : (
                <Cropper
                    zoomWithScroll={false}
                    objectFit="cover"
                    style={{
                        mediaStyle: {
                            maxWidth: `${aspectInit !== 16 / 9 ? 'none' : '100%'}`,
                        },
                    }}
                    video={url}
                    showGrid={!isShowDescription}
                    crop={crop}
                    zoom={zoom}
                    minZoom={1}
                    maxZoom={2}
                    aspect={aspectInit}
                    onCropChange={handleCrop}
                    onZoomChange={handleSetZoom}
                    onCropComplete={onCropComplete}
                />
            )}
        </div>
    );
};

export default ImageOrVideoCrop;
