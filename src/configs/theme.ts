import { createTheme, Theme } from '@nextui-org/react';

const fonts = {
    sans: `Avenir Next Cyr, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
    'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', 'sans-serif';`,
};

const sharedTheme: Theme = {
    theme: {
        fonts,
        colors: {
            black: '#111112',
        },
        breakpoints: {
            xs: '320px',
            sm: '460px',
            md: '520px',
            lg: '768px',
            xl: '1500px',
        },
    },
};

const darkTheme = createTheme({
    ...sharedTheme,
    type: 'dark',
});

const lightTheme = createTheme({
    ...sharedTheme,
    type: 'light',
});

export { darkTheme, lightTheme };
