import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";

export default function Container() {
  return (
    <div className="flex">
      <SideBar />
      <Outlet />
      {/* { isBillShow ?? <Bill/>} */}
    </div>
  );
}
