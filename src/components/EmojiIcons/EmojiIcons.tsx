import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';
import IconEmoji from 'src/assets/IconEmoji';
import DropDown from '../DropDown';

interface Props {
    setChosenEmoji: React.Dispatch<React.SetStateAction<EmojiClickData | undefined>>;
    width?: number;
    height?: number;
    isIconBlack?: boolean;
    isBottom?: boolean;
}

const EmojiIcons = ({ setChosenEmoji, height, width, isIconBlack, isBottom }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const onEmojiClick = (emojiData: EmojiClickData) => {
        setChosenEmoji(emojiData);
    };
    return (
        <div className="relative">
            <DropDown
                classNameRender={`z-[30]`}
                classNameWrapper="relative z-10"
                isOpen={isOpen}
                setOffset={{
                    crossAxis: 110,
                    mainAxis: 10,
                }}
                setIsOpen={setIsOpen}
                renderPopover={
                    <div>
                        {/* <span className="block absolute drop-shadow-dropEmoji top-[-10px] h-[20px] w-[15px] border-x-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-white"></span> */}
                        <EmojiPicker
                            previewConfig={{ showPreview: false }}
                            searchDisabled
                            autoFocusSearch={false}
                            skinTonesDisabled
                            width={300}
                            height={200}
                            onEmojiClick={onEmojiClick}
                        />
                    </div>
                }
            >
                <button
                    onClick={() => setIsOpen(true)}
                    className={`${isIconBlack ? 'text-black' : 'text-secondary-text'} block h-full relative z-[-1]`}
                >
                    <IconEmoji width={width} height={height} />
                </button>
            </DropDown>
        </div>
    );
};

export default EmojiIcons;
