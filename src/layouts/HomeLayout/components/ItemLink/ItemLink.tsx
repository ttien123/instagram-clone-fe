import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { useMatch } from 'react-router-dom';
import Button from 'src/components/Button';

interface Props {
    name: string;
    Icon?: React.ReactNode;
    IconActive?: React.ReactNode;
    to?: string;
    isShowAll?: boolean;
    isMoreActivity?: boolean;
    src?: string;
    setIsShowAll?: React.Dispatch<React.SetStateAction<boolean>>;
}

const ItemLink = ({ Icon, IconActive, name, to, isShowAll, setIsShowAll, src, isMoreActivity }: Props) => {
    const match = useMatch(`${to}`);
    const matchMessId = useMatch(`/messages/:id`);
    const matchMess = useMatch(`/messages`);
    const handleClick = () => {
        console.log(matchMess);

        if (name === 'Create') {
            return;
        }
        if (name === 'More' && (matchMessId || matchMess)) {
            return;
        }
        if (name !== 'Messages') {
            setIsShowAll && setIsShowAll(true);
        } else {
            setIsShowAll && setIsShowAll(false);
        }
    };

    return (
        <Button to={to} className="w-full cursor-pointer dark:text-white" onClick={handleClick}>
            <div
                className={`flex items-center justify-center xl:justify-start py-3 px-[10px] my-1 w-full ${
                    isMoreActivity ? 'hover:bg-hover-overlay' : 'xl:hover:bg-hover-overlay'
                } transition-all duration-300 rounded-lg`}
            >
                {!src && IconActive && Icon && (
                    <div>{match && (name !== 'Messages' ? isShowAll : true) ? IconActive : Icon}</div>
                )}
                {src && (
                    <div
                        className={`rounded-[50%] w-[28px] h-[28px] overflow-hidden border-[2px] flex-shrink-0 ${
                            match ? 'border-black' : 'border-transparent'
                        }`}
                    >
                        <img src={src} alt="avatar" className="block object-cover w-[24px] rounded-[50%] h-[24px] " />
                    </div>
                )}
                {isShowAll && (
                    <div
                        className={classNames(`hidden xl:block text-[16px] pl-4 font-medium `, {
                            'font-semibold': match && isShowAll,
                        })}
                    >
                        {name}
                    </div>
                )}
                {isMoreActivity && <div className={`block text-[14px] pl-4 font-medium flex-1 text-left`}>{name}</div>}
            </div>
        </Button>
    );
};

export default ItemLink;
