import UseSideNav from './components/UseSideNav';
import { Outlet } from 'react-router-dom';

const Messages = () => {
    return (
        <div>
            <div className="flex h-[100vh]">
                <UseSideNav />
                <div className=" md:block flex-1 h-full ">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Messages;
