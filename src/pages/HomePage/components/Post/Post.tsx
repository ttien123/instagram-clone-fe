import avatar from 'src/assets/AuthImg/technology-computer-creative-design.jpg';
import IconDot from 'src/assets/IconDot';
import SwiperPosted from '../SwiperPosted';
import Social from 'src/components/Social';
import WriteDescription from 'src/components/WriteDescription';
import { useEffect, useRef, useState } from 'react';
import Button from 'src/components/Button';
import EmojiIcons from 'src/components/EmojiIcons';
import { EmojiClickData } from 'emoji-picker-react';

const Post = () => {
    const [comment, setComment] = useState('');
    const [chosenEmoji, setChosenEmoji] = useState<EmojiClickData>();
    const ref = useRef<HTMLTextAreaElement>(null);

    const handleChangeComment = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setComment(e.target.value);
    };
    useEffect(() => {
        if (chosenEmoji) {
            setComment((prev) => prev + chosenEmoji?.emoji);
        }
    }, [chosenEmoji]);

    useEffect(() => {
        if (comment && ref.current) {
            ref.current.style.height = ref.current.scrollHeight + 'px';
        } else {
            ref.current && (ref.current.style.height = 22 + 'px');
        }
    }, [comment]);

    return (
        <div className="pb-4 border-b border-b-separator mb-5">
            <div className="flex items-center justify-between pl-1 pb-3">
                <div className="flex items-center justify-center">
                    <div className="w-[32px] h-[32px] mr-3 rounded-[50%] flex items-center justify-center overflow-hidden">
                        <img src={avatar} alt="avatar" className="w-full h-full block" />
                    </div>
                    <div className="font-semibold">lilaschan01</div>
                    <span className="mx-1 text-[20px] text-secondary-text">•</span>
                    <div className="text-secondary-text">14h</div>
                </div>
                <div>
                    <IconDot />
                </div>
            </div>
            <div>
                <SwiperPosted aspect={1} />
            </div>
            <div className="mt-1">
                <Social />
            </div>
            <div className="mt-1 font-semibold">804,267 likes</div>
            <p className="line-clamp-2">
                What console did you start with? 🤔👇 @brgaming (h/t gamewithdave/x) What console did you start with?
                🤔👇 @brgaming (h/t gamewithdave/x) What console did you start with? 🤔👇 @brgaming (h/t gamewithdave/x)
                What console did you start with? 🤔👇 @brgaming (h/t gamewithdave/x)
            </p>
            <div className="mt-2 flex items-center justify-between">
                <WriteDescription
                    ref={ref}
                    placeholder="Add a comment"
                    classNameWrapper="flex-1"
                    classNameInput={`!max-h-[80px] text-[14px] overflow-y-auto placeholder:text-[14px]`}
                    descriptionPost={comment}
                    onChange={handleChangeComment}
                />
                <div className="flex items-center justify-center">
                    {comment && (
                        <Button isOnlyText extendsClassName="font-semibold mr-2">
                            Post
                        </Button>
                    )}
                    <EmojiIcons width={13} height={13} setChosenEmoji={setChosenEmoji} />
                </div>
            </div>
        </div>
    );
};

export default Post;
