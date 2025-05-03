import Logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import Auth from "../Authentication/Auth";

const Header = () => {
  return (
    <div className="bg-blue-500 text-white h-[70px] flex items-center justify-between px-[20%]">
      <div className="logo">
        <Link to="/">
          <img src={Logo} alt="Logo" className="h-15 w-15" />
        </Link>
      </div>
      <div className="nav-links flex items-center gap-5 text-lg font-normal">
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
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-shopping-cart-icon lucide-shopping-cart"
                >
                  <circle cx="8" cy="21" r="1" />
                  <circle cx="19" cy="21" r="1" />
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
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-x-icon lucide-x"
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

        <Auth />
      </div>
    </div>
  );
};

export default Header;
