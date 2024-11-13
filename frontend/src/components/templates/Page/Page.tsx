import { Outlet } from 'react-router-dom';

import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col bg-custom-beige-500 dark:bg-custom-dark-500 max-w-6xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
