import { Outlet } from 'react-router-dom';

import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col bg-gray-50 dark:bg-gray-800 px-4 md:px-16 lg:-x-32">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
