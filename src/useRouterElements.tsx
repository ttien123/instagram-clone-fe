import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage';
import path from './constants/path';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Logined from './pages/Logined';
import Profile from './pages/Profile';
import Messages from './pages/Messages';

function ProtectedRoute() {
    const isAuthenticated = false;
    return isAuthenticated ? <Outlet /> : <Navigate to={'/login'} />;
}
function RejectedRoute() {
    const isAuthenticated = false;

    return !isAuthenticated ? <Outlet /> : <Navigate to={'/'} />;
}

const useRouterElements = () => {
    const routeElements = useRoutes([
        {
            path: path.home,
            index: true,
            element: (
                <HomeLayout>
                    <HomePage />
                </HomeLayout>
            ),
        },
        {
            path: path.messages,
            element: (
                <HomeLayout>
                    <Messages />
                </HomeLayout>
            ),
        },
        {
            path: path.profile,
            element: (
                <HomeLayout>
                    <Profile />
                </HomeLayout>
            ),
        },
        {
            path: '',
            element: <RejectedRoute />,
            children: [
                {
                    path: path.signIn,
                    element: (
                        <AuthLayout>
                            <SignIn />
                        </AuthLayout>
                    ),
                },
                {
                    path: path.signUp,
                    element: (
                        <AuthLayout>
                            <SignUp />
                        </AuthLayout>
                    ),
                },
                {
                    path: path.logined,
                    element: (
                        <AuthLayout>
                            <Logined />
                        </AuthLayout>
                    ),
                },
            ],
        },
    ]);

    return routeElements;
};

export default useRouterElements;
