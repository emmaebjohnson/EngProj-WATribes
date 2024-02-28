import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Featuring.css'
import MKTypography from 'components/MKTypography';
const NativePopulationBarGraph = () => {
  const America = [
    { name: 'OK', percentage: 14.2 },
    { name: 'AZ', percentage: 12.9 },
    { name: 'CA', percentage: 9.9 },
    { name: 'NM', percentage: 9.1 },
    { name: 'TX', percentage: 4.8 },
  ];
  const Alaska = [
    { name: 'AK', percentage: 77.1 },
    { name: 'WA', percentage: 6.0 },
    { name: 'CA', percentage: 2.5 },
    { name: 'OR', percentage: 1.8 },
    { name: 'TX', percentage: 1.4 },
  ];
  const Latin = [
    { name: 'CA', percentage: 32.7 },
    { name: 'TX', percentage: 11.6 },
    { name: 'NY', percentage: 8.1 },
    { name: 'IL', percentage: 6.3 },
    { name: 'FL', percentage: 4.6 },
  ];

  return (
    <div>
      <MKTypography
              variant="h1"
              color="black"
              textAlign = 'center'
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["2xl"],
                },
              })}
            > Percent of the Native Population in Each State</MKTypography>
            <br></br>
      <div className="chart-container">
        <div className="chart">
          <h2 style={{ textAlign: 'center' }}>American Indian</h2>
          <ResponsiveContainer width="100%" aspect={2}>
            <BarChart
              data={America}
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
              data={Alaska}
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
              data={Latin}
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
      
       <MKTypography variant="h3" color="black" align="center" opacity={0.8} mt={1} mb={3} style={{ marginTop: '20px' }}>
       Over half (50.9%) of the American Indian alone population lived in five states.
      </MKTypography>
    </div>
  );
};

export default NativePopulationBarGraph;
