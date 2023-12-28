import React from 'react';
import LinkToMember from '../LinkToMember';

interface Props {
    isMobile?: boolean;
}

const MemberSearch = ({ isMobile }: Props) => {
    return (
        <div
            className={` h-[calc(100vh-163px)] bg-white overflow-y-auto ${
                isMobile ? 'shadow-always-black w-[375px] mr-4' : 'w-[397px]'
            }`}
        >
            <LinkToMember />
        </div>
    );
};

export default MemberSearch;
