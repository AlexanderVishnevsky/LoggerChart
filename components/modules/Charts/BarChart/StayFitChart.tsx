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

const StayFitChart = ({ data }: { data: string }): JSX.Element => {
    const [selected, setSelected] = useState(['All', 'Unique', 'Quiz']);
    const [checked, setChecked] = useState(false);

    let chartData: Array<any> = JSON.parse(data).slice(2);

    if (!selected.find((i) => i === 'Quiz')) {
        chartData = chartData.filter((item) => !item.event?.includes('Tutorial Step'));
    }

    const chartContent = () => (
        <>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="event" padding={{ left: 30, right: 30 }} />
            <YAxis />
            <Tooltip label={'event'} />
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
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <Checkbox.Group
                    css={{ mt: 20 }}
                    label="Chart props"
                    orientation="vertical"
                    color="secondary"
                    onChange={setSelected}
                    value={selected}
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
                        css={{ ml: '50px', mr: '12px' }}
                        checked={checked}
                        onChange={() => setChecked((pr) => !pr)}
                        bordered
                        size="md"
                        color="secondary"
                    />
                    {checked ? 'Line chart' : 'Diagram chart'}
                </Text>
            </div>
        </>
    );
};
export default StayFitChart;
