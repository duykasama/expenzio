import Logo from "../ui/logo";
import DayIcon from "@/assets/day-icon.png";
import ReportIcon from "@/assets/report-icon.png";
import GoalIcon from "@/assets/goal-icon.png";
import DebtIcon from "@/assets/debt-icon.png";
import GearIcon from "@/assets/gear-icon.png";
import NavItem from "./NaviItem";

type Props = {
    position: string;
}

export type RouteItem = {
    icon: any;
    alt: string;
    to: string;
    text: string;
}

const routeItems: RouteItem[] = [
    {
        icon: DayIcon,
        alt: 'day icon',
        to: '/today-expenses',
        text: 'Today expenses'
    },
    {
        icon: ReportIcon,
        alt: 'report icon',
        to: '/reports',
        text: 'Reports'
    },
    {
        icon: GoalIcon,
        alt: 'goal icon',
        to: '/goals',
        text: 'Goals'
    },
    {
        icon: DebtIcon,
        alt: 'debt icon',
        to: '/debt',
        text: 'Debt'
    },
    {
        icon: GearIcon,
        alt: 'gear icon',
        to: '/settings',
        text: 'Settings'
    },
];

const NavigationBar = ({ position }: Props) => {
    return (
        <nav className={position}>
            <Logo />
            <menu className="flex flex-col gap-1 p-1">
                {
                    routeItems.map((item) => (
                        <li>
                            <NavItem icon={item.icon} alt={item.alt} to={item.to} text={item.text} />
                        </li>
                    ))
                }
            </menu>
        </nav>
    );
};

export default NavigationBar;