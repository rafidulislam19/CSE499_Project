import { Link } from "react-router-dom";
import { FcSearch } from "react-icons/fc";
import { TiShoppingCart } from "react-icons/ti";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import Search from "./Search";
import { toggleSearchBar } from "../../store/reducers/globalReducer";
const Nav = () => {
  const { userToken, user } = useSelector((state) => state.authReducer);
  const { searchBar } = useSelector((state) => state.globalReducer);
  const { items, total } = useSelector((state) => state.cartReducer);
  console.log(total);
  const dispatch = useDispatch();
  return (
    <>
      <nav className="nav">
        <div className="my-container">
          <div className="flex justify-between items-center">
            <Link to="/">
              <img
                src="/logo.svg"
                className="object-cover pt-2 w-32 h-32"
                alt="logo"
              />
            </Link>
            <ul className="flex items-center">
              <li className="nav-li cursor-pointer">
                <FcSearch
                  size={28}
                  onClick={() => dispatch(toggleSearchBar())}
                />
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
            </ul>
          </div>
        </div>
      </nav>
      <Search />
    </>
  );
};
export default Nav;
