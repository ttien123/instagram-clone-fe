import Avatar from 'src/components/Avatar';
import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
import Dialog from 'src/components/Dialog';
import { useEffect, useMemo, useState } from 'react';
import Button from 'src/components/Button';
import InputFile from 'src/components/InputFile';
import ImgCreatePost from 'src/assets/ImgCreatePost';
import ImageOrVideoCrop from 'src/components/ImageOrVideoCrop';
import IconClose from 'src/assets/IconClose';
import * as Slider from '@radix-ui/react-slider';
import getCroppedImg, { blobToFile } from 'src/utils/crop/CropImage';

const AvatarProfile = () => {
    const [open, setIsOpen] = useState(false);
    const [openCropAvatar, setIsOpenCropAvatar] = useState(false);
    const [fileList, setFileList] = useState<File>();
    const [zoomValue, setZoomValue] = useState(1);
    const [croppedArea, setCroppedArea] = useState({
        width: 0,
        height: 0,
        x: 0,
        y: 0,
    });

    const handleChangeFile = (fileList: FileList | null) => {
        fileList && setFileList(fileList[0]);
    };
    const previewImage = useMemo(() => {
        // URL.createObjectURL(file) để tạo 1 URL cho ảnh đc tải lên và có thể show nó ra để preview
        return fileList ? URL.createObjectURL(fileList) : '';
    }, [fileList]);

    const handleChangeZoom = (value: number[]) => {
        setZoomValue(value[0]);
    };

    const handleCloseCropImg = () => {
        setIsOpenCropAvatar(false);
        setZoomValue(1);
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { file, url } = await getCroppedImg(previewImage, croppedArea);
        const newFile = blobToFile(file, 'cropped.jpg');
        console.log(newFile, url);
    };

    useEffect(() => {
        if (!openCropAvatar) {
            setFileList(undefined);
        }
    }, [openCropAvatar]);
    return (
        <Dialog
            isOpen={open}
            isBtnClose={!openCropAvatar}
            extendsClassName="z-[100]"
            setIsOpen={setIsOpen}
            renderPopover={
                <div className="w-[400px] bg-white text-center rounded-2xl">
                    <div className="text-[20px] mx-8 pt-5 mb-4">Change Profile Photo</div>
                    <Dialog
                        isOpen={openCropAvatar}
                        setIsOpen={setIsOpenCropAvatar}
                        isBtnClose
                        extendsClassName="z-[100]"
                        renderPopover={
                            <div className="w-[700px] max-w-[100vw] rounded-2xl h-[600px]">
                                <form
                                    className=" flex items-center rounded-2xl justify-center bg-white w-full h-full"
                                    onSubmit={handleSubmit}
                                >
                                    {!previewImage ? (
                                        <div className="md:w-[489px] w-full h-[489px] p-6 flex items-center justify-center flex-col">
                                            <div>
                                                <ImgCreatePost />
                                            </div>
                                            <h5 className="text-[20px] text-black font-normal mt-4 mb-6">
                                                Drag photo here
                                            </h5>
                                            <div>
                                                <InputFile onChange={handleChangeFile} />
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="flex-1 h-full">
                                            <div className="h-[50px] mb-4 w-full border-b border-b-separator flex items-center justify-between px-4">
                                                <h3 className="flex-1 text-[16px] font-medium">Chọn ảnh đại diện</h3>
                                                <button onClick={handleCloseCropImg} className="p-2">
                                                    <IconClose />
                                                </button>
                                            </div>
                                            <div className="w-full overflow-hidden  flex h-[420px] items-center justify-center">
                                                <div className="w-[300px] relative h-[300px] p-6 flex items-center justify-center flex-col">
                                                    <ImageOrVideoCrop
                                                        isShowOverFlow
                                                        url={previewImage}
                                                        setImageAvatarUrl={setCroppedArea}
                                                        cropShape="round"
                                                        isShowGrid={false}
                                                        aspectInit={1 / 1}
                                                        type="image"
                                                        cropInit={{ x: 0, y: 0 }}
                                                        croppedAreaInit={croppedArea}
                                                        zoomInit={zoomValue}
                                                    />
                                                </div>
                                            </div>
                                            <div className="mt-4 pb-4 border-b border-b-separator">
                                                <div className="mx-auto bg-btnSlide px-2 w-[400px] flex items-center justify-center rounded-lg">
                                                    <Slider.Root
                                                        className="relative flex items-center select-none touch-none w-[400px] h-5"
                                                        min={1}
                                                        max={2}
                                                        step={0.1}
                                                        value={[zoomValue]}
                                                        onValueChange={handleChangeZoom}
                                                    >
                                                        <Slider.Track className="bg-black relative grow rounded-full h-[2px]">
                                                            <Slider.Range className="absolute bg-white rounded-full h-full" />
                                                        </Slider.Track>
                                                        <Slider.Thumb
                                                            className="block w-4 h-4 bg-white shadow-[0_2px_10px] shadow-blackA4 rounded-[10px]"
                                                            aria-label="Volume"
                                                        />
                                                    </Slider.Root>
                                                </div>
                                            </div>
                                            <div className="text-right px-4 py-2">
                                                <Button
                                                    type="button"
                                                    onClick={handleCloseCropImg}
                                                    isOnlyText
                                                    extendsClassName="mr-4 p-2"
                                                >
                                                    Hủy
                                                </Button>
                                                <Button type="submit" isbgButton extendsClassName="px-8">
                                                    Lưu
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </form>
                            </div>
                        }
                    >
                        <Button
                            isOnlyText
                            extendsClassName="font-semibold h-[48px] border-t border-t-separator block w-full"
                        >
                            Upload Photo
                        </Button>
                    </Dialog>
                    <Button extendsClassName="font-semibold text-error-or-destructive h-[48px] border-t border-t-separator block w-full">
                        Remove Current Photo
                    </Button>
                    <Button extendsClassName="font-normal h-[48px] border-t border-t-separator block w-full">
                        Cancel
                    </Button>
                </div>
            }
        >
            <button className="block w-[77px] md:w-[150px] h-[77px] md:h-[150px] mx-auto">
                <Avatar src={avatar} />
            </button>
        </Dialog>
    );
};

export default AvatarProfile;
