import IconChooseMess from 'src/assets/IconChooseMess';
import Button from 'src/components/Button';

const NoMess = () => {
    return (
        <div className="w-full h-full flex items-center justify-center flex-col">
            <div>
                <IconChooseMess />
            </div>
            <div className="text-center">
                <div className="text-[20px] font-medium">Your messages</div>
                <div className="pt-4 text-secondary-text">Send private photos and messages to a friend or group</div>
            </div>
            <Button isbgButton extendsClassName="font-semibold mt-5 text-[12px]">
                Send messages
            </Button>
        </div>
    );
};

export default NoMess;
