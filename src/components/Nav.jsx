import React from "react";
import headerLogo from "../assets/images/header-logo.svg";
import { navLinks } from "../constants";
import { hamburger } from "../assets/icons";

const Nav = () => {
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={140} height={35} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
            {navLinks.map((items)=>(
                <li key={items.label}>
                    <a href={items.href} className="font-montserrat leading-normal text-lg text-slate-gray">
                        {items.label}
                    </a>
                </li>
            ))}
        </ul>
        <div className="hidden max-lg:block">
            <img src={hamburger} alt="hamburger" width={25} height={25}/>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
