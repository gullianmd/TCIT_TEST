import { Link } from "react-router";

const NavBar = () => (
  <nav className="bg-cyan-600 border-gray-400 mb-2">
    <div className="flex justify-center p-1">
      <SmMenu />
      <MdMenu />
      <XlMenu />
    </div>
  </nav>
);

const SmMenu = () => (
  <div className="flex md:hidden items-center justify-between w-full">
    <ul className="font-normal text-sm text-white flex flex-row">
      <li>
        <Link to="/" className="block py-1 px-2">Home</Link>
      </li>
    </ul>
    <div className="ml-auto font-medium text-base text-white">
      <span className="block py-1 px-2">Prueba TCIT - Gullian Mardones</span>
    </div>
  </div>
);

const MdMenu = () => (
  <div className="hidden md:flex xl:hidden items-center justify-between w-full">
    <ul className="font-medium text-base text-white flex flex-row text">
      <li>
        <Link to="/" className="block py-1 px-2">Home</Link>
      </li>
    </ul>
    <div className="ml-auto font-medium text-base text-white">
      <span className="block py-1 px-2">Prueba TCIT - Gullian Mardones</span>
    </div>
  </div>
);

const XlMenu = () => (
  <div className="hidden xl:flex items-center justify-between w-full">
    <ul className="font-medium text-base text-white flex flex-row items-center justify-center space-x-4">
      <li>
        <Link to="/" className="block py-1 px-2">Home</Link>
      </li>
    </ul>
    <div className="ml-auto font-medium text-base text-white">
      <span className="block py-1 px-2">Prueba TCIT - Gullian Mardones</span>
    </div>
  </div>
);

export default NavBar;
