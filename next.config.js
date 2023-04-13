const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
});

module.exports = () => {
    const plugins = [withBundleAnalyzer];
    return plugins.reduce((acc, next) => next(acc), {
        trailingSlash: false,
        reactStrictMode: true,
        extends: ['plugin:@next/next/recommended'],
        swcMinify: true,
        eslint: {
            ignoreDuringBuilds: true,
        },
    });
};
