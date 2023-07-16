import { Link } from "react-router-dom";

const Sidebar = ({ side, closeSidebar }) => {
  return (
    <div
      className={`fixed top-0 ${side} sm:left-0 w-64 h-screen bg-gray-800 z-10 transition-all`}
    >
      <i
        className="bi bi-x-lg absolute top-4 right-4 text-white sm:hidden block cursor-pointer text-lg"
        onClick={closeSidebar}
      ></i>
      <div
        className="
             w-32 h-32 ml-14"
      >
        <img src="/logo1.svg" alt="logo" />
      </div>
      <ul className="mt-10">
        <li className="px-10 py-3 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-card-list mr-2 ml-6 inline-block text-2xl"></i>{" "}
          <Link to="/dashboard/products" className="text-xl capitalize">
            products
          </Link>
        </li>
        <li className="px-10 py-3 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bag-check mr-2 ml-6 inline-block text-2xl"></i>{" "}
          <Link to="/dashboard/orders" className="text-xl capitalize">
            orders
          </Link>
        </li>
        {/* <li className="px-10 py-3 cursor-pointer transition-all text-white flex items-center">
          <i className="bi bi-people-fill mr-2 inline-block text-lg"></i>{" "}
          <Link to="/dashboard/products" className="text-base capitalize">
            customers
          </Link>
        </li> */}
        <li className="px-10 py-3 cursor-pointer transition-all text-white flex items-center hover:bg-gray-600">
          <i className="bi bi-bar-chart mr-2 ml-6 inline-block text-2xl"></i>{" "}
          <Link to="/dashboard/categories" className="text-xl capitalize">
            categories
          </Link>
        </li>
      </ul>
    </div>
  );
};
export default Sidebar;
