import dynamic from 'next/dynamic';

export const DynamicThemeSwitcher = dynamic(() => import('./ThemeSwitcher').then((mod) => mod.default), { ssr: false });
