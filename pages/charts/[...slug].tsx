import { Loading, Text } from '@nextui-org/react';

import { NextPage } from 'next';
import { FC } from 'react';
import useSWR from 'swr';
import { DynamicColumnChart } from '@modules/Charts/BarChart';
import { ChartsLayout } from '@modules/Charts/Charts.styles';

import { fetcher } from '@/utils/fetcher';

const SecondChart: FC<NextPage> = () => {
    const { data, error, isLoading } = useSWR<string | any>('/api/upload-csv', fetcher);

    return (
        <ChartsLayout>
            {error && <Text color={'error'}>Something went wrong...</Text>}
            {isLoading || typeof data !== 'string' ? (
                <Loading type="gradient" size="xl" />
            ) : (
                <DynamicColumnChart data={data} />
            )}
        </ChartsLayout>
    );
};

export default SecondChart;
