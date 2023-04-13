import { Box } from '@common/Layout/Layout.styles';
import { DynamicMixChart } from '@modules/Charts/MixChart';
import { FC } from 'react';
import { NextPage } from 'next';

const DemoChart: FC<NextPage> = () => (
    <Box css={{ height: '50vh' }}>
        <DynamicMixChart />
    </Box>
);
export default DemoChart;
