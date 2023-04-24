import dynamic from 'next/dynamic';

export const DynamicAppBar = dynamic(() => import('./AppBar').then((mod) => mod.default));
