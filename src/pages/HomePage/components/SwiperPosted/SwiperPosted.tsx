import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Pagination, Navigation } from 'swiper/modules';

import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css';
import listImgPosted from 'src/mock/ListImgPosted';

interface Props {
    aspect: number;
}

const SwiperPosted = ({ aspect }: Props) => {
    return (
        <Swiper
            navigation
            pagination={true}
            slidesPerView={1}
            allowTouchMove={false}
            modules={[Pagination, Navigation]}
            className="swiperPosted w-full h-[468px]"
        >
            {listImgPosted.map((item) => {
                if (item.type === 'image') {
                    return (
                        <SwiperSlide key={item.id}>
                            <img src={item.url} alt="img" className={`block w-full h-full`} />
                        </SwiperSlide>
                    );
                } else {
                    return (
                        <SwiperSlide key={item.id}>
                            <video
                                autoPlay
                                muted
                                className={`block w-[unset] max-w-none h-full translate-x-[${
                                    item.cropInit.x + 'px'
                                }] translate-y-[${item.cropInit.y + 'px'}]`}
                            >
                                <source src={item.url} />
                            </video>
                        </SwiperSlide>
                    );
                }
            })}
        </Swiper>
    );
};

export default SwiperPosted;
