import React, { useEffect, useRef } from 'react';
import Button from '../Button';
import LinkToMember from '../LinkToMember';
import SkeletonSearch from '../SkeletonSearch/SkeletonSearch';
interface Props {
    isMobile?: boolean;
}
const SearchRecent = ({ isMobile }: Props) => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div
            className={`${
                isMobile ? 'w-[375px] shadow-always-black mr-4' : 'w-[397px] mt-3'
            }  max-w-[100%] h-full max-h-full pt-3 border-t border-t-separator`}
        >
            <div className="flex items-center justify-between mx-6 my-[6px]">
                <div className="font-semibold">Recent</div>
                <Button isOnlyText extendsClassName="font-semibold">
                    Clear all
                </Button>
            </div>
            <div
                ref={ref}
                className="my-2 max-h-[calc(100vh-225px)] overflow-y-auto h-full flex flex-col items-start justify-start"
            >
                <LinkToMember />
                <LinkToMember />
            </div>
        </div>
    );
};

export default SearchRecent;
