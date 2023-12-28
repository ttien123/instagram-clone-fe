import React, { useEffect, useRef } from 'react';
import Button from '../Button';
import LinkToMember from '../LinkToMember';
import SkeletonSearch from '../SkeletonSearch/SkeletonSearch';

const SearchRecent = () => {
    const ref = useRef<HTMLInputElement>(null);

    return (
        <div className="w-[397px] max-w-[100%] h-full max-h-full pt-3 mt-3 border-t border-t-separator">
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
