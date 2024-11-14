import { Outlet } from 'react-router-dom';

import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';
import Copyright from '@atoms/Copyright/Copyright';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-custom-beige-500 dark:bg-custom-dark-500 sm:max-w-2xl md:max-w-4xl lg:max-w-5xl xl:max-w-6xl mx-auto">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer>
        <Copyright />
      </Footer>
    </div>
  );
};

export default Page;
