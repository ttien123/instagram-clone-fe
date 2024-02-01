import ArrowIcon from 'src/assets/ArrowLeft';
import LinkToMember from 'src/components/LinkToMember';
import useSwitchMode from 'src/reducer/useSwtichMode';

interface Props {
    isMobile?: boolean;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContentNotification = ({ isMobile, setIsOpen }: Props) => {
    const darkMode = useSwitchMode((state) => state.darkMode);

    return (
        <div className={`py-2 h-full overflow-y-auto ${darkMode && 'bg-black'}`}>
            <div className={`${isMobile ? 'pt-1' : 'pt-4'} px-6 flex items-center justify-between`}>
                {isMobile && (
                    <button onClick={() => setIsOpen && setIsOpen(false)} className="-rotate-90 dark:text-white">
                        <ArrowIcon />
                    </button>
                )}
                <h2
                    className={`${darkMode ? 'text-white' : ''} font-semibold flex-1 ${
                        isMobile ? 'text-center text-[16px]' : 'text-left text-[24px]'
                    }`}
                >
                    Notifications
                </h2>
            </div>
            <div>
                <div className="mt-6">
                    <div className="px-6 mb-[16px]">
                        <h4 className={`${darkMode ? 'text-white' : ''} text-[16px] font-semibold`}>This Week</h4>
                    </div>
                    <div>
                        <LinkToMember isFollowing />
                        <LinkToMember isFollowing />
                        <LinkToMember isFollowing />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="px-6 mb-[16px]">
                        <h4 className="text-[16px] font-semibold">This Week</h4>
                    </div>
                    <div>
                        <LinkToMember isBtnFollow />
                        <LinkToMember isBtnFollow />
                        <LinkToMember isBtnFollow />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="px-6 mb-[16px]">
                        <h4 className={`${darkMode ? 'text-white' : ''} text-[16px] font-semibold`}>This Week</h4>
                    </div>
                    <div>
                        <LinkToMember isBtnFollow />
                        <LinkToMember isBtnFollow />
                        <LinkToMember isBtnFollow />
                    </div>
                </div>
                <div className="mt-6">
                    <div className="px-6 mb-[16px]">
                        <h4 className={`${darkMode ? 'text-white' : ''} text-[16px] font-semibold`}>This Week</h4>
                    </div>
                    <div>
                        <LinkToMember isBtnFollow />
                        <LinkToMember isBtnFollow />
                        <LinkToMember isBtnFollow />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContentNotification;
