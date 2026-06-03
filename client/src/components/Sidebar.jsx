import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutDashboard, PlusCircle, Activity } from 'lucide-react';

const Sidebar = () => {
  const location = useLocation();
  const isActive = (path) => location.pathname === path ? 'bg-indigo-50 text-indigo-600 border-indigo-600' : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900 border-transparent';

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 overflow-y-auto bg-white border-r hidden lg:flex">
      <h2 className="text-3xl font-semibold text-center text-indigo-600">StartupLens</h2>
      <div className="flex flex-col justify-between mt-6 border-t pt-4">
        <aside>
          <ul>
            <li>
              <Link to="/" className={`flex items-center px-4 py-2 mt-2 text-gray-600 rounded-md border-l-4 ${isActive('/')}`}>
                <Home className="w-5 h-5" />
                <span className="mx-4 font-medium">Home</span>
              </Link>
            </li>
            <li>
              <Link to="/dashboard" className={`flex items-center px-4 py-2 mt-2 text-gray-600 rounded-md border-l-4 ${isActive('/dashboard')}`}>
                <LayoutDashboard className="w-5 h-5" />
                <span className="mx-4 font-medium">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link to="/submit" className={`flex items-center px-4 py-2 mt-2 text-gray-600 rounded-md border-l-4 ${isActive('/submit')}`}>
                <PlusCircle className="w-5 h-5" />
                <span className="mx-4 font-medium">Submit Idea</span>
              </Link>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};

export default Sidebar;
