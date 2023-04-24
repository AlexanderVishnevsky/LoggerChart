import '../styles/globals.css';
import type { AppProps } from 'next/app';

import { NextUIProvider, useSSR } from '@nextui-org/react';

import { ThemeProvider as NextThemesProvider } from 'next-themes';
import { darkTheme, lightTheme } from '@theme';
import { DynamicAppBar } from '@common/AppBar';

import InitScripts from '@/configs/InitScripts';

const ChartApp = ({ Component, pageProps }: AppProps) => {
    const { isBrowser } = useSSR();
    return (
        <>
            <InitScripts />
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
                        <DynamicAppBar />
                        <Component {...pageProps} />
                    </NextUIProvider>
                </NextThemesProvider>
            )}
        </>
    );
};

export default ChartApp;
