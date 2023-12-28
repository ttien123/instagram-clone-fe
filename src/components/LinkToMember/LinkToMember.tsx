import IconClose from 'src/assets/IconClose';
import member from 'src/assets/AuthImg/member.jpg';
import Button from '../Button';
const LinkToMember = () => {
    return (
        <Button className="px-6 py-2 w-full">
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
                <div>
                    <IconClose />
                </div>
            </div>
        </Button>
    );
};

export default LinkToMember;
