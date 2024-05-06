/* eslint-disable react/prop-types */
import React, {useState} from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown"

function SideBarItems({ items, active }) {

  const [dropdown, setDropdown] = useState(false);

  return (
    <li
      className={`relative corner  items-center py-3 px-3 my-1 h-14 w-80 rounded-md transition-all ease-in-out  duration-500 ${
        active ? 'bg-white font-semibold ' : ''
      }`}
    >
      {items.submenu ? (
        <>
          <button
            type='button'
            aria-haspopup='menu'
            aria-expanded={dropdown ? 'true' : 'false'}
            onClick={() => setDropdown((prev) => !prev)}
            className='w-full flex gap-2'
          >
            {items.icon}
            {items.text}
          </button>
          <Dropdown submenus={items.submenu} dropdown={dropdown} />
        </>
      ) : (
        <Link className='w-full flex gap-2' to={items.path}>
          {items.icon}
          {items.text}
        </Link>
      )}
    </li>
  )
}

export default SideBarItems;
