import React, { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";

const Header = ({ toggleTheme, theme }) => {
  const [isSideBar, setIsSidebar] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = useCallback(() => {
    setIsSidebar((prev) => !prev);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        setIsSidebar(false);
      }
    };

    if (isSideBar) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isSideBar]);

  return (
    <div className="sticky top-0 z-10">
      <div className="flex justify-center bg-background">
        <div className="mt-8 py-2 px-4 flex justify-between w-full max-w-[1280px]">
          <div className="hidden lg:flex gap-4">
            <button>About</button>
            <button>How it works</button>
            <Link className="flex items-center" href="#faq">
              FAQ
            </Link>
          </div>
          <div className="flex justify-center items-center">
            <h1>SanEdTech</h1>
          </div>
          <div className="gap-2 text-sm hidden lg:flex items-center">
            <span>Dark</span>
            <label className="flex cursor-pointer select-none items-center">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={theme === "light"}
                  onChange={toggleTheme}
                  className="sr-only"
                />
                <div className="box block h-8 w-14 rounded-full bg-secondary"></div>
                <div
                  className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-toggleOne to-toggleTwo transition ${
                    theme === "light" ? "translate-x-full" : ""
                  }`}
                ></div>
              </div>
            </label>
            <span>Light</span>
            <div className="border border-primary py-4 px-8 text-base rounded-lg hidden leading-4 lg:block">
              Get Matched
            </div>
          </div>
          <button
            onClick={toggleSidebar}
            className="inline-flex items-center p-2 mt-2 ms-3 text-sm rounded-lg lg:hidden"
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4 8H28"
                stroke="var(--ion-text-color)"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M5.59961 16H26.3996"
                stroke="var(--ion-text-color)"
                strokeWidth="2"
                strokeLinecap="square"
              />
              <path
                d="M4 24H28"
                stroke="var(--ion-text-color)"
                strokeWidth="2"
                strokeLinecap="square"
              />
            </svg>
          </button>

          {isSideBar && (
            <div
              ref={sidebarRef}
              className="fixed block lg:hidden top-0 right-0 z-40 p-0 w-[255px] h-screen transition-transform bg-sidebarBackground"
            >
              <div className="h-full text-right overflow-y-auto bg-gray-50">
                <div className="h-20 p-6 flex justify-end">
                  <h2>SanEdTech</h2>
                </div>
                <div className="flex flex-col w-full justify-center items-center">
                  <div className="flex w-full px-4 flex-col gap-5">
                    <div className="border w-full border-primary py-4 px-8 text-base rounded-lg text-center leading-4 lg:block">
                      Get Matched
                    </div>
                    <button className="text-base">About</button>
                    <button className="text-base">How it works</button>
                    <button className="text-base">FAQ</button>
                    <div className="w-full divider border-b-2 h-1 mt-2 mb-2" />
                    <button className="text-sm">Facebook</button>
                    <button className="text-sm">Instagram</button>
                    <button className="text-sm">X(Twitter)</button>
                    <button className="text-sm">LinkedIn</button>
                  </div>
                  <div className="flex text-base justify-center gap-1 p-10">
                    <span>Dark</span>
                    <label className="flex cursor-pointer select-none items-center">
                      <div className="relative">
                        <input
                          type="checkbox"
                          checked={theme === "light"}
                          onChange={toggleTheme}
                          className="sr-only"
                        />
                        <div className="box block h-8 w-14 rounded-full bg-secondary"></div>
                        <div
                          className={`absolute left-1 top-1 flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-toggleOne to-toggleTwo transition ${
                            theme === "light" ? "translate-x-full" : ""
                          }`}
                        ></div>
                      </div>
                    </label>
                    <span>Light</span>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
