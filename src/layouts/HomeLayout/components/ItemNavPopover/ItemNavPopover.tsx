import classNames from 'classnames';
import { useState } from 'react';
import Button from 'src/components/Button';
import Popover from 'src/components/Popover';
import { motion, AnimatePresence } from 'framer-motion';

interface Props {
    name: string;
    Icon: () => JSX.Element;
    IconActive: () => JSX.Element;
    isShowAll?: boolean;
    ContentValue: () => JSX.Element;
    setIsShowAll: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemNavPopover = ({ Icon, IconActive, name, isShowAll, setIsShowAll, ContentValue }: Props) => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setIsShowAll(open);
    };
    return (
        <div className="w-full">
            <Popover
                classNamePosition="!fixed !top-0 !left-[72px] bg-white rounded-r-[16px]"
                open={open}
                setOpen={setOpen}
                renderPopover={
                    <div className="">
                        <div className="w-[397px] h-[100vh] overflow-y-auto py-2 shadow-popoverShadow rounded-r-[16px]">
                            <ContentValue />
                        </div>
                    </div>
                }
            >
                <Button onClick={handleClick} className="block w-full">
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
