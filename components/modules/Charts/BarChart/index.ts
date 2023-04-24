import dynamic from 'next/dynamic';

export const DynamicColumnChart = dynamic(() => import('./ColumnChart').then((mod) => mod.default));
