import ArrowDown from 'src/assets/ArrowDown';
import IconNewMess from 'src/assets/IconNewMess';
import ListFriend from '../ListFriend';
import IconBack from 'src/assets/IconBack';
import { Link, useMatch } from 'react-router-dom';
import path from 'src/constants/path';

const UseSideNav = () => {
    const matchId = useMatch(`/messages/:id`);

    return (
        <div
            className={`${
                matchId ? 'hidden md:flex' : ' flex'
            } w-full md:w-[120px] xl:w-[398px] border-r border-separate h-full  flex-col`}
        >
            <div className="pt-3 md:pt-[36px] pb-3 px-6 flex items-center justify-between md:justify-center xl:justify-between">
                <Link to={path.home} className="md:hidden dark:text-white">
                    <IconBack />
                </Link>
                <div className="flex md:hidden xl:flex items-center justify-start">
                    <div className="text-[20px] font-bold dark:text-white">t.tien_01</div>
                    <button className="ml-2">
                        <ArrowDown />
                    </button>
                </div>
                <button className="p-2 dark:text-white">
                    <IconNewMess />
                </button>
            </div>
            <div className="hidden xl:flex items-center justify-between px-6 pb-[10px]">
                <div className="font-semibold text-[16px] dark:text-white">Messages</div>
                <button className="font-semibold text-secondary-text">Requests</button>
            </div>
            <ListFriend />
        </div>
    );
};

export default UseSideNav;
