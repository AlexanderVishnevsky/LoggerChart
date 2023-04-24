import dynamic from 'next/dynamic';

export const DynamicMain = dynamic(() => import('./Main').then((mod) => mod.default));
