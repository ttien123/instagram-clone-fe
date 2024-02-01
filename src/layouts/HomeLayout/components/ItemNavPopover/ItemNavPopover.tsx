import classNames from 'classnames';
import { useState } from 'react';
import Button from 'src/components/Button';
import Popover from 'src/components/Popover';
import { motion, AnimatePresence } from 'framer-motion';
import useSwitchMode from 'src/reducer/useSwtichMode';
import { useMatch } from 'react-router-dom';

interface Props {
    name: string;
    Icon: () => JSX.Element;
    IconActive: () => JSX.Element;
    isShowAll?: boolean;
    ContentValue: React.ReactNode;
    setIsShowAll?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemNavPopover = ({ Icon, IconActive, name, isShowAll, setIsShowAll, ContentValue }: Props) => {
    const darkMode = useSwitchMode((state) => state.darkMode);
    const matchId = useMatch(`/messages/:id`);
    const match = useMatch(`/messages`);
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setIsShowAll && !match && !matchId && setIsShowAll(open);
    };
    return (
        <div className="w-full">
            <Popover
                isToggle={true}
                classNamePosition={`!fixed z-[60] !top-0 !left-[72px] ${
                    darkMode ? 'bg-black' : 'bg-white'
                } rounded-r-[16px] !outline-none`}
                open={open}
                setOpen={setOpen}
                renderPopover={
                    <div className="dark:!bg-black">
                        <div className="w-[397px] h-[100vh] py-3 shadow-popoverShadow rounded-r-[16px]">
                            {ContentValue}
                        </div>
                    </div>
                }
            >
                <Button onClick={handleClick} className="block w-full dark:text-white">
                    <div
                        className={`flex items-center justify-center xl:justify-start my-1 xl:hover:bg-hover-overlay transition-colors duration-300 w-full rounded-lg`}
                    >
                        {open ? (
                            <div
                                className={`p-3 w-full border rounded-lg ${
                                    open ? 'border-grey-2' : 'border-transparent'
                                }`}
                            >
                                <IconActive />
                            </div>
                        ) : (
                            <div className={`p-3 border rounded-lg ${open ? 'border-grey-2' : 'border-transparent'}`}>
                                <Icon />
                            </div>
                        )}
                        {isShowAll && (
                            <div className={classNames('hidden xl:block text-[16px] font-medium')}>{name}</div>
                        )}
                    </div>
                </Button>
            </Popover>
        </div>
    );
};

export default ItemNavPopover;
