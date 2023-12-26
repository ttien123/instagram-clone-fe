import React from 'react';
import { listImgAuth } from 'src/mock/listImgAuth';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import Footer from 'src/components/Footer';
import Logo from 'src/assets/Logo';
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

                <div className="w-full md:max-w-[350px] border-b-[rgb(219,219,219)] md:border px-6 md:px-10 md:border-[rgb(219,219,219)]">
                    <div className="pb-[30px]">
                        <div className="mt-9 mb-3 grid place-items-center">
                            <Logo width={174} height={50} />
                        </div>
                        {children}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default AuthLayout;
