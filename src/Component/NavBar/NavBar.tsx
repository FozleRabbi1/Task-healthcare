import "./navStyle.css";
const NavBar = () => {
  return (
    <div>
      <div className="custom-navbar-height navbar px-0 py-12 text-[#020043] text-[16px]">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>Service</a>
              </li>
              <li>
                <a>Blog</a>
              </li>
              <li>
                <a>About Us</a>
              </li>
            </ul>
          </div>
          <img
            className="w-[100px] md:w-[120px]"
            src="https://i.ibb.co/v1XtNH8/logo-dark.png"
            alt=""
          />
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Service</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
            <li>
              <a>About Us</a>
            </li>
          </ul>
        </div>

        <div className="navbar-end ">
          <button className=" flex justify-center items-center border border-[#343268] w-[150px] md:w-[174px] h-full rounded-xl py-2">
            <span>Appointment</span>
            <img
              className="size-3 ml-2"
              src="https://i.ibb.co/3v95y64/Arrow-1.png"
              alt=""
            />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
