import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';
import Sidebar from './components/Sidebar';
import SummaryCard from './components/SummaryCard';
import SearchBar from './components/SearchBar';
import RequestTable from './components/RequestTable';

const App = () => {
  const [apiHits, setApiHits] = useState([]);
  const [pieData, setPieData] = useState([]);
  const [barData, setBarData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/hits')
      .then(response => {
        setApiHits(response.data);

        // Process data for the pie chart (browser requests)
        const browserCounts = response.data.reduce((acc, hit) => {
          acc[hit.userAgent] = (acc[hit.userAgent] || 0) + 1;
          return acc;
        }, {});
        const browserData = Object.keys(browserCounts).map(key => ({
          name: key,
          value: browserCounts[key]
        }));
        setPieData(browserData);

        // Process data for the bar chart (request types)
        const requestTypeCounts = response.data.reduce((acc, hit) => {
          acc[hit.requestType] = (acc[hit.requestType] || 0) + 1;
          return acc;
        }, {});
        const requestData = Object.keys(requestTypeCounts).map(key => ({
          name: key,
          value: requestTypeCounts[key]
        }));
        setBarData(requestData);
      })
      .catch(error => console.log(error));
  }, []);

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 p-6 bg-gray-100">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-semibold">Hello Evano 👋🏼</h1>
          <SearchBar />
        </div>
        <div className="grid grid-cols-3 gap-6 mb-6">
          <SummaryCard title="Total Requests" value="120k" />
          <SummaryCard title="Avg. Response Time" value="1.2s" />
          <SummaryCard title="Failed Requests" value="178" />
        </div>
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Request Type</h2>
            <BarChart width={500} height={300} data={barData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#8884d8" />
            </BarChart>
          </div>
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Browser</h2>
            <PieChart width={400} height={400}>
              <Pie data={pieData} dataKey="value" cx="50%" cy="50%" outerRadius={100} fill="#8884d8" label>
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-xl font-semibold mb-4">Requests</h2>
          <RequestTable data={apiHits} />
        </div>
      </div>
    </div>
  );
};

export default App;
