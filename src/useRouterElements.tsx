import { Navigate, Outlet, useRoutes } from 'react-router-dom';
import HomeLayout from './layouts/HomeLayout';
import HomePage from './pages/HomePage';
import path from './constants/path';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

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
            ],
        },
    ]);

    return routeElements;
};

export default useRouterElements;
