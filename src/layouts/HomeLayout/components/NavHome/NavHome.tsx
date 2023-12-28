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

interface Props {
    isShowAll: boolean;
    setIsShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const NavHome = ({ setIsShowAll, isShowAll }: Props) => {
    return (
        <div
            className={`${
                isShowAll ? 'xl:w-[244px]' : 'w-[72px]'
            } transition-all duration-500 pt-2 px-3 pb-5 md:h-[100vh] bg-white border-r-separator border-r fixed w-full md:w-[72px] bottom-0 md:left-0 z-10 flex flex-col`}
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
                        Icon={IconHome}
                        IconActive={IconHomeActive}
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
                        Icon={IconMessages}
                        IconActive={IconMessagesActive}
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
                    <ItemLink
                        Icon={IconCreate}
                        IconActive={IconCreate}
                        name="Create"
                        isShowAll={isShowAll}
                        setIsShowAll={setIsShowAll}
                    />
                    <ItemLink
                        src={avatar}
                        name="Home"
                        to={path.profile}
                        isShowAll={isShowAll}
                        setIsShowAll={setIsShowAll}
                    />
                </div>
                <div className="hidden md:block ">
                    <ItemLink
                        Icon={IconThreads}
                        IconActive={IconThreads}
                        name="Threads"
                        isShowAll={isShowAll}
                        setIsShowAll={setIsShowAll}
                    />
                    <div className="w-full hidden md:block">
                        <ItemNavPopover
                            Icon={IconMenu}
                            IconActive={IconMenuActive}
                            name="More"
                            isShowAll={isShowAll}
                            setIsShowAll={setIsShowAll}
                            ContentValue={<ContentNotification />}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavHome;
