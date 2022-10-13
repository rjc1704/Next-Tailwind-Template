/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slideToRight: {
                    '0%': {
                        transform: 'translateX(-100%)'
                    },
                    '100%': {
                        transform: 'translateX(0px)'
                    }
                }
            },
            animation: {
                'mobile-menu-move': 'slideToRight 0.2s linear'
            }
        }
    }
    // plugins: [require('@tailwindcss/line-clamp')]
};
