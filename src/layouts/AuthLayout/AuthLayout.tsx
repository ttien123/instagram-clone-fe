import React from 'react';
import { listImgAuth } from 'src/mock/listImgAuth';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Footer from 'src/components/Footer';
interface Props {
    children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return (
        <div className="flex item-center justify-center flex-col md:mt-10">
            <div className="flex items-center justify-center pb-2 md:pb-[56px]">
                <div className="hidden lg:block relative bg-[url(src/assets/AuthImg/home-phones.png)] mr-8 bg-[length:468.32px_634.15px] w-[400px] h-[581.15px] bg-no-repeat bg-top">
                    <div className="w-[250px] h-full absolute top-0 right-0">
                        <Swiper
                            slidesPerView={1}
                            effect={'fade'}
                            speed={1250}
                            allowTouchMove={false}
                            autoplay={{
                                delay: 2000,
                                disableOnInteraction: false,
                            }}
                            loop={true}
                            modules={[Autoplay, EffectFade]}
                            className="h-full w-[250px] absolute top-[28px] right-[26px]"
                        >
                            {listImgAuth.map((item, index) => (
                                <SwiperSlide key={index}>
                                    <div>
                                        <img src={item.link} alt="Img" />
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>
                <div>{children}</div>
            </div>
            <Footer />
        </div>
    );
};

export default AuthLayout;
