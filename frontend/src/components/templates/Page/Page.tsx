import { Outlet } from 'react-router-dom';

import Header from '@organisms/Header/Header';
import Footer from '@organisms/Footer/Footer';

const Page = () => {
  return (
    <div className="h-full w-full flex flex-col bg-custom-beige dark:bg-custom-navy max-w-6xl mx-auto">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Page;
