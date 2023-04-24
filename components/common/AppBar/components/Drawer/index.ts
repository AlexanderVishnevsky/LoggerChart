import dynamic from 'next/dynamic';

export const DynamicDrawer = dynamic(() => import('./Drawer').then((mod) => mod.default), { ssr: false });
