import { FC } from 'react';
import { NextPage } from 'next';
import { DynamicMixChart } from '@modules/Charts/MixChart';
import { Box } from '@common/Layout/Layout.styles';

const StayFit: FC<NextPage> = () => (
    <Box css={{ height: '50vh' }}>
        <DynamicMixChart />
    </Box>
);

export default StayFit;
