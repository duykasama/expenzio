import { Link } from "react-router-dom";

type Props = {
    icon: any;
    alt: string;
    to: string;
    text: string;
}

const NavItem = ({icon, alt, to, text}: Props) => {
    return (
        <div className="flex items-center gap-2 p-1 py-2 pl-6 rounded-md cursor-pointer hover:bg-[#2B32B2] transition-all duration-300 ease-in-out">
            <img src={icon} alt={alt} className="h-[34px] w-[34px]"/>
            <Link to={to}>{text}</Link>
        </div>
    );
}

export default NavItem;