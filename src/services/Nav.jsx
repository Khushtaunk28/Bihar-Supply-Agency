import React from 'react';
import { navLinks } from '../constants';
import { boltnut } from '../assets/images';
import { arrowRight, hamburger } from '../assets/icons';
import { useState } from 'react';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hamimage, setHamimage] = useState(hamburger);
  const [showallproducts, setshowallproducts] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
    setHamimage(isOpen ? hamburger : arrowRight);
  };

  return (
    <header className="padding-x py-8 absolute z-10 w-full flex-wrap">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={boltnut} width={30} height={30} alt="bsaimg" />
          <h1 className="text-red-500 font-bold font-montserrat">BSA</h1>
        </a>
        <ul className="flex-1 flex justify-center gap-16 max-lg:hidden">
          {navLinks.map((links) => (
            <li key={links.label}>
              {links.label === 'Products' ? (
                <div
                  onMouseEnter={() => setshowallproducts(true)}
                  onMouseLeave={() => setshowallproducts(false)}
                  className="relative group"
                >
                  <div>
                    <a
                      className="text-slate-gray font-montserrat text-lg hover:text-coral-red"
                      href={links.href}
                    >
                      {links.label}
                    </a>
                    {showallproducts && (
                      <div className="absolute bg-white border border-gray-200 shadow-lg mt-2 rounded-md w-48 z-10">
                        <ul>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              Bolt
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              Nut
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              Washer
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              BOLT-NUT-WASHER (Set)
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
                            >
                              Fastener
                            </a>
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <a
                  className="text-slate-gray font-montserrat text-lg hover:text-coral-red"
                  href={links.href}
                >
                  {links.label}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="hidden max-lg:block">
          <button onClick={toggleNav}>
            <img src={hamimage} alt="hamburger" width={25} height={25} />
          </button>
        </div>
      </nav>
      {isOpen && (
        <div className="flex basis-full flex-col bg-transparent items-end gap-3 relative">
          {navLinks.map((links) => (
            <a
              key={links.label}
              className="text-slate-gray hover:text-coral-red font-montserrat text-lg flex"
              href={links.href}
            >
              {links.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
};

export default Nav;
