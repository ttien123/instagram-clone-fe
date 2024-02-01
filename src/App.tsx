import { ToastContainer } from 'react-toastify';
import useRouterElements from './useRouterElements';
import { useEffect, useState } from 'react';
import { localStorageEventTarget } from './utils/auth';
import { useDispatch } from 'react-redux';
import { handleReSetAuth } from './reducer/auth.reducer';
import useSwitchMode from './reducer/useSwtichMode';

function App() {
    // const [darkMode, setDarkMode] = useState(false);
    const darkMode = useSwitchMode((state) => state.darkMode);
    const setDarkMode = useSwitchMode((state) => state.setDarkMode);
    console.log(darkMode);

    const routeElements = useRouterElements();
    const disPatch = useDispatch();

    useEffect(() => {
        let saveMode = localStorage.getItem('displayMode');
        if (!saveMode) {
            saveMode = 'light';
            setDarkMode(false);
            localStorage.setItem('displayMode', saveMode);
        }
        setDarkMode(saveMode === 'dark' ? true : false);
    }, []);

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
        <div className={`${darkMode ? 'dark' : ''}`}>
            {routeElements}
            <ToastContainer />
        </div>
    );
}

export default App;
