import { Checkbox, Switch, Text } from '@nextui-org/react';

import { useState } from 'react';
import {
    BarChart,
    Bar,
    CartesianGrid,
    Legend,
    Line,
    LineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import * as S from './ColumnChart.styles';

const ColumnChart = ({ data }: { data: string }): JSX.Element => {
    const [selected, setSelected] = useState(['All', 'Unique', 'Event']);
    const [checked, setChecked] = useState(false);

    let chartData: Array<any> = JSON.parse(data).slice(2);

    if (!selected.find((i) => i === 'Event')) {
        chartData = chartData.filter((item) => !item.event?.includes('Event'));
    }

    const chartContent = () => (
        <>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="event" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip label={'event'} contentStyle={{ color: 'var(--nextui-colors-black)' }} />
            <Legend />
        </>
    );

    return (
        <>
            {checked ? (
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={chartData}
                        margin={{
                            top: 20,
                            right: 30,
                            left: 20,
                            bottom: 10,
                        }}
                    >
                        {chartContent()}
                        {selected.find((i) => i === 'All') && (
                            <Line type="monotone" dataKey="all" stroke="#8884d8" activeDot={{ r: 8 }} />
                        )}
                        {selected.find((i) => i === 'Unique') && (
                            <Line type="monotone" dataKey="unique" stroke="#82ca9d" />
                        )}
                    </LineChart>
                </ResponsiveContainer>
            ) : (
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
                        {chartContent()}
                        {selected.find((i) => i === 'All') && (
                            <Bar dataKey={'all'} stackId="a" fill="#8884d8" barSize={20} />
                        )}
                        {selected.find((i) => i === 'Unique') && (
                            <Bar dataKey={'unique'} stackId="b" fill="#82ca9d" barSize={20} />
                        )}
                    </BarChart>
                </ResponsiveContainer>
            )}
            <S.ColumnChartLayout>
                <Checkbox.Group
                    css={{ mt: 20 }}
                    label="Chart props"
                    orientation="vertical"
                    color="secondary"
                    onChange={setSelected}
                    value={selected}
                    id={'checkbox-group'}
                >
                    <Checkbox value="All" color={'gradient'}>
                        All events
                    </Checkbox>
                    <Checkbox value="Unique" color={'success'}>
                        Unique events
                    </Checkbox>
                    <Checkbox value="Event" color={'warning'}>
                        With Events
                    </Checkbox>
                </Checkbox.Group>
                <Text
                    h6
                    size={24}
                    css={{
                        textGradient: '45deg, $blue600 -20%, $pink600 50%',
                        display: 'flex',
                    }}
                    weight="bold"
                >
                    <Switch
                        checked={checked}
                        onChange={() => setChecked((pr) => !pr)}
                        bordered
                        size="md"
                        color="secondary"
                        id={'switcher'}
                    />
                    {checked ? 'Line chart' : 'Diagram chart'}
                </Text>
            </S.ColumnChartLayout>
        </>
    );
};
export default ColumnChart;
