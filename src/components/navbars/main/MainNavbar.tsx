import { useRef, useState } from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import { MenuIcon } from "@heroicons/react/solid";
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
    <nav className="lg:p-3 z-40 sticky top-0 lg:bg-gray-50 shadow-md w-full">
      <div className="lg:flex justify-around lg:h-20">
        <div className="lg:border lg:rounded-3xl lg:shadow bg-white items-center p-1">
          <div className="flex justify-around items-center lg:w-72">
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
              <div className="lg:hidden">
                <MenuIcon
                  className="w-6"
                  onClick={() => setIsActiveNav(!isActiveNav)}
                />
              </div>
            }
          </div>
        </div>
        <div
          id="navbar-menu"
          className={
            isActiveNav
              ? "lg:flex focus:outline-none text-center items-center ease-in transition-all duration-300"
              : "hidden transition-all duration-300 ease-in lg:inline-flex"
          }
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
