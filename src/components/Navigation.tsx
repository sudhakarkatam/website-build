"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdowns, setOpenDropdowns] = useState<string[]>([]);
  const pathname = usePathname();

  const links = [
    { name: "About Us", href: "/about-us" },
    { name: "Business Partners", href: "/business-partners" },
    { name: "Global Presence", href: "/global-presence" },
    {
      name: "Our Products",
      href: "#",
      subItems: [
        { name: "Pharma", href: "/products/pharma" },
        { name: "Diagnostics", href: "/products/diagnostics" }
      ]
    },
    { name: "Newsroom", href: "/newsroom" },
    { name: "Careers", href: "/careers" },
  ];

  const toggleDropdown = (name: string) => {
    if (openDropdowns.includes(name)) {
      setOpenDropdowns(openDropdowns.filter(d => d !== name));
    } else {
      setOpenDropdowns([...openDropdowns, name]);
    }
  };

  return (
    <nav className="w-full bg-white z-50 relative shadow-sm border-t-[8px] border-[#f39c12]">
      <div className="max-w-[1920px] mx-auto h-[90px] lg:h-[100px] flex items-center justify-between px-6 md:px-12 lg:px-24">
        {/* Logo */}
        <div className="flex-shrink-0">
          <Link href="/" className="flex items-center py-2">
            <Image
              src="/rheo-pharma-logo-1.png"
              alt="Rheo Pharma Logo"
              width={160}
              height={55}
              className="h-[50px] lg:h-[60px] w-auto object-contain object-left"
              priority
            />
          </Link>
        </div>

        {/* Desktop Menu - Centered */}
        <div className="hidden lg:flex flex-1 items-center justify-center gap-6 xl:gap-8 ml-4">
          {links.map((link) => {
            if (link.subItems) {
              return (
                <div key={link.name} className="relative group h-full flex items-center cursor-pointer py-8">
                  <span className={`text-[15px] xl:text-[16px] font-medium transition-colors group-hover:text-[#f39c12] text-[#121f45]`}>
                    {link.name}
                  </span>
                  <div className="absolute left-1/2 -translate-x-1/2 w-48 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 top-[90px] lg:top-[100px] z-50">
                    {link.subItems.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-6 py-3 text-[14px] font-medium text-[#121f45] hover:text-[#f39c12] hover:bg-gray-50 border-b border-gray-50 last:border-none"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              );
            }

            return (
              <Link
                key={link.name}
                href={link.href}
                className={`text-[15px] xl:text-[16px] font-medium transition-colors hover:text-[#f39c12] ${pathname === link.href || pathname.startsWith(link.href + '/') ? "text-[#f39c12]" : "text-[#121f45]"
                  }`}
              >
                {link.name}
              </Link>
            );
          })}
          <Link
            href="/contact-us"
            className={`text-[15px] xl:text-[16px] font-medium transition-colors hover:text-[#f39c12] ${pathname === "/contact-us" ? "text-[#f39c12]" : "text-[#121f45]"
              }`}
          >
            Contact
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="flex items-center lg:hidden ml-auto">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg className="block h-8 w-8 text-[#121f45]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            ) : (
              <svg className="block h-8 w-8 text-[#121f45]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isOpen && (
          <div className="lg:hidden bg-white border-b border-gray-100 shadow-md absolute w-full top-[90px] lg:top-[100px] left-0 max-h-[80vh] overflow-y-auto z-40">
            <div className="px-4 pt-2 pb-6 space-y-2">
              {links.map((link) => {
                if (link.subItems) {
                  return (
                    <div key={link.name}>
                      <button
                        onClick={() => toggleDropdown(link.name)}
                        className={`w-full text-left px-3 py-2 rounded-md text-base font-bold transition-colors text-[#121f45] hover:bg-gray-50 flex justify-between items-center`}
                      >
                        {link.name}
                        <svg className={`h-4 w-4 transition-transform ${openDropdowns.includes(link.name) ? "rotate-180" : ""}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                        </svg>
                      </button>
                      {openDropdowns.includes(link.name) && (
                        <div className="pl-6 space-y-1 mt-1">
                          {link.subItems.map((subItem) => (
                            <Link
                              key={subItem.name}
                              href={subItem.href}
                              className={`block px-3 py-2 rounded-md text-sm font-medium transition-colors ${pathname === subItem.href ? "text-[#f39c12] bg-orange-50" : "text-gray-600 hover:bg-gray-50"
                                }`}
                              onClick={() => setIsOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${pathname === link.href ? "text-[#f39c12] bg-orange-50" : "text-[#121f45] hover:bg-gray-50"
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                );
              })}
              <Link
                href="/contact-us"
                className={`block px-3 py-2 rounded-md text-base font-bold transition-colors ${pathname === "/contact-us" ? "text-[#f39c12] bg-orange-50" : "text-[#121f45] hover:bg-gray-50"
                  }`}
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

