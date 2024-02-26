import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Featuring.css'
const NativePopulationBarGraph = () => {
  const data = [
    { name: 'OK', percentage: 14.2 },
    { name: 'AZ', percentage: 12.9 },
    { name: 'CA', percentage: 9.9 },
    { name: 'NM', percentage: 9.1 },
    { name: 'TX', percentage: 4.8 },
  ];

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>% of the Native Population in Each State</h1>
      <div className="chart-container">
        <div className="chart">
          <h2 style={{ textAlign: 'center' }}>American Indian</h2>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentage" fill="#8884d8" name="% of Population" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h2 style={{ textAlign: 'center' }}>Alaska Native</h2>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentage" fill="#82ca9d" name="% of Population" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="chart">
          <h2 style={{ textAlign: 'center' }}>Latin American Indian</h2>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              data={data}
              margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="percentage" fill="#ffc658" name="% of Population" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
      <p style={{ marginTop: '20px' }}>Over half (50.9%) of the American Indian alone population lived in five states.
       <br></br>*data taken from <a href="https://www.census.gov/library/stories/2023/10/2020-census-dhc-a-aian-population.html">https://www.census.gov/library/stories/2023/10/2020-census-dhc-a-aian-population.html</a></p>
    </div>
  );
};

export default NativePopulationBarGraph;
