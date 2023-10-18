import React, { useState} from "react";
import classNames from "classnames";
import { RiSettingsLine } from "react-icons/ri";
import { BsArrowRightCircle } from "react-icons/bs";
import { DASHBOARD_SIDEBAR_LINKS } from "../../lib/consts/navigation";
import { Link, useLocation } from "react-router-dom";
import Profile from "../../lib/consts/Profile";

const linkClass =
  "flex items-center gap-2 font-light px-3 py-2 hover:bg-indigo-800 hover:no-underline active:bg-indigo-900 rounded-md text-base";

function SidebarLink({ item }) {
  const { pathname } = useLocation();
  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path
          ? "bg-indigo-900 text-white"
          : "text-neutral-400",
        linkClass
      )}
    >
      <span className="text-xl">{item.icon}</span>
      {item.label}
    </Link>
  );
}

const Sidebar = () => {

  const [open, setOpen ] =useState(true);
  return (
    

        <div className={`bg-indigo-950  flex flex-col text-white ${open ? "w-60" : "w-0" } ${open ? "p-3" : "p-0" } duration-300 relative `} >
          <BsArrowRightCircle className={`text-2xl text-indigo-950 bg-indigo-50 rounded-full absolute -right-3 top-9 cursor-pointer ${open && "rotate-180"} `} onClick={() => setOpen(!open)} />

          <Link to='/' className={`flex items-center gap-2 px-1 py-3 hover:no-underline duration-300 ${!open && "scale-0"}`} >
            <RiSettingsLine fontSize={24} className='text-white' />
            <span className={`text-neutral-100 text-lg font-bold`} >Dashboard</span>
          </Link>

          <div className={`flex-1 py-8 flex flex-col gap-2 duration-300 ${!open && "scale-0"}`} >
            {DASHBOARD_SIDEBAR_LINKS.map((item) => (
              <SidebarLink key={item.key} item={item} />
            ))}
          </div>

          <div className={`flex flex-col gap-0.5 bg-indigo-900 text-white items-center font-light px-1 py-1 mb-2 rounded-md text-base duration-300 ${!open && "scale-0"}`} >
            <Profile />
          </div>

        </div>
      )
    }


export default Sidebar;
