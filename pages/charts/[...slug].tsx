import { Loading } from '@nextui-org/react';

import { FC } from 'react';
import { Box } from '@common/Layout/Layout.styles';
import useSWR from 'swr';
import { NextPage } from 'next';
import { DynamicStayFitChart } from '@modules/Charts/BarChart';

import { fetcher } from '@/utils/fetcher';

const Slug: FC<NextPage> = () => {
    const { data, error, isLoading } = useSWR<string | any>('/api/upload-csv', fetcher);

    return (
        <Box
            css={{
                height: '80vh',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
            }}
        >
            {error && 'Something went wrong...'}
            {isLoading || typeof data !== 'string' ? (
                <Loading type="gradient" size="xl" />
            ) : (
                <DynamicStayFitChart data={data} />
            )}
        </Box>
    );
};

export default Slug;
