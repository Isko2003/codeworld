import logo from "../../assets/images/logo.png";
import style from "./header.module.css";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Haqqımızda" },
  { href: "/", label: "İxtisaslar" },
  { href: "/", label: "Təqaüdlər" },
  { href: "/", label: "Əlaqə" },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <header className={`${style.header} py-3 px-5 md:px-5`}>
      <div className="flex justify-between items-center">
        <div className={style.logo}>
          <img
            src={logo}
            alt="code-world-logo"
            className="object-cover cursor-pointer"
          />
        </div>

        {/* Links */}
        <nav className="hidden md:block">
          <ul
            className={`${style.lists} flex items-center gap-6 md:gap-4 lg:gap-6`}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <div
          className={`${style.buttonWrapper} rounded-[20px] py-3 px-5 min-w-[130px] h-11 font-medium text-xl hidden md:flex items-center justify-center`}
        >
          <button>Qeydiyyat</button>
        </div>
        {/* Hamburger Menu Icon */}
        <div className="md:hidden">
          <button className="md:hidden p-2" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <aside
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <div className="p-6">
          <div className="flex justify-end mb-8">
            <button onClick={toggleSidebar} className="p-2">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <nav>
            <ul className="space-y-6">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="block text-lg font-medium hover:text-blue-600 transition-colors"
                    onClick={toggleSidebar}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className={`${style.buttonWrapper} rounded-[20px] py-3 px-5 w-full h-11 flex items-center justify-center font-medium text-lg mt-8`}
            onClick={toggleSidebar}
          >
            Qeydiyyat
          </button>
        </div>
      </aside>

      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}
    </header>
  );
};

export default Header;
