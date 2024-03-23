import Footer from "@/components/footer";
import Header from "@/components/header";
import NavigationBar from "@/components/navigationBar";
import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div className="bg-primary text-primary-foreground h-screen grid grid-cols-12 grid-rows-12 span">
            <NavigationBar position="col-span-2 row-span-11"/>
            <Header position="col-span-10 row-span-1"/>
            <Outlet />
            <Footer position="col-span-12 row-span-1"/>
        </div>
    );
}

export default DefaultLayout;