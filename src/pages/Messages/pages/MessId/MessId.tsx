import React, { useEffect, useRef, useState } from 'react';
import Avatar from 'src/components/Avatar';
import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
import IconCall from 'src/assets/IconCall';
import IconCallVideo from 'src/assets/IconCallVideo';
import IconDetailMess from 'src/assets/IconDetailMess';
import Button from 'src/components/Button';
import WriteDescription from 'src/components/WriteDescription';
import EmojiIcons from 'src/components/EmojiIcons';
import { EmojiClickData } from 'emoji-picker-react';
import IconRecord from 'src/assets/IconRecord';
import IconUpImg from 'src/assets/IconUpImg';
import { IconNotifications } from 'src/assets/IconNotifications';
import IconBack from 'src/assets/IconBack';
import path from 'src/constants/path';
const MessId = () => {
    const ref = useRef<HTMLTextAreaElement>(null);
    const [chosenEmoji, setChosenEmoji] = useState<EmojiClickData>();
    const [message, setMessage] = useState('');

    const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    };

    useEffect(() => {
        if (chosenEmoji) {
            setMessage((prev) => prev + chosenEmoji?.emoji);
        }
    }, [chosenEmoji]);

    useEffect(() => {
        if (message && ref.current) {
            ref.current.style.height = ref.current.scrollHeight + 'px';
        } else {
            ref.current && (ref.current.style.height = 22 + 'px');
        }
    }, [message]);

    return (
        <div className="h-full flex flex-col">
            <div className="flex h-[64px] md:h-[75px] items-center w-full justify-between px-4 border-b border-b-separator">
                <div className="flex items-center justify-start">
                    <Button to={path.messages} className="mr-3 md:hidden">
                        <IconBack />
                    </Button>
                    <div className="md:w-[44px] md:h-[44px] w-[24px] h-[24px]">
                        <Avatar src={avatar} />
                    </div>
                    <div className=" font-semibold ml-2">lilaschan01</div>
                </div>
                <div className="flex items-center justify-center">
                    <div className="p-2">
                        <IconCall />
                    </div>
                    <div className="p-2">
                        <IconCallVideo />
                    </div>
                    <div className="pl-2">
                        <IconDetailMess />
                    </div>
                </div>
            </div>
            <div className="text-center flex-1 overflow-y-auto">
                <div className="h-[20px]"></div>
                <div className="w-[56px] h-[56px] md:w-[96px] md:h-[96px] my-4 mx-auto">
                    <Avatar src={avatar} />
                </div>
                <div className="mb-1 text-[20px] font-medium">Dương.</div>
                <div className="text-[12px] text-secondary-text">08.duongw.05 · Instagram</div>
                <div className="text-center mt-4 mb-8">
                    <Button isBtnType2 extendsClassName="mx-auto">
                        View profile
                    </Button>
                </div>
                <div>
                    <div className="text-[12px] py-4 px-5">Fri 05:27</div>
                    <div className="flex mt-[16px]">
                        <div className="pl-[14px] pr-2 flex items-end">
                            <div className="h-[28px] w-[28px]">
                                <Avatar src={avatar} />
                            </div>
                        </div>
                        <div className="py-[7px] bg-highlight-background text-black rounded-[18px] px-3 max-w-[80%] text-left">
                            ak naks jnk nsakj nksaj nksjn kans kjnsak jnska nksjn ksajn kjsnk jsank janskj naksjn kjsan
                            kjsan kjnsak jsnak jnsakj nksajn kjsank djksa jnsakj dnsakjn sakj nksaj nksjan kajn ksjan
                            kjsank djsan dkajn dkjsan dkjsan kdjsan kjsank jan kjsan kdjsank jsan kjasndk jsan kjsan
                            dkjsan dkjsadkj nsakdj nksadjnksajdn sakjdnk jasndk sjadnkjsan kdjnsadkj sankdja
                        </div>
                        <div></div>
                    </div>

                    <div className="flex justify-end mt-[16px]">
                        <div className="pl-[14px] pr-2 flex items-end"></div>
                        <div className="py-[7px] bg-bg-textMess text-white rounded-[18px] px-3 max-w-[80%] text-left">
                            ak naks jnk nsakj nksaj nksjn kans kjnsak jnska nksjn ksajn kjsnk jsank janskj naksjn kjsan
                            kjsan kjnsak jsnak jnsakj nksajn kjsank djksa jnsakj dnsakjn sakj nksaj nksjan kajn ksjan
                            kjsank djsan dkajn dkjsan dkjsan kdjsan kjsank jan kjsan kdjsank jsan kjasndk jsan kjsan
                            dkjsan dkjsadkj nsakdj nksadjnksajdn sakjdnk jasndk sjadnkjsan kdjnsadkj sankdja
                        </div>
                        <div className="pr-[14px]"></div>
                    </div>
                </div>
            </div>
            <div className="min-h-[44px] flex items-center justify-between pl-[11px] pr-4 m-4 border border-separate rounded-[22px]">
                <div className="">
                    <EmojiIcons isBottom isIconBlack width={24} height={24} setChosenEmoji={setChosenEmoji} />
                </div>
                <WriteDescription
                    ref={ref}
                    placeholder="Message..."
                    classNameWrapper="flex-1 flex items-center justify-center px-2"
                    classNameInput={`max-h-[124px] overflow-y-auto`}
                    descriptionPost={message}
                    onChange={handleChangeComment}
                />
                {message ? (
                    <Button isOnlyText extendsClassName="font-semibold">
                        Send
                    </Button>
                ) : (
                    <div className="flex items-center justify-center">
                        <div className="p-2">
                            <IconRecord />
                        </div>
                        <div className="p-2">
                            <IconUpImg />
                        </div>
                        <div className="p-2">
                            <IconNotifications />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MessId;
