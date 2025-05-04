import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Auth from "../Authentication/Auth";
import { useContext } from "react";
import { authContext } from "../context/Authprovider";

const Header = () => {
  const { user, logout } = useContext(authContext);

  return (
    <div className="bg-gradient-to-r fixed w-full from-blue-500/95 to-blue-500/95 ring-1 ring-black/5 text-white h-[70px] flex items-center justify-between lg:px-[20%] px-[5%] shadow-xl">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-15 w-15" />
        </Link>
      </div>
      <div className="nav-links flex items-center gap-3 text-lg font-normal">
        <Link to="/courses">Courses</Link>
        <Link to="/support">Support</Link>
        {/* The button to open modal */}
        <label htmlFor="my_modal_6" className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </label>

        {/* Put this part before </body> tag */}
        <input type="checkbox" id="my_modal_6" className="modal-toggle" />
        <div className="modal bg-white text-black" role="dialog">
          <div className="modal-box">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-medium flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-shopping-cart-icon lucide-shopping-cart"
                >
                  <circle cx="8" cx="21" r="1" />
                  <circle cx="19" cx="21" r="1" />
                  <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
                </svg>
                Cart (0 Items )
              </h3>
              <label htmlFor="my_modal_6" className="cursor-pointer">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-x-icon lucide-x"
                >
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </label>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="py-4">There are no items in your cart</p>
              <Link to="/courses" className="btn btn-primary cursor-pointer">
                Browse Courses
              </Link>
            </div>
          </div>
        </div>

        {!user ? (
          <div className="z-50">
            <Auth />
          </div>
        ) : (
          <div className="dropdown dropdown-end text-black">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="Tailwind CSS Navbar component"
                  src="https://i.ibb.co.com/yQGvpKV/user-icon-on-transparent-background-free-png.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <button className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </button>
              </li>
              <li>
                <button>Settings</button>
              </li>
              <li>
                <button onClick={logout}>Logout</button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
