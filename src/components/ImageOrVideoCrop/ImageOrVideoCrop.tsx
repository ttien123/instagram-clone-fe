import { useEffect, useState } from 'react';
import Cropper, { Point } from 'react-easy-crop';
import { initImageOrVideoUrl } from 'src/layouts/HomeLayout/components/CreatePost/CreatePost';

interface Props extends initImageOrVideoUrl {
    aspectInit: number;
    setImageOrVideoUrl?: React.Dispatch<React.SetStateAction<initImageOrVideoUrl[]>>;
    setImageAvatarUrl?: React.Dispatch<
        React.SetStateAction<{
            width: number;
            height: number;
            x: number;
            y: number;
        }>
    >;
    isShowDescription?: boolean;
    isShowGrid?: boolean;
    isShowOverFlow?: boolean;
    cropShape?: 'rect' | 'round';
}

export interface CroppedArea {
    width: number;
    height: number;
    x: number;
    y: number;
}

const ImageOrVideoCrop = ({
    aspectInit,
    cropInit = { x: 0, y: 0 },
    type,
    url,
    zoomInit = 1,
    croppedAreaInit = {
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    },
    setImageAvatarUrl,
    setImageOrVideoUrl,
    isShowDescription,
    cropShape = 'rect',
    isShowGrid = !isShowDescription,
    isShowOverFlow = false,
}: Props) => {
    const [croppedArea, setCroppedArea] = useState(croppedAreaInit);
    const [crop, setCrop] = useState(cropInit);
    const [zoom, setZoom] = useState(zoomInit);
    const onCropComplete = (_: any, croppedAreaPixels: CroppedArea) => {
        !isShowDescription && setCroppedArea(croppedAreaPixels);
    };

    const handleSetZoom = (zoom: number) => {
        setZoom(zoom);
    };
    const handleCrop = (location: Point) => {
        if (!isShowDescription && type.includes('image')) {
            setCrop(location);
        }
        if (!isShowDescription && !type.includes('image')) {
            setCrop(cropInit);
        }
        if (aspectInit === 16 / 9 && !type.includes('image')) {
            setCrop({ x: 0, y: 0 });
        }
        setImageOrVideoUrl &&
            setImageOrVideoUrl((prev) => {
                const lastArray = prev;
                const newArray = lastArray.map((item) => {
                    if (item.url === url && !item.type.includes('image')) {
                        return { ...item, cropInit: location };
                    }
                    return item;
                });

                return newArray;
            });
    };

    useEffect(() => {
        setZoom(zoomInit);
    }, [zoomInit]);

    useEffect(() => {
        setImageOrVideoUrl &&
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

        setImageAvatarUrl && setImageAvatarUrl(croppedArea);
    }, [croppedArea]);

    return (
        <div className="max-w-none">
            {type.includes('image') ? (
                <Cropper
                    zoomWithScroll={false}
                    objectFit="cover"
                    style={{
                        mediaStyle: { maxWidth: `${aspectInit !== 16 / 9 ? 'none' : '100%'}` },
                        containerStyle: { overflow: `${isShowOverFlow ? 'visible' : 'hidden'}` },
                    }}
                    showGrid={isShowGrid}
                    image={url}
                    crop={crop}
                    cropShape={cropShape}
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
