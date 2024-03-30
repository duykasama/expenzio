import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import PrivateRoute from "./privateRoute";
import DefaultLayout from "@/layouts/DefaultLayout";
import TodayExpenses from "./todayExpenses";
import Login from "./login";
import NotFound from "./404";

const RouterComponent = () => {
    const privateRoutes = [
        {
            index: true,
            path: 'today-expenses',
            component: <TodayExpenses />,
            exact: true,
            restrict: true
        }
    ];

    const publicRoutes = [
        {
            index: true,
            path: 'login',
            component: <Login />,
            exact: true,
            restrict: true
        },
        {
            index: true,
            path: '*',
            component: <NotFound />,
            exact: true,
            restrict: true
        }
    ];

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Navigate to={'today-expenses'} />} />
                <Route path="/" element={<PrivateRoute />}>
                    <Route element={<DefaultLayout />}>
                        {
                            privateRoutes.map((route) => (
                                <Route 
                                    index={route.index}
                                    key={route.path}
                                    path={route.path}
                                    element={route.component} />
                            ))
                        }
                    </Route>
                </Route>
                <Route element={<DefaultLayout />}>
                    {
                        publicRoutes.map((route) => (
                            <Route
                                index={route.index}
                                key={route.path}
                                path={route.path}
                                element={route.component} />
                        ))
                    }
                </Route>
            </Routes>
        </BrowserRouter>

    );
};

export default RouterComponent;