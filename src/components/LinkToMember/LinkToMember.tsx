import IconClose from 'src/assets/IconClose';
import member from 'src/assets/AuthImg/member.jpg';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import Avatar from '../Avatar';

interface Props {
    isSearchRecent?: boolean;
    isBtnFollow?: boolean;
    isBtnFollowText?: boolean;
    isFollowing?: boolean;
    isSwitch?: boolean;
    isMess?: boolean;
    isActive?: boolean;
    to?: string;
}

const LinkToMember = ({
    isSearchRecent,
    isBtnFollow,
    isFollowing,
    isSwitch,
    isBtnFollowText,
    isMess,
    isActive,
    to,
}: Props) => {
    const negative = useNavigate();
    return (
        <div
            onClick={() => to && negative(to)}
            className={`py-2 w-full ${isSwitch ? 'px-4' : 'hover:bg-secondary-background px-6'} cursor-pointer ${
                isActive && 'bg-highlight-background'
            }`}
        >
            <div
                className={`flex items-center ${
                    isMess ? 'justify-start md:justify-center xl:justify-between' : 'justify-between'
                }`}
            >
                <div className={`flex items-center ${isMess ? 'justify-center' : 'justify-start'}`}>
                    <div
                        className={`w-[44px] h-[44px] rounded-[50%] overflow-hidden ${
                            isMess ? 'mr-3 md:mr-0 xl:mr-3' : 'mr-3'
                        } `}
                    >
                        <Avatar src={member} />
                    </div>
                    <div className={`${isMess ? 'md:hidden xl:block' : ''}`}>
                        <h4 className="font-semibold text-left">t.tien_01</h4>
                        <p className="text-secondary-text">Nguyễn Thế Tiến</p>
                    </div>
                </div>
                {isSearchRecent && (
                    <div>
                        <IconClose />
                    </div>
                )}
                {isBtnFollow && <Button isbgButton>Follow</Button>}
                {isBtnFollowText && (
                    <Button isOnlyText extendsClassName="!text-[12px] font-semibold">
                        Follow
                    </Button>
                )}
                {isFollowing && <Button isBtnType2={isFollowing}>Following</Button>}
                {isSwitch && (
                    <Button isOnlyText extendsClassName="!text-[12px] font-semibold">
                        Switch
                    </Button>
                )}
            </div>
        </div>
    );
};

export default LinkToMember;
