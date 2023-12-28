import React from 'react';
import ArrowDown from 'src/assets/ArrowDown';
import IconFollowing from 'src/assets/IconFollowing';
import IconInstagram from 'src/assets/IconInstagram';
import { IconNotifications } from 'src/assets/IconNotifications';
import IconStar from 'src/assets/IconStar';
import Button from 'src/components/Button';
import DropDown from 'src/components/DropDown';
import InputSearch from 'src/components/InputSearch';

const HeaderHomePage = () => {
    return (
        <div className="fixed top-0 left-0 right-0 h-[60px] md:hidden">
            <div className="px-4 flex items-center justify-between h-full">
                <DropDown
                    renderPopover={
                        <div className="ml-4 rounded-md shadow-always-black">
                            <div className="text-[16px] py-2 px-4 bg-white flex items-center justify-between rounded-md">
                                Following
                                <span>
                                    <IconFollowing />
                                </span>
                            </div>
                            <div className="text-[16px] py-2 px-4 bg-white flex items-center justify-between rounded-md">
                                Favorites
                                <span>
                                    <IconStar />
                                </span>
                            </div>
                        </div>
                    }
                >
                    <Button className="ml-4 flex items-center">
                        <span>
                            <IconInstagram />
                        </span>
                        <span className="ml-4">
                            <ArrowDown />
                        </span>
                    </Button>
                </DropDown>
                <div className="flex items-center">
                    <div className="w-[268px] mr-5">
                        <InputSearch isMobile />
                    </div>
                    <div>
                        <IconNotifications />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderHomePage;
