import EmojiPicker, { EmojiClickData } from 'emoji-picker-react';
import { useState } from 'react';
import IconEmoji from 'src/assets/IconEmoji';
import DropDown from '../DropDown';

interface Props {
    setChosenEmoji: React.Dispatch<React.SetStateAction<EmojiClickData | undefined>>;
}

const EmojiIcons = ({ setChosenEmoji }: Props) => {
    const [isOpen, setIsOpen] = useState(false);
    const onEmojiClick = (emojiData: EmojiClickData) => {
        setChosenEmoji(emojiData);
    };
    return (
        <div className="relative">
            <DropDown
                classNameRender="z-[50] !top-8 !translate-x-0 !left-[-10px] drop-shadow-dropEmoji"
                classNameWrapper="relative"
                isOpen={isOpen}
                setOffset={{
                    crossAxis: 0,
                    mainAxis: 0,
                }}
                setIsOpen={setIsOpen}
                renderPopover={
                    <div>
                        <span className="block absolute drop-shadow-dropEmoji top-[-10px] h-[20px] w-[15px] border-x-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-white"></span>
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
                <button onClick={() => setIsOpen(true)} className="text-secondary-text">
                    <IconEmoji />
                </button>
            </DropDown>
        </div>
    );
};

export default EmojiIcons;
