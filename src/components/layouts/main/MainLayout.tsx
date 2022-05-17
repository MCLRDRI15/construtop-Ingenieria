export interface MainLayoutProps {
  children: any;
  currentPage?: string;
  data?: any;
}

export default function MainLayout({
  children,
  currentPage,
  data,
}: MainLayoutProps) {
  return (
    <>
      <div className='fixed  bg-header-gray w-18 h-full z-50 border-r '>
        {/* <NavigationNavBar /> */}
      </div>
      <div>
        {/* <MainNavbarProjects currentPage={currentPage} pageData={data} /> */}
        {children}
      </div>
    </>
  );
}
