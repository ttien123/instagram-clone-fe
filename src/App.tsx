import { ToastContainer } from 'react-toastify';
import useRouterElements from './useRouterElements';
import { useEffect } from 'react';
import { localStorageEventTarget } from './utils/auth';
import { useDispatch } from 'react-redux';
import { handleReSetAuth } from './reducer/auth.reducer';

function App() {
    const routeElements = useRouterElements();
    const disPatch = useDispatch();

    useEffect(() => {
        localStorageEventTarget.addEventListener('clearLS', () => {
            disPatch(handleReSetAuth());
        });
        return () => {
            localStorageEventTarget.removeEventListener('clearLS', () => {
                disPatch(handleReSetAuth());
            });
        };
    }, [handleReSetAuth]);
    return (
        <div>
            {routeElements}
            <ToastContainer />
        </div>
    );
}

export default App;
