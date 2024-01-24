import { IconHome, IconHomeActive } from 'src/assets/IconHome';
import { IconMessages, IconMessagesActive } from 'src/assets/IconMessages';
import Logo from 'src/assets/Logo';
import ItemLink from '../ItemLink';
import path from 'src/constants/path';
import { IconSearch, IconSearchActive } from 'src/assets/IconSearch';
import { IconNotifications, IconNotificationsActive } from 'src/assets/IconNotifications';
import { IconMenu, IconMenuActive } from 'src/assets/IconMenu';
import ItemNavPopover from '../ItemNavPopover';
import IconInstagram from 'src/assets/IconInstagram';
import IconCreate from 'src/assets/IconCreate';
import IconThreads from 'src/assets/IconThreads';
import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
import { Link } from 'react-router-dom';
import ContentSearch from '../ContentSearch';
import ContentNotification from '../ContentNotification';
import Dialog from 'src/components/Dialog';
import CreatePost from '../CreatePost';
import { useState } from 'react';
import DropDown from 'src/components/DropDown';
import IconSetting from 'src/assets/IconSetting';
import IconActivity from 'src/assets/IconActivity';
import IconSaved from 'src/assets/IconSaved';
import IconSwitchLight from 'src/assets/IconSwitchLight';
import IconReport from 'src/assets/IconReport';

const MoreActivity = () => {
    return (
        <div className="w-[266px] bg-white overflow-hidden rounded-2xl shadow-always-black">
            <div className="p-2">
                <div>
                    <ItemLink Icon={<IconSetting />} IconActive={<IconSetting />} name="Setting" isMoreActivity />
                </div>
                <div>
                    <ItemLink
                        Icon={<IconActivity />}
                        IconActive={<IconActivity />}
                        name="Your activity"
                        isMoreActivity
                    />
                </div>
                <div>
                    <ItemLink Icon={<IconSaved />} IconActive={<IconSaved />} name="Saved" isMoreActivity />
                </div>
                <div>
                    <ItemLink
                        Icon={<IconSwitchLight />}
                        IconActive={<IconSwitchLight />}
                        name="Switch appearance"
                        isMoreActivity
                    />
                </div>
            </div>
            <div>
                <ItemLink Icon={<IconReport />} IconActive={<IconSetting />} name="Report a problem" isMoreActivity />
            </div>
            <div className="h-[6px] bg-stroke opacity-30"></div>
            <div className="p-2">
                <div>
                    <ItemLink name="Switch accounts" isMoreActivity />
                </div>
            </div>
            <div className="h-[0.5px] bg-stroke opacity-30"></div>
            <div className="p-2">
                <div>
                    <ItemLink name="Log out" isMoreActivity />
                </div>
            </div>
        </div>
    );
};

interface Props {
    isShowAll: boolean;
    setIsShowAll: React.Dispatch<React.SetStateAction<boolean>>;
    isPageMess?: boolean;
}

const NavHome = ({ setIsShowAll, isShowAll, isPageMess }: Props) => {
    const [isOpenCreatePost, setIsOpenCreatePost] = useState(false);
    const [isOpenMore, setIsOpenMore] = useState(false);

    return (
        <div
            className={`${isShowAll ? 'xl:w-[244px]' : 'w-[72px]'} ${
                isPageMess ? 'hidden md:block' : ''
            } transition-all duration-500 md:pt-2 px-3 md:pb-5 md:h-[100vh] bg-white md:border-r-separator md:border-r fixed w-full md:w-[72px] bottom-0 md:left-0 z-[100] flex flex-col`}
        >
            <div className="h-[92px] hidden md:flex items-center justify-center">
                <Link
                    to={path.home}
                    onClick={(e) => setIsShowAll(true)}
                    className="relative px-3 pt-[25px] pb-4 w-full"
                >
                    <div
                        className={`opacity-0 ${
                            isShowAll ? 'xl:opacity-100' : 'opacity-0'
                        } transition-all duration-500 absolute top-1 `}
                    >
                        <Logo />
                    </div>
                    <div
                        className={`opacity-100 scale-100 xl:opacity-0 xl:scale-0' ${
                            !isShowAll ? 'xl:opacity-100 xl:scale-100' : 'xl:opacity-0 xl:scale-0'
                        } transition-all duration-500 absolute top-1 `}
                    >
                        <IconInstagram />
                    </div>
                </Link>
            </div>
            <div className="flex flex-col flex-1 justify-between">
                <div className="flex md:flex-col items-center justify-around md:items-start">
                    <ItemLink
                        Icon={<IconHome />}
                        IconActive={<IconHomeActive />}
                        name="Home"
                        to={path.home}
                        isShowAll={isShowAll}
                        setIsShowAll={setIsShowAll}
                    />
                    <div className="w-full hidden md:block">
                        <ItemNavPopover
                            Icon={IconSearch}
                            IconActive={IconSearchActive}
                            name="Search"
                            isShowAll={isShowAll}
                            setIsShowAll={setIsShowAll}
                            ContentValue={<ContentSearch />}
                        />
                    </div>
                    <ItemLink
                        Icon={<IconMessages />}
                        IconActive={<IconMessagesActive />}
                        name="Messages"
                        to={path.messages}
                        isShowAll={isShowAll}
                        setIsShowAll={setIsShowAll}
                    />
                    <div className="w-full hidden md:block">
                        <ItemNavPopover
                            Icon={IconNotifications}
                            IconActive={IconNotificationsActive}
                            name="Notifications"
                            isShowAll={isShowAll}
                            setIsShowAll={setIsShowAll}
                            ContentValue={<ContentNotification />}
                        />
                    </div>
                    <Dialog
                        isOpen={isOpenCreatePost}
                        setIsOpen={setIsOpenCreatePost}
                        isBtnClose
                        renderPopover={<CreatePost />}
                        classNameChildren="w-full"
                        extendsClassName="z-[1000]"
                    >
                        <ItemLink
                            Icon={<IconCreate />}
                            IconActive={<IconCreate />}
                            name="Create"
                            isShowAll={isShowAll}
                            setIsShowAll={setIsShowAll}
                        />
                    </Dialog>
                    <ItemLink
                        src={avatar}
                        name="Profile"
                        to={path.profile}
                        isShowAll={isShowAll}
                        setIsShowAll={setIsShowAll}
                    />
                </div>
                <div className="hidden md:block ">
                    <ItemLink
                        Icon={<IconThreads />}
                        IconActive={<IconThreads />}
                        name="Threads"
                        isShowAll={isShowAll}
                        setIsShowAll={setIsShowAll}
                    />
                    <div className="w-full hidden md:block">
                        <DropDown
                            renderPopover={<MoreActivity />}
                            isOpen={isOpenMore}
                            setIsOpen={setIsOpenMore}
                            classNameRender="z-50 !translate-x-0 !top-[unset] bottom-[20px] lef xl:bottom-[80px] !left-[72px] xl!left-4"
                        >
                            <ItemLink
                                Icon={<IconMenu />}
                                IconActive={<IconMenuActive />}
                                name="More"
                                isShowAll={isShowAll}
                                setIsShowAll={setIsShowAll}
                            />
                        </DropDown>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavHome;
