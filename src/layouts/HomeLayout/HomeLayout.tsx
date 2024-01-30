import React, { useState } from 'react';
import NavHome from './components/NavHome';
import { useMatch } from 'react-router-dom';

interface Props {
    children: React.ReactNode;
}

const HomeLayout = ({ children }: Props) => {
    const matchId = useMatch(`/messages/:id`);
    const match = useMatch(`/messages`);
    const [isShowAll, setIsShowAll] = useState(Boolean(!(match || matchId)));

    return (
        <div className="flex mb-[60px] md:mb-0">
            {<NavHome isPageMess={Boolean(match || matchId)} isShowAll={isShowAll} setIsShowAll={setIsShowAll} />}
            <div
                className={`w-full md:ml-[72px] ${Boolean(!(match || matchId)) ? 'xl:ml-[244px] ' : ''}`}
                onClick={() => Boolean(!(match || matchId)) && setIsShowAll(true)}
            >
                {children}
            </div>
        </div>
    );
};

export default HomeLayout;
