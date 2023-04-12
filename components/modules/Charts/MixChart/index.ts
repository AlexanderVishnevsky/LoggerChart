import dynamic from 'next/dynamic';

export const DynamicMixChart = dynamic(() => import('./MixChart').then((mod) => mod.default));
