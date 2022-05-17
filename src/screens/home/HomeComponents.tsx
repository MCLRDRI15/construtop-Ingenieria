import { useRouter } from 'next/router';
import Sidebar from 'src/components/sidebar/Sidebar'


export const HomeComponent = () => {
  const router = useRouter();
  return (
    <div className='h-screen relative overflow-hidden' style={{ background: 'linear-gradient(to right, #757f9a, #d7dde8)' }}>
      <Sidebar currentPage='Inicio'/>
    </div>
  );
};

export default HomeComponent;
