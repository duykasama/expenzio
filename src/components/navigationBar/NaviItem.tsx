import { Link } from 'react-router-dom';
import { RouteItem } from '.';
import { useRef } from 'react';

const NavItem = ({icon, alt, to, text}: RouteItem) => {
    const ref = useRef<HTMLAnchorElement>(null);
    return (
        <div className="flex items-center gap-2 py-2 px-6 rounded-md cursor-pointer hover:bg-primary-foreground hover:text-primary transition-all duration-300 ease-in-out"
            onClick={() => ref.current?.click()}>
            <img src={icon} alt={alt} className="h-[34px] w-[34px]"/>
            <Link ref={ref} to={to}>{text}</Link>
        </div>
    );
};

export default NavItem;
