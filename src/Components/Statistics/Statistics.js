import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Statistics.css'
const Statistics = () => {
    const data = [
        {
            name: 'React',
            total: 8
        },
        {
            name: 'Javascript',
            total: 9
        },
        {
            name: 'CSS',
            total: 8
        },
        {
            name: 'Git',
            total: 11
        },
    ]

    return (
        <div className=' align-items-center justify-content-center mt-5'>
            <div>
                <h3 className='logo'>Total Quize in Every Topics</h3>
            </div>
            <div className=' d-flex align-items-center justify-content-center mt-5'>
                <LineChart width={600} height={400} data={data}>
                    <Line type="monotone" dataKey="total" stroke="#82ca9d" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                </LineChart>
            </div>
        </div>
    );
};

export default Statistics;

