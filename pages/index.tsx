import { Checkbox } from '@nextui-org/react';

import useSWR from 'swr';
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Box } from '@common/Layout/Layout.styles';
import { useState } from 'react';

import { fetcher } from '@/utils/fetcher';

export default function Home() {
    const { data, error } = useSWR<string | any>('/api/upload-csv', fetcher);
    const [checked, setChecked] = useState(['All', 'Unique', 'Quiz']);

    if (error) {
        return <>{error}</>;
    }

    if (data) {
        let chartData: Array<any> = JSON.parse(data).slice(2);

        if (!checked.find((i) => i === 'Quiz')) {
            chartData = chartData.filter((item) => !item.event.includes('Tutorial Step'));
        }

        return (
            <Box
                css={{ height: '50vh', display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}
            >
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="event" />
                        <YAxis />
                        <Tooltip label={'event'} />
                        <Legend />
                        {checked.find((i) => i === 'All') && (
                            <Bar dataKey={'all'} stackId="a" fill="#8884d8" barSize={20} />
                        )}
                        {checked.find((i) => i === 'Unique') && (
                            <Bar dataKey={'unique'} stackId="b" fill="#82ca9d" barSize={20} />
                        )}
                        {/*<Bar dataKey={'unique'} fill="#ffc658" />*/}
                    </BarChart>
                </ResponsiveContainer>
                <Checkbox.Group
                    css={{ mt: 20 }}
                    label="Chart props"
                    orientation="horizontal"
                    color="secondary"
                    onChange={setChecked}
                    value={checked}
                >
                    <Checkbox value="All" color={'gradient'}>
                        All events
                    </Checkbox>
                    <Checkbox value="Unique" color={'success'}>
                        Unique events
                    </Checkbox>
                    <Checkbox value="Quiz" color={'warning'}>
                        With Quiz events
                    </Checkbox>
                </Checkbox.Group>
            </Box>
        );
    }
}
