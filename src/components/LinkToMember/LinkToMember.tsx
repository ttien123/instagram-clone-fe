import IconClose from 'src/assets/IconClose';
import member from 'src/assets/AuthImg/member.jpg';
import Button from '../Button';

interface Props {
    isSearchRecent?: boolean;
    isBtnFollow?: boolean;
    isBtnFollowText?: boolean;
    isFollowing?: boolean;
    isSwitch?: boolean;
}

const LinkToMember = ({ isSearchRecent, isBtnFollow, isFollowing, isSwitch, isBtnFollowText }: Props) => {
    return (
        <div className={`py-2 w-full ${isSwitch ? 'px-4' : 'hover:bg-secondary-background px-6'} `}>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-start">
                    <div className="w-[44px] h-[44px] rounded-[50%] overflow-hidden mr-3">
                        <img src={member} alt="Member" className="" />
                    </div>
                    <div>
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
