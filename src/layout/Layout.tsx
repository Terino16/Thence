
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

// interface LayoutProps {
//   children: ReactNode;
// }

const Layout = () => {
  return (
    <div className='p-4'>
      <Navbar />
      <Outlet/>
      <Footer />
    </div>
  );
};

export default Layout;