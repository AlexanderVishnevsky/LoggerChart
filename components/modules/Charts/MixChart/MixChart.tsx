import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

import { MixChartData } from './MixChart.data';

const MixChart = (): JSX.Element => (
    <ResponsiveContainer width="100%" height="100%">
        <BarChart
            width={500}
            height={300}
            data={MixChartData}
            margin={{
                top: 20,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Bar dataKey="pv" stackId="a" fill="#8884d8" />
            <Bar dataKey="amt" stackId="a" fill="#82ca9d" />
            <Bar dataKey="uv" fill="#ffc658" />
        </BarChart>
    </ResponsiveContainer>
);
export default MixChart;
