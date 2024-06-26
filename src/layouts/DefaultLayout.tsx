import Footer from '@/components/Footer';
import Header from '@/components/Header';
import NavigationBar from '@/components/NavigationBar';
import { Toaster } from '@/components/ui/toaster';
import { Outlet } from 'react-router-dom';

const DefaultLayout = () => {
    return (
        <div className="bg-primary text-primary-foreground h-screen grid grid-cols-12 grid-rows-12 span">
            <NavigationBar position="col-span-2 row-span-11" />
            <Header position="col-span-10 row-span-1" />
            <main className="col-span-10 row-span-10">
                <Outlet />
            </main>
            <Footer position="col-span-12 row-span-1" />
            <Toaster />
        </div>
    );
};

export default DefaultLayout;
