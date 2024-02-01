import { create } from 'zustand';

interface SwitchMode {
    darkMode: boolean;
    setDarkMode: (state: boolean) => void;
}

const useSwitchMode = create<SwitchMode>()((set) => ({
    darkMode: false,
    setDarkMode: (value) => set((state) => ({ darkMode: (state.darkMode = value) })),
}));

// const useSwitchMode = create<switchMode>()((set) => ({
//     darkMode: false,
//     setDarkMode: (value) => set((state) => ({ darkMode: (state.darkMode = value) })),
// }));

export default useSwitchMode;
