import React from 'react'

function Navbar() {
    return (
        <nav className="flex justify-between items-center p-6 bg-gray-100">
          <div className="flex items-center space-x-4">
            <ul className="ml-[800px] hidden md:flex space-x-8 text-gray-600">
              <li><a href="#" className="hover:underline w-24">Pricing</a></li>
              <li><a href="#" className="hover:underline w-24">Solutions</a></li>
              <li><a href="#" className="hover:underline w-24">Community</a></li>
              <li><a href="#" className="hover:underline w-24">Resources</a></li>
              <li><a href="#" className="hover:underline w-24">Contact</a></li>
            </ul>
          </div>
          <div className="flex items-center space-x-4">
            <button className="px-4 py-2  text-gray-600 rounded-xl hover:bg-gray-500 hover:text-white">Sign In</button>
            <button className="px-4 py-2 bg-black text-white rounded-xl">Register</button>
          </div>
        </nav>
      );
}

export default Navbar