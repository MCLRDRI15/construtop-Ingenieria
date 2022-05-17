import { ArrowCircleLeftIcon } from '@heroicons/react/solid';
import { useState } from 'react';
import Image from 'next/image'
import construtop from '../../assets/construtop.jpeg'
import { CustomSidebarItem } from './SidebarItems';

export interface CustomMainNavbarProps {
  currentPage?: string;
}

export const CustomMainSideBar = ({ currentPage }: CustomMainNavbarProps) => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const Menu = [
        {title: 'Inicio', src: 'HomeIcon'},
        {title: 'Blog', src: 'BookOpenIcon', gap: true},
        {title: 'Nosotros', src: 'UserGroupIcon'},
        {title: 'Proyectos', src: 'BriefcaseIcon', gap: true},
        {title: 'Contacto', src: 'AnnotationIcon'}
    ];
    return (
        <div className="flex">
            <div className={`${openSidebar ? "w-72" : "w-20"} duration-300 h-screen p-5 pt-8 bg-dark-purple relative drop-shadow-lg`}>
                <ArrowCircleLeftIcon 
                className={`absolute cursor-pointer -right-3 top-12 w-8 border-2 rounded-full text-white border-dark-purple ${!openSidebar  && "rotate-180"}`}
                onClick={() => setOpenSidebar(!openSidebar)}
                />
                <div className={`flex gap-x-4 items-center border p-2 mr-2 rounded-3xl shadow-xl shadow-blue-300 ${!openSidebar && 'scale-0'}`}>
                    <div>
                        <Image
                        src={construtop}
                        alt="Picture of the author"
                        width="60px"
                        height="60px"
                        className='cursor-pointer duration-500 rounded-3xl'
                         />
                    </div>
                     <span className={`text-white origin-left font-medium text-2xl duration-300
                     ${!openSidebar && 'scale-0'}`}>
                        {currentPage}
                     </span>
                </div>
                <ul className={`${openSidebar ? "mt-12" : "mt-10"}`}>
                    {Menu.map((item, index) => (
                        <li key={`${index}-${item.title}`}
                            className={`text-white text-sm flex items-center cursor-pointer ${item.gap ? "mt-12" : "mt-2"}`}
                        >   
                        <CustomSidebarItem text={item.title} icon={item.src} openSidebar={openSidebar} />
                        </li>
                    ))  }
                </ul>
            </div>
            <div className='h-screen p-12 font-semibold text-black text-2xl flex-1'>
                <span className='relative right-3'>Construtop Ingenieria S.A.S</span>
            </div>
        </div>
      
    )
}

export default CustomMainSideBar;