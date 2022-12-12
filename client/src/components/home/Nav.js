import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";

const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  return (
    <>
      <nav className="nav">
        <div className="my-container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src="/logo.svg"
                className="pt-2 w-32 h-32 object-cover "
                alt="logo"
              />
            </Link>
            <ul className="flex items-center">
              <li className="nav-li cursor-pointer">
                <FcSearch size={28} />
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
                <Link to="cart">
                  <TiShoppingCart size={29} />
                  <span className="nav-circle">10</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
export default Nav;
