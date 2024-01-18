import React, { useState } from 'react';
import ArrowDown from 'src/assets/ArrowDown';
import IconFollowing from 'src/assets/IconFollowing';
import IconInstagram from 'src/assets/IconInstagram';
import { IconNotifications } from 'src/assets/IconNotifications';
import IconStar from 'src/assets/IconStar';
import Button from 'src/components/Button';
import DropDown from 'src/components/DropDown';
import InputSearch from 'src/components/InputSearch';
import ContentNotification from 'src/layouts/HomeLayout/components/ContentNotification';

const HeaderHomePage = () => {
    const [isOpenNotify, setIsOpenNotify] = useState(false);
    const [isOpenStyle, setIsOpenStyle] = useState(false);
    return (
        <div className="fixed z-[100] top-0 left-0 right-0 h-[60px] md:hidden bg-white">
            <div className="px-4 flex items-center justify-between h-full">
                <DropDown
                    isOpen={isOpenStyle}
                    setIsOpen={setIsOpenStyle}
                    renderPopover={
                        <div className="ml-4 rounded-md shadow-always-black">
                            <div className="text-[16px] py-2 px-4 bg-white flex items-center justify-between rounded-md">
                                Following
                                <span className="ml-2">
                                    <IconFollowing />
                                </span>
                            </div>
                            <div className="text-[16px] py-2 px-4 bg-white flex items-center justify-between rounded-md">
                                Favorites
                                <span className="ml-2">
                                    <IconStar />
                                </span>
                            </div>
                        </div>
                    }
                >
                    <Button className="flex items-center">
                        <span>
                            <IconInstagram />
                        </span>
                        <span className="ml-4">
                            <ArrowDown />
                        </span>
                    </Button>
                </DropDown>
                <div className="flex items-center ">
                    <div className="w-[250px] mr-3">
                        <InputSearch isMobile />
                    </div>
                    <DropDown
                        isOpen={isOpenNotify}
                        setIsOpen={setIsOpenNotify}
                        isNotify
                        classNameRender="w-[100vw] !fixed !top-0 z-50 !left-0 h-[calc(100vh-60px)] bg-white"
                        renderPopover={<ContentNotification isMobile setIsOpen={setIsOpenNotify} />}
                    >
                        <button>
                            <IconNotifications />
                        </button>
                    </DropDown>
                </div>
            </div>
        </div>
    );
};

export default HeaderHomePage;
