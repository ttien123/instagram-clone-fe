import React, { useState } from 'react';
import NavHome from './components/NavHome';
import { useMatch } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
    const [isShowAll, setIsShowAll] = useState(true);
    const match = useMatch(`Messages`);
    return (
        <div className="flex">
            <NavHome isShowAll={isShowAll} setIsShowAll={setIsShowAll} />
            <div
                className="w-full px-4 md:px-0 md:ml-[72px] xl:ml-[244px] h-[100vh]"
                onClick={(e) => !match && setIsShowAll(true)}
            >
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;
