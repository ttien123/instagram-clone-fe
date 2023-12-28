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
                'secondary-button': 'rgb(38, 38, 38)',
                'secondary-icon': 'rgb(142, 142, 142)',
                'primary-button': 'rgb(0, 149, 246)',
                'primary-button-hover': 'rgb(24, 119, 242)',
                'secondary-background': 'rgb(250, 250, 250)',
                'grey-2': 'rgb(219, 219, 219)',
                'hover-overlay': 'rgba(0, 0, 0, .05)',
                'highlight-background': 'rgb(239, 239, 239)',
                stroke: 'rgb(219, 219, 219)',
                separator: 'rgb(219, 219, 219)',
            },
            boxShadow: {
                popoverShadow: '4px 0 24px rgba(0, 0, 0,.15)',
            },
            keyframes: {
                loading: {
                    '0%': { transform: 'rotate(180deg)' },
                    '100%': { transform: 'rotate(540deg)' },
                },
            },
            animation: {
                'loading-icon': 'loading 0.8s steps(8, end) infinite',
            },
        },
    },
    plugins: [],
};
