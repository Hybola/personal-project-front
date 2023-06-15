import { Link } from "react-router-dom";
import { MenuIcon, BillIcon, DinnerTableIcon, RestaurantIcon } from "../icons";
import { useAuth } from "../contexts/authContext";
// import { HomeModernIcon } from "../icons";

export default function SideBar() {
  const { user, logout } = useAuth();

  return (
    <>
      <div>
        <div
          id="sidebar"
          className="bg-[#A4D0A4] h-screen md:block shadow-xl px-3 w-30 md:w-60 lg:w-60 overflow-x-hidden transition-transform duration-300 ease-in-out"
          x-show="sidenav">
          <div className="space-y-6 md:space-y-10 mt-10">
            <h1 className="font-bold text-4xl text-center md:hidden">
              D<span className="text-teal-600">.</span>
            </h1>
            <h1 className="hidden md:block  text-teal-600 font-bold text-sm md:text-xl text-center">
              {user.restaurantName}
            </h1>
            <div id="profile" className="space-y-3">
              <img
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt="Avatar user"
                className="w-10 md:w-16 rounded-full mx-auto"
              />
              <div>
                <h2 className="font-medium text-xs md:text-sm text-center text-teal-500">
                  {user.name}
                </h2>
                <p className="text-xs text-gray-500 text-center">
                  Administrator ID:{user.id}
                </p>
              </div>
            </div>

            <div
              id="menu"
              className="flex flex-col justify-between space-y-2 h-96">
              <div className="flex flex-col ">
                <Link
                  to="/"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:text-base rounded-md transition duration-150 ease-in-out">
                  <MenuIcon className="w-10 h-10 fill-current inline-block mx-5" />
                  <span className="">Menu</span>
                </Link>

                <Link
                  to="/order"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                  <BillIcon className="w-10 h-10 fill-current inline-block mx-5" />
                  <span className="">Orders</span>
                </Link>

                <Link
                  to="/edit"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                  <DinnerTableIcon className="w-10 h-10 fill-current inline-block mx-5" />
                  <span className="">Edit Menus</span>
                </Link>

                <Link
                  to="/profile"
                  className="text-sm font-medium text-gray-700 py-2 px-2 hover:bg-teal-500 hover:text-white hover:scale-105 rounded-md transition duration-150 ease-in-out">
                  <RestaurantIcon className="w-10 h-10 fill-current inline-block mx-5" />
                  <span className="">Profile</span>
                </Link>
              </div>

              <button className="btn btn-active" onClick={logout}>
                log out
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
