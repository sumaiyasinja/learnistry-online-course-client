import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showUsername, setShowUsername] = useState(false);

  const handleSignOut = () => {
    logOut()
      .then(() => {
        console.log("Sign out successful");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const NavLinks = (
    <>
      <NavLink
        to="/"
        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
      >
        Home
      </NavLink>
      <NavLink
        to="/find-tutors"
        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
      >
        Find tutors 
      </NavLink>
      <NavLink
        to="/add-tutorials"
        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
      >
        Add tutorials 
      </NavLink>
      <NavLink
        to={`/my-tutorials/${user?.email}`}
        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
      >
        My Tutorials 
      </NavLink>
      <NavLink
        to={`/my-booked-tutors/${user?.email}`}
        className="hover:underline hover:underline-offset-4 hover:w-fit transition-all duration-100 ease-linear"
      >
        My Booked Tutors
      </NavLink>
      

    </>
  );

  return (
    <div className="top-0 py-1 lg:py-2 w-full bg-transparent lg:relative z-50 dark:bg-gray-900">
      <nav className="z-10 sticky top-0 left-0 right-0 max-w-5xl xl:max-w-7xl mx-auto px-5 py-2.5 lg:border-none lg:py-4">
        <div className="flex items-center justify-between">
          <button>
            <div className="flex items-center space-x-2">
              <h2 className="text-black dark:text-white font-bold text-2xl">
                Learn<span className="text-amber-800">istry</span>
              </h2>
            </div>
          </button>

          {/* Desktop Nav */}
          <div className="hidden lg:block">
            <ul className="flex space-x-10 text-base font-bold text-black/60 dark:text-white">
              {NavLinks}
            </ul>
          </div>

          {/* Desktop Auth Buttons */}
          {user ? (
            <div className="hidden lg:flex lg:items-center gap-x-2">
             <div className="relative">
  {/* User Profile Picture and Name */}
  <div onClick={() => setShowUsername((prev) => !prev)} 
  className=" rounded-full"
  >

  <img
    src={user?.photoURL}
    alt={user?.displayName}
    className="w-10 h-10  rounded-full cursor-pointer"
    // onClick={() => setShowUsername((prev) => !prev)}
    />
    </div>
  
  {showUsername && (
    <div className="absolute right-0 mt-2 px-2 rounded-2xl  border bg-amber-100 border-gray-200 dark:border-gray-700 shadow-lg py-1 z-20">
      <p className="block px-2 text-sm text-gray-700 dark:text-white">
         {user?.displayName}
      </p>
    </div>
  )}
</div>

              <button
                onClick={handleSignOut}
                className="flex items-center cursor-pointer justify-center rounded-md bg-amber-800 hover:bg-white hover:text-amber-800 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="hidden lg:flex lg:items-center gap-x-2">
              <NavLink
                to="/register"
                className="flex items-center text-black dark:text-white justify-center px-6 py-2.5 rounded-md hover:bg-amber-800 hover:text-white font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                Sign up
              </NavLink>
              <NavLink
                to="/login"
                className="flex items-center justify-center rounded-md bg-amber-800 hover:bg-white hover:text-amber-800 text-white px-6 py-2.5 font-semibold hover:shadow-lg hover:drop-shadow transition duration-200"
              >
                Sign in
              </NavLink>
            </div>
          )}

          {/* Mobile Toggle Button */}
          <div className="flex items-center justify-center lg:hidden">
            <button
              className="focus:outline-none text-slate-800 dark:text-white"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <svg
                className="text-2xl"
                fill="currentColor"
                viewBox="0 0 20 20"
                height="1em"
                width="1em"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className="lg:hidden mt-4 space-y-3 text-black dark:text-white font-semibold">
            <div className="flex flex-col space-y-2">{NavLinks}</div>
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              {user ? (
                <button
                  onClick={handleSignOut}
                  className="w-full text-left text-white bg-amber-800 hover:bg-white hover:text-amber-800 px-4 py-2 rounded-md transition duration-200"
                >
                  Sign Out
                </button>
              ) : (
                <div className="flex flex-col space-y-2">
                  <NavLink
                    to="/register"
                    className="block px-4 py-2 hover:bg-amber-800 hover:text-white rounded-md"
                  >
                    Sign up
                  </NavLink>
                  <NavLink
                    to="/login"
                    className="block px-4 py-2 bg-amber-800 text-white hover:bg-white hover:text-amber-800 rounded-md"
                  >
                    Sign in
                  </NavLink>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;