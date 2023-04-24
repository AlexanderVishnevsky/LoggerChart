import dynamic from 'next/dynamic';

export const DynamicDropDown = dynamic(() => import('./DropDown').then((mod) => mod.default), { ssr: false });
