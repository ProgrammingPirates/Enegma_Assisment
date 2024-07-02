import React from 'react';

const RequestTable = ({ data }) => {
  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <input type="text" placeholder="Search" className="bg-gray-100 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600" />
        <select className="bg-gray-100 p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600">
          <option>Last 30 days</option>
          <option>Last 7 days</option>
          <option>Today</option>
        </select>
      </div>
      <table className="min-w-full bg-white rounded-lg shadow">
        <thead>
          <tr>
            <th className="p-2">ID</th>
            <th className="p-2">Req. ID</th>
            <th className="p-2">Req. Type</th>
            <th className="p-2">Req. Time</th>
            <th className="p-2">Content Type</th>
            <th className="p-2">IP Address</th>
            <th className="p-2">OS</th>
            <th className="p-2">User Agent</th>
          </tr>
        </thead>
        <tbody>
          {data.map(hit => (
            <tr key={hit.id}>
              <td className="p-2">{hit.id}</td>
              <td className="p-2">{hit.requestId}</td>
              <td className="p-2">{hit.requestType}</td>
              <td className="p-2">{hit.requestTime}</td>
              <td className="p-2">{hit.contentType}</td>
              <td className="p-2">{hit.ipAddress}</td>
              <td className="p-2">{hit.os}</td>
              <td className="p-2">{hit.userAgent}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RequestTable;
