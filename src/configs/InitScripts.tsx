import Head from 'next/head';

import * as React from 'react';

const InitScripts = (): JSX.Element => {
    const themeColor = '#111112';
    const appName = 'LoggerChart';

    return (
        <>
            <Head>
                <title>{appName}</title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=5" />
                <meta httpEquiv="ScreenOrientation" content="autoRotate:disabled" />
                <meta name="apple-mobile-web-app-capable" content="yes" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="HandheldFriendly" content="true" />
                <meta name="keywords" content="Chart,React,Logger" />
                <meta name="description" content={'Make charts from CSV-files'} />
                <meta name="apple-mobile-web-app-status-bar-style" content={themeColor} />
                <meta content={`ya-title=${themeColor},ya-dock=fade`} />
                <meta name="msapplication-navbutton-color" content={themeColor} />
                <link rel="shortcut icon" href={`/static/chart.svg`} />
            </Head>
        </>
    );
};

export default InitScripts;
