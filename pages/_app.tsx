import '../styles/globals.css';
import { NextUIProvider, useSSR } from '@nextui-org/react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import { darkTheme, lightTheme } from '@theme';

const ChartApp = ({ Component, pageProps }: AppProps) => {
    const { isBrowser } = useSSR();
    return (
        <>
            {isBrowser && (
                <NextThemesProvider
                    defaultTheme="system"
                    attribute="class"
                    value={{
                        light: lightTheme.className,
                        dark: darkTheme.className,
                    }}
                >
                    <NextUIProvider>
                        <Component {...pageProps} />
                    </NextUIProvider>
                </NextThemesProvider>
            )}
        </>
    );
};

export default ChartApp;
