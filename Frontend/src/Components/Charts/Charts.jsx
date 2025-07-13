import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import './Charts.css';

const COLORS = ['#FF6384', '#36A2EB', '#FFCE56', '#4CAF50', '#8E44AD'];

const Charts = ({ data }) => {
  const aggregated = data.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + Number(item.amount);
    return acc;
  }, {});

  const chartData = Object.entries(aggregated).map(([cat, amt]) => ({
    name: cat,
    value: amt,
  }));

  return (
    <div className="charts">
      <PieChart width={300} height={300}>
        <Pie data={chartData} dataKey="value" outerRadius={100} label>
          {chartData.map((_, index) => (
            <Cell key={index} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </div>
  );
};

export default Charts;

