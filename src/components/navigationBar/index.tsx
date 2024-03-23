import Logo from "../ui/logo";
import DayIcon from "@/assets/day-icon.png";
import ReportIcon from "@/assets/report-icon.png";
import GoalIcon from "@/assets/goal-icon.png";
import DebtIcon from "@/assets/debt-icon.png";
import GearIcon from "@/assets/gear-icon.png";
import { Link } from "react-router-dom";
import NavItem from "./NaviItem";

type Props = {
    position: string;
}

const NavigationBar = ({ position }: Props) => {
    return (
        <nav className={position}>
            <Logo />
            <menu className="flex flex-col gap-1 p-1">
                <li className="h-max">
                    <NavItem icon={DayIcon} alt="day icon" to="/today-expenses" text="Today expenses"/>
                </li>
                <li className="h-max">
                    <NavItem icon={ReportIcon} alt="report icon" to="/reports" text="Reports"/>
                </li>
                <li className="h-max">
                    <NavItem icon={GoalIcon} alt="goal icon" to="/goals" text="Goals"/>
                </li>
                <li className="h-max">
                    <NavItem icon={DebtIcon} alt="debt icon" to="/debt" text="Debt"/>
                </li>
                <li className="h-max transition">
                    <NavItem icon={GearIcon} alt="gear icon" to="/settings" text="Settings"/>
                </li>
            </menu>
        </nav>
    );
}

export default NavigationBar;