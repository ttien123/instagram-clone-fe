import IconChooseMess from 'src/assets/IconChooseMess';
import Button from 'src/components/Button';

const NoMess = () => {
    return (
        <div className="hidden w-full h-full md:flex items-center justify-center flex-col">
            <div className="dark:text-white">
                <IconChooseMess />
            </div>
            <div className="text-center">
                <div className="text-[20px] font-medium dark:text-white">Your messages</div>
                <div className="pt-4 text-secondary-text dark:text-white">
                    Send private photos and messages to a friend or group
                </div>
            </div>
            <Button isbgButton extendsClassName="font-semibold mt-5 text-[12px] dark:text-white">
                Send messages
            </Button>
        </div>
    );
};

export default NoMess;
