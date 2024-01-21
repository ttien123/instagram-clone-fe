import ArrowDown from 'src/assets/ArrowDown';
import IconNewMess from 'src/assets/IconNewMess';
import ListFriend from '../ListFriend';

const UseSideNav = () => {
    return (
        <div className="w-[120px] xl:w-[398px] border-r border-separate h-full flex flex-col">
            <div className="pt-[36px] pb-3 px-6 flex items-center justify-center xl:justify-between">
                <div className="hidden xl:flex items-center justify-start">
                    <div className="text-[20px] font-bold">t.tien_01</div>
                    <button className="ml-2">
                        <ArrowDown />
                    </button>
                </div>
                <button className="p-2">
                    <IconNewMess />
                </button>
            </div>
            <div className="flex items-center justify-between px-6 pb-[10px]">
                <div className="font-semibold text-[16px]">Messages</div>
                <button className="font-semibold text-secondary-text">Requests</button>
            </div>
            <ListFriend />
        </div>
    );
};

export default UseSideNav;
