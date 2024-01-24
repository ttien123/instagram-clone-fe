import { useState } from 'react';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination, EffectFade, Navigation } from 'swiper/modules';
import * as Slider from '@radix-ui/react-slider';
import ImageOrVideoCrop from '../ImageOrVideoCrop';
import DropDown from '../DropDown';
import listAspect from 'src/constants/listAspect';
import classNames from 'classnames';
import IconAspect from 'src/assets/IconAspect';
import IconZoom from 'src/assets/IconZoom';
import { initImageOrVideoUrl } from 'src/layouts/HomeLayout/components/CreatePost/CreatePost';

import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';

interface Props {
    ImageOrVideoUrl: initImageOrVideoUrl[];
    aspect: number;
    setAspect: React.Dispatch<React.SetStateAction<number>>;
    setImageOrVideoUrl: React.Dispatch<React.SetStateAction<initImageOrVideoUrl[]>>;
    listUrlCropped: initImageOrVideoUrl[];
    isShowDescription: boolean;
}

const SwiperPost = ({
    ImageOrVideoUrl,
    aspect,
    setAspect,
    setImageOrVideoUrl,
    listUrlCropped,
    isShowDescription,
}: Props) => {
    const [swiperSlide, setSwiperSlide] = useState(0);
    const [isOpenAspect, setIsOpenAspect] = useState(false);
    const [isOpenZoom, setIsOpenZoom] = useState(false);
    const handleChangeZoom = (value: number[]) => {
        setImageOrVideoUrl((prev) => {
            const lastArray = prev;
            const newArray = lastArray.map((item, index) => {
                if (index === swiperSlide) {
                    return { ...item, zoomInit: value[0] };
                }
                return item;
            });

            return newArray;
        });
    };

    return (
        <Swiper
            effect={'fade'}
            navigation
            pagination={true}
            slidesPerView={1}
            speed={0}
            allowTouchMove={false}
            modules={[Pagination, EffectFade, Navigation]}
            className="w-full h-full swiperPost"
            style={{ position: 'unset' }}
            onSlideChange={(swiper) => {
                setSwiperSlide(swiper.activeIndex);
            }}
        >
            {listUrlCropped.length > 0 &&
                listUrlCropped.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className={`h-[489px] ${aspect === 16 / 9 && '!h-[275px]'} ${
                                aspect === 4 / 3 && '!h-[366px]'
                            }`}
                        >
                            <ImageOrVideoCrop
                                {...item}
                                isShowDescription={isShowDescription}
                                aspectInit={aspect}
                                setImageOrVideoUrl={setImageOrVideoUrl}
                            />
                        </SwiperSlide>
                    );
                })}
            {!(listUrlCropped.length > 0) &&
                ImageOrVideoUrl.map((item, index) => {
                    return (
                        <SwiperSlide
                            key={index}
                            className={`h-[390px] md:h-[489px] w-full ${aspect === 16 / 9 && '!h-[275px]'} ${
                                aspect === 4 / 3 && '!h-[366px]'
                            } `}
                        >
                            <ImageOrVideoCrop {...item} aspectInit={aspect} setImageOrVideoUrl={setImageOrVideoUrl} />
                        </SwiperSlide>
                    );
                })}
            {!(listUrlCropped.length > 0) && (
                <DropDown
                    isOpen={isOpenAspect}
                    setIsOpen={setIsOpenAspect}
                    classNameRender=" !translate-x-0 bottom-16 !left-16 md:!left-4 !top-[unset] !translate-y-0 z-50"
                    renderPopover={
                        <div className="w-[120px] bg-btnSlide rounded-lg">
                            {listAspect.map((item, index) => (
                                <div
                                    key={index}
                                    className=" border-b h-[48px] border-b-white last:border-b-0 cursor-pointer "
                                >
                                    <div
                                        onClick={() => setAspect(item.value)}
                                        className="flex items-center justify-start font-medium px-1 ml-3 text-secondary-text"
                                    >
                                        <div
                                            className={classNames('', {
                                                'text-white': aspect === item.value,
                                            })}
                                        >
                                            {item.aspect}
                                        </div>
                                        <div
                                            className={classNames(
                                                'w-[48px] h-[48px] p-2 flex items-center justify-center',
                                                {
                                                    'text-white': aspect === item.value,
                                                },
                                            )}
                                        >
                                            {item.imgIcon}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    }
                >
                    <div
                        className={`${
                            isOpenAspect ? 'bg-white text-black' : 'bg-btnSlide text-white'
                        } absolute bottom-4 left-16 md:left-4 rounded-[50%] shadow-popoverShadow cursor-pointer z-50 w-[32px] h-[32px] flex items-center justify-center `}
                    >
                        <IconAspect />
                    </div>
                </DropDown>
            )}
            {!(listUrlCropped.length > 0) && (
                <DropDown
                    isOpen={isOpenZoom}
                    setIsOpen={setIsOpenZoom}
                    classNameRender=" !translate-x-0 bottom-16 !left-32 md:!left-16 !top-[unset] !translate-y-0 z-50 w-[148px] h-[48px] p-2"
                    renderPopover={
                        <div className=" bg-btnSlide px-2 h-full flex items-center justify-center rounded-lg">
                            <Slider.Root
                                className="relative flex items-center select-none touch-none w-[200px] h-5"
                                min={1}
                                max={2}
                                step={0.1}
                                value={
                                    ImageOrVideoUrl && ImageOrVideoUrl?.length > 0
                                        ? [ImageOrVideoUrl[swiperSlide].zoomInit]
                                        : [1]
                                }
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
                    }
                >
                    <div
                        className={`${
                            isOpenAspect ? 'bg-white text-black' : 'bg-btnSlide text-white'
                        } absolute bottom-4 left-32 md:left-16 rounded-[50%] shadow-popoverShadow cursor-pointer z-50 w-[32px] h-[32px] flex items-center justify-center `}
                    >
                        <IconZoom />
                    </div>
                </DropDown>
            )}
        </Swiper>
    );
};

export default SwiperPost;
