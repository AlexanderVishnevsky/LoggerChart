import dynamic from 'next/dynamic';

export const DynamicStayFitChart = dynamic(() => import('./StayFitChart').then((mod) => mod.default));
