import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="sticky top-0 bg-white border-b border-gray-200 z-30">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center">
          <button className="text-gray-500 focus:outline-none lg:hidden">
            <Menu className="w-6 h-6" />
          </button>
          <h1 className="text-2xl font-bold text-indigo-600 ml-4 lg:hidden">StartupLens Lite</h1>
        </div>
        <div className="flex items-center">
          <Link to="/submit" className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700">
            Analyze New Idea
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
