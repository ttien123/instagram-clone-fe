import { useEffect, useState } from 'react';
import ImgCreatePost from 'src/assets/ImgCreatePost';
import InputFile from 'src/components/InputFile';
import SwiperPost from 'src/components/SwiperPost/SwiperPost';
import Button from 'src/components/Button';
import IconBack from 'src/assets/IconBack';
import getCroppedImg, { blobToFile } from 'src/utils/crop/CropImage';
import Dialog from 'src/components/Dialog';
import IconLoading from 'src/assets/IconLoading';
import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
import Input from 'src/components/Input';
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import EmojiIcons from 'src/components/EmojiIcons';
import WriteDescription from 'src/components/WriteDescription';
import ArrowIcon from 'src/assets/ArrowLeft';

export interface initImageOrVideoUrl {
    url: string;
    type: string;
    cropInit: {
        x: number;
        y: number;
    };
    croppedAreaInit: {
        width: number;
        height: number;
        x: number;
        y: number;
    };
    zoomInit: number;
}

const initImageOrVideoUrl: initImageOrVideoUrl[] = [];

const CreatePost = () => {
    const [chosenEmoji, setChosenEmoji] = useState<EmojiClickData>();
    const [descriptionPost, setDescriptionPost] = useState('');
    const [fileList, setFileList] = useState<FileList | null>();
    const [aspect, setAspect] = useState(16 / 9);
    const [isOpenDiscardPost, setIsOpenDiscardPost] = useState(false);
    const [imageOrVideoUrl, setImageOrVideoUrl] = useState(initImageOrVideoUrl);
    const [listFilePost, setListFilePost] = useState<File[]>([]);
    const [listUrlCropped, setListUrlCropped] = useState<initImageOrVideoUrl[]>([]);
    const [isConvertCropped, setIsConvertCropped] = useState(false);
    const [isShowDescription, setIsShowDescription] = useState(false);
    // console.log(listFilePost, listUrlCropped);

    console.log(listUrlCropped);

    const handleCrop = async () => {
        setIsConvertCropped(true);
        try {
            if (imageOrVideoUrl.length > 0) {
                for (const item of imageOrVideoUrl) {
                    if (item.type.includes('image')) {
                        const { file, url } = await getCroppedImg(item.url, item.croppedAreaInit);
                        const newFile = blobToFile(file, 'cropped.jpg');
                        setListFilePost((prev) => [...prev, newFile]);
                        setListUrlCropped((prev) => [
                            ...prev,
                            {
                                url: url,
                                type: newFile.type,
                                cropInit: item.cropInit,
                                croppedAreaInit: item.croppedAreaInit,
                                zoomInit: 1,
                            },
                        ]);
                    } else {
                        setListUrlCropped((prev) => [
                            ...prev,
                            {
                                url: item.url,
                                type: item.type,
                                cropInit: item.cropInit,
                                croppedAreaInit: item.croppedAreaInit,
                                zoomInit: item.zoomInit,
                            },
                        ]);
                    }
                }
            }
            setIsShowDescription(true);
            setIsConvertCropped(false);
        } catch {}
    };

    const handleChangeFile = (file: FileList | null) => {
        setFileList(file);
    };

    const handleDiscardPost = () => {
        setFileList(null);
        setIsOpenDiscardPost(false);
    };

    const handleChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        if (e.target.value.length <= 2200) {
            setDescriptionPost(e.target.value);
        }
    };

    useEffect(() => {
        if (descriptionPost.length < 2200 && chosenEmoji) {
            setDescriptionPost((prev) => prev + chosenEmoji?.emoji);
        }
    }, [chosenEmoji]);

    useEffect(() => {
        if (fileList) {
            const newArray = Array.from(fileList).map((item) => ({
                url: URL.createObjectURL(item),
                type: item.type,
                cropInit: { x: 0, y: 0 },
                croppedAreaInit: {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0,
                },
                zoomInit: 1,
            }));
            setImageOrVideoUrl(newArray);
        } else {
            setImageOrVideoUrl([]);
            setListFilePost([]);
            setListUrlCropped([]);
        }
    }, [fileList]);
    return (
        <div
            className={`relative ${
                listUrlCropped.length > 0 && !isConvertCropped ? 'md:w-[829px]' : 'w-[489px] max-w-[100vw]'
            } transition-all duration-300 md:h-[532px] bg-white flex items-center justify-center flex-col rounded-xl`}
        >
            <div
                className={`flex-1 w-full flex items-center font-semibold border-b px-2 border-b-separator ${
                    !fileList ? 'justify-center' : 'justify-between'
                }`}
            >
                {fileList && !isShowDescription && (
                    <Dialog
                        isOpen={isOpenDiscardPost}
                        setIsOpen={setIsOpenDiscardPost}
                        extendsClassName="z-[100]"
                        renderPopover={
                            <div className="w-[400px] h-[202px] bg-white z-[100] rounded-xl font-medium text-center text-[14px]">
                                <div className="px-8 pt-8 pb-4">
                                    <h2 className="text-[20px]">Discard post?</h2>
                                    <span className="text-secondary-text">
                                        If you leave, your edits won't be saved.
                                    </span>
                                </div>
                                <div className="mt-1">
                                    <div className="min-h-[48px] px-1 py-2 flex items-center justify-center border-t border-b border-b-secondary-button-hover border-t-secondary-button-hover">
                                        <button
                                            onClick={handleDiscardPost}
                                            className="text-error-or-destructive font-semibold w-full"
                                        >
                                            Discard
                                        </button>
                                    </div>
                                    <div className="min-h-[48px] px-1 py-2 flex items-center justify-center">
                                        <button className="w-full" onClick={() => setIsOpenDiscardPost(false)}>
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        }
                    >
                        <button className="p-2">
                            <IconBack />
                        </button>
                    </Dialog>
                )}
                {isShowDescription && listUrlCropped && (
                    <button
                        onClick={() => {
                            setIsShowDescription(false);
                            setListUrlCropped([]);
                        }}
                        className="p-2"
                    >
                        <IconBack />
                    </button>
                )}
                <h3 className="">Create new post</h3>
                {fileList && !isConvertCropped && !(listUrlCropped.length > 0) ? (
                    <Button onClick={handleCrop} isOnlyText extendsClassName="p-2">
                        Next
                    </Button>
                ) : isConvertCropped ? (
                    <div className="mr-1 w-[18px] h-[18px] animate-loading-icon">
                        <IconLoading />
                    </div>
                ) : (
                    listUrlCropped.length > 0 && (
                        <Button onClick={() => console.log(descriptionPost)} isOnlyText extendsClassName="p-2">
                            Share
                        </Button>
                    )
                )}
            </div>
            <div className="flex items-center justify-center relative w-full">
                {!fileList ? (
                    <div className="md:w-[489px] w-full h-[489px] p-6 flex items-center justify-center flex-col">
                        <div>
                            <ImgCreatePost />
                        </div>
                        <h5 className="text-[20px] text-black font-normal mt-4 mb-6">Drag photos and videos here</h5>
                        <div>
                            <InputFile onChange={handleChangeFile} />
                        </div>
                    </div>
                ) : (
                    <div
                        className={`${
                            isShowDescription ? 'hidden md:flex' : 'flex'
                        } h-[489px] relative w-full md:w-auto items-center justify-center`}
                    >
                        <div className="md:w-[489px] w-full flex items-center justify-center  bg-[#FAFAFA]">
                            <div
                                className={`${aspect === 4 / 5 ? 'w-[391px]' : 'w-[489px]'} ${
                                    aspect === 4 / 3 ? 'h-[366px]' : 'h-[489px]'
                                }  overflow-hidden flex items-center justify-center`}
                            >
                                <SwiperPost
                                    listUrlCropped={listUrlCropped}
                                    isShowDescription={isShowDescription}
                                    ImageOrVideoUrl={imageOrVideoUrl}
                                    setImageOrVideoUrl={setImageOrVideoUrl}
                                    aspect={aspect}
                                    setAspect={setAspect}
                                />
                            </div>
                        </div>
                    </div>
                )}
                {listUrlCropped.length > 0 && !isConvertCropped && isShowDescription && (
                    <div className="w-[340px] h-full border-l border-l-secondary-button-hover px-4">
                        <div className="mt-[18px] mb-[14px] flex items-center">
                            <div className="w-[28px] h-[28px] rounded-[50%] overflow-hidden mr-3 ">
                                <img src={avatar} alt="avatar" className="block h-full " />
                            </div>
                            <h5 className="font-medium">t.tien_01</h5>
                        </div>
                        <div className="relative">
                            <form>
                                <WriteDescription descriptionPost={descriptionPost} onChange={handleChangeInput} />
                            </form>
                            <div className="flex items-center justify-between h-[44px]">
                                <div>
                                    <EmojiIcons setChosenEmoji={setChosenEmoji} />
                                </div>
                                <div className="text-tertiary-text text-[12px]">
                                    {descriptionPost.length || 0}/2,200
                                </div>
                            </div>
                            <div className="flex items-center py-2 px-[14px] justify-between border-t border-t-separator">
                                <div className="text-[16px]">Something</div>
                                <div className="rotate-180">
                                    <ArrowIcon width={16} height={16} />
                                </div>
                            </div>
                            <div className="flex items-center py-2 px-[14px] justify-between border-t  border-t-separator ">
                                <div className="text-[16px]">Accessibility</div>
                                <div className="rotate-180">
                                    <ArrowIcon width={16} height={16} />
                                </div>
                            </div>
                            <div className="flex items-center py-2 px-[14px] justify-between border-t border-b border-t-separator border-b-separator">
                                <div className="text-[16px]">Advanced settings</div>
                                <div className="rotate-180">
                                    <ArrowIcon width={16} height={16} />
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CreatePost;
