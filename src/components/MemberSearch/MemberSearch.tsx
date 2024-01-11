import React from 'react';
import LinkToMember from '../LinkToMember';

interface Props {
    isMobile?: boolean;
}

const MemberSearch = ({ isMobile }: Props) => {
    return (
        <div
            className={` max-h-[calc(100vh-163px)] bg-white overflow-y-auto ${
                isMobile ? 'shadow-always-black w-[100vw]' : 'w-[397px] h-[calc(100vh-163px)]'
            }`}
        >
            <LinkToMember />
        </div>
    );
};

export default MemberSearch;
