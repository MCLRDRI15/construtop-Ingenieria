import { MainNavbar } from '@navbars';

export interface MainLayoutProps {
  children: any;
  currentPage: string;
  data: any;
}

export default function MainLayout({
  children,
  currentPage,
  data,
}: MainLayoutProps) {
  return (
    <>
      <div>
        <MainNavbar currentPage={currentPage} pageData={data} />
        {children}
      </div>
    </>
  );
}

