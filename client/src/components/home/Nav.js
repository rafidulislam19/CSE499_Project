import { Link } from "react-router-dom";
import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Search from "./Search";
import "./nav.css";
import { toggleSearchBar } from "../../store/reducers/globalReducer";
const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  const { searchBar } = useSelector((state) => state.globalReducer);
  const { items, total } = useSelector((state) => state.cartReducer);
  console.log(total);
  const dispatch = useDispatch();
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };
  return (
    <>
      <nav className="nav">
        <div className="my-container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src="/logo.svg"
                className="object-cover pt-2 w-24 h-24"
                alt="logo"
              />
            </Link>
            <div className="header2">
              <div className="nav2" ref={navRef}>
                <ul className="flex items-center">
                  <li className="nav-li cursor-pointer">
                    <FiSearch
                      size={26}
                      onClick={() => dispatch(toggleSearchBar())}
                    />

                    {/* <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form> */}
                  </li>

                  <li className="nav-li cursor-pointer">
                    <Link to="/">
                      <h4>Home</h4>
                    </Link>
                  </li>

                  {userToken ? (
                    <li className="nav-li">
                      <Link to="/user" className="nav-link">
                        {user?.name}
                      </Link>
                    </li>
                  ) : (
                    <li className="nav-li">
                      <Link to="/login" className="nav-link">
                        sign in
                      </Link>
                    </li>
                  )}
                  <li className="nav-li relative">
                    <Link to="/cart">
                      <TiShoppingCart size={30} />
                      <span className="nav-circle">{items}</span>
                    </Link>
                  </li>
                  <li className="nav-li cursor-pointer">
                    <Link to="/about">
                      <h4>About Us</h4>
                    </Link>
                  </li>
                  <li className="nav-li cursor-pointer">
                    <Link to="/customer-service">
                      <h4>Customer Service</h4>
                    </Link>
                  </li>
                </ul>
                <button className="nav-btn nav-close-btn" onClick={showNavbar}>
                  <FaTimes />
                </button>
              </div>
              <button className="nav-btn" onClick={showNavbar}>
                <FaBars />
              </button>
            </div>
          </div>
        </div>
      </nav>
      <Search />
    </>
  );
};
export default Nav;
