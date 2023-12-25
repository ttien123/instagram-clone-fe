const plugin = require('tailwindcss/plugin');

/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    corePlugins: {
        container: false,
    },
    theme: {
        extend: {
            fontFamily: {
                Montserrat: ['Montserrat', 'sans-serif'],
            },
            colors: {
                'secondary-text': 'rgb(115, 115, 115)',
                'primary-button': 'rgb(0, 149, 246)',
                'primary-button-hover': 'rgb(24, 119, 242)',
                separator: 'rgb(219, 219, 219)',
            },
        },
    },
    plugins: [],
};
