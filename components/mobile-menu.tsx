import Link from "next/link";
// import { useRouter } from "next/router";
import classNames from "classnames";
import { useState, FC } from "react";

const links: {
  title: string;
  href: string;
  icon: React.ReactNode;
  disabled?: boolean;
}[] = [];

import ModalComponent from "./modal";

const FullScreenMobileMenu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center cursor-pointer select-none w-[24px]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <ModalComponent isOpen={isOpen} onRequestClose={() => setIsOpen(false)}>
        <div className="flex flex-col">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="z-20 flex self-end items-center justify-center cursor-pointer select-none w-[24px]"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18 18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="absolute top-[20px] px-[20px] left-0 h-screen w-screen flex flex-col items-center justify-start">
            <div className="flex flex-col gap-3 w-full">
              <div className="pl-[10px]">{/* <WalletDetail /> */}</div>
              <div className="flex flex-col items-center w-full">
                {/* {PROFILE_POPOVER_LINKS({
                  translations,
                  isVerified: !!user?.ageVerified,
                }).map(({ title, href, icon }) => {
                  return (
                    <Link
                      href={href}
                      className={classNames(
                        "flex w-full items-center justify-start gap-2 rounded-[8px] p-3 text-left hover:bg-gray-1",
                        router.pathname === href &&
                          "hocus:bg-red-100 bg-red-100",
                      )}
                      key={href}
                    >
                      {icon}
                      {title}
                    </Link>
                  );
                })} */}
              </div>
            </div>

            {links.map(({ disabled, title, href, icon }) => {
              //   const highlight = router.pathname.includes(href);
              return (
                <Link
                  href={disabled ? "" : href}
                  className={classNames(
                    "flex w-full items-center justify-start gap-2 rounded-xl p-3 text-left"
                    // highlight && "hover:bg-pink-1 bg-pink-1",
                    // !disabled && !highlight && "hover:bg-gray-1"
                  )}
                  key={href}
                >
                  {icon}
                  {title}
                </Link>
              );
            })}
          </div>
        </div>
      </ModalComponent>
    </>
  );
};

export default FullScreenMobileMenu;
