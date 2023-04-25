import { Loading, Text } from '@nextui-org/react';

import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { FC } from 'react';
import useSWR from 'swr';
import { DynamicColumnChart } from '@modules/Charts/BarChart';
import { ChartsLayout } from '@modules/Charts/Charts.styles';

import { fetcher } from '@/utils/fetcher';
import { Routes } from '@/routing/routes';

const SecondChart: FC<NextPage> = () => {
    const { data, error, isLoading } = useSWR<string | any>('/api/upload-csv', fetcher);

    return (
        <ChartsLayout>
            {error && (
                <Text size="$2xl" color={'error'} css={{ mb: '2em' }}>
                    Something went wrong...
                </Text>
            )}
            {isLoading || typeof data !== 'string' ? (
                <Loading type="gradient" size="xl" />
            ) : (
                <DynamicColumnChart data={data} />
            )}
        </ChartsLayout>
    );
};

export const getStaticPaths: GetStaticPaths = async () => ({
    paths: [Routes.COLUMN_CHART],
    fallback: true,
});

export const getStaticProps: GetStaticProps = async () => ({ props: {} });

export default SecondChart;
