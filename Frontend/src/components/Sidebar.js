import React from 'react';

const Sidebar = () => {
  return (
    <div className="w-64 bg-#6613ed-700 text-#7115cc flex flex-col">
      <div className="flex items-center justify-center h-20 border-b border-purple-600">
        <h1 className="text-2xl font-bold">API Dashboard</h1>
      </div>
      <ul className="flex-1 p-4">
        <li className="mb-4"><a href="#" className="flex items-center p-2 rounded hover:bg-purple-600">Dashboard</a></li>
        <li className="mb-4"><a href="#" className="flex items-center p-2 rounded hover:bg-purple-600">Product</a></li>
        <li className="mb-4"><a href="#" className="flex items-center p-2 rounded hover:bg-purple-600">Customers</a></li>
        <li className="mb-4"><a href="#" className="flex items-center p-2 rounded hover:bg-purple-600">Income</a></li>
        <li className="mb-4"><a href="#" className="flex items-center p-2 rounded hover:bg-purple-600">Promote</a></li>
        <li className="mb-4"><a href="#" className="flex items-center p-2 rounded hover:bg-purple-600">Help</a></li>
      </ul>
      <div className="p-4">
        <button className="w-full bg-#c00fe8-600 p-2 rounded text-#9d02fd hover:bg-#2388ee-500">Get Pro Now!</button>
      </div>
    </div>
  );
};

export default Sidebar;
