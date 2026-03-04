import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        <h1 className="text-xl font-semibold text-gray-800">
          <a href="/">CS — Ticket System</a>
        </h1>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Changelog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Download</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium">
            + New Ticket
          </button>
        </nav>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-2xl text-gray-700"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-2">
          <a href="#" className="text-gray-700 hover:text-gray-900">Home</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">FAQ</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Changelog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Blog</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Download</a>
          <a href="#" className="text-gray-700 hover:text-gray-900">Contact</a>

          <button className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md font-medium w-fit">
            + New Ticket
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;