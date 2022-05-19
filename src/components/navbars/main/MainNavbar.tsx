import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MenuIcon, XIcon } from "@heroicons/react/solid";
import construtop from "../../../assets/ConstrutopIng.png";
import { MainNavbarItem } from "@navbars";

export interface CustomMainNavbarProps {
  currentPage?: string;
  pageData?: any;
}

export const CustomMainNavbar = ({ currentPage }: CustomMainNavbarProps) => {
  const dropdownRef = useRef(null);
  const router = useRouter();
  const pageStore = [
    { title: "inicio", src: "HomeIcon" },
    { title: "blog", src: "BookOpenIcon", gap: true },
    { title: "nosotros", src: "UserGroupIcon" },
    { title: "proyectos", src: "BriefcaseIcon", gap: true },
    { title: "contacto", src: "AnnotationIcon" },
  ];

  const [isActiveNav, setIsActiveNav] = useState(false);

  const handlePages = (text: string, src?: string) => {
    if (text == "inicio") {
      router.push("/");
    } else {
      router.push(`/${text.toLowerCase()}`);
    }
  };

  return (
    <nav className="fixed top-0 left-0 shadow-md w-full">
      <div className="md:flex items-center justify-between bg-gray-50 md:py-4 md:px-10">
        <div className="md:border md:rounded-3xl shadow bg-white items-center p-1 z-40">
          <div className="flex justify-around md:shadow-none items-center md:w-60 lg:w-72">
            <div>
              <Image height={70} width={70} src={construtop} alt="Construtop" />
            </div>
            <div className="relative right-4 z-40">
              <div className="flex flex-col justify-between items-center">
                <span className="text-gray-300 font-serif text-xs font-medium">
                  Pagina:
                </span>
                <span className="text-yellow-500 font-serif text-2xl font-medium">
                  {currentPage}
                </span>
              </div>
            </div>
            {
              <div className="md:hidden">
                {!isActiveNav ? (
                  <MenuIcon
                    className="w-6 cursor-pointer"
                    onClick={() => setIsActiveNav(!isActiveNav)}
                  />
                ) : (
                  <XIcon
                    className="w-6 cursor-pointer"
                    onClick={() => setIsActiveNav(!isActiveNav)}
                  />
                )}
              </div>
            }
          </div>
        </div>
        <div
          id="navbar-menu"
          className={`md:flex md:items-center focus:outline-none text-center items-center absolute md:static md:z-auto left-0 w-full md:w-auto transition-all duration-500 ease-in ${
            isActiveNav ? "left-0 opacity-100" : "left-[-490px] opacity-0"
          } md:opacity-100 `}
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
          ref={dropdownRef}
        >
          {pageStore.map(({ title, src }) => (
            <MainNavbarItem
              id={title}
              key={title}
              text={title}
              icon={src}
              iconSize={20}
              onClick={() => handlePages(title, src)}
            />
          ))}
        </div>
      </div>
    </nav>
  );
};

export default CustomMainNavbar;
