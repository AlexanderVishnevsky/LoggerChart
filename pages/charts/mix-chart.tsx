import { GetStaticProps, NextPage } from 'next';
import { Box } from '@common/Layout/Layout.styles';
import { DynamicMixChart } from '@modules/Charts/MixChart';
import { FC } from 'react';

const MixChartPage: FC<NextPage> = () => (
    <Box css={{ height: '50vh' }}>
        <DynamicMixChart />
    </Box>
);

export const getStaticProps: GetStaticProps = async () => ({ props: {} });

export default MixChartPage;
