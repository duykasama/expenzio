import { Outlet } from "react-router-dom";

const DefaultLayout = () => {
    return (
        <div>
            <p>Header</p>
            <Outlet />
            <p>Footer</p>
        </div>
    );
}

export default DefaultLayout;