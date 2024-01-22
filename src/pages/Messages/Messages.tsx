import UseSideNav from './components/UseSideNav';
import { Outlet, useMatch } from 'react-router-dom';

const Messages = () => {
    return (
        <div>
            <div className="flex h-[100vh]">
                <UseSideNav />
                <div className="flex-1 h-full ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Messages;
