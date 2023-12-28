import React, { useState } from 'react';
import NavHome from './components/NavHome';

interface Props {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
    const [isShowAll, setIsShowAll] = useState(true);

    return (
        <div className="flex">
            <NavHome isShowAll={isShowAll} setIsShowAll={setIsShowAll} />
            <div className="w-full md:ml-[72px] xl:ml-[244px] h-[100vh]" onClick={(e) => setIsShowAll(true)}>
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;
