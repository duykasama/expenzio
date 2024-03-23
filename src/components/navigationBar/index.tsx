import Logo from "../ui/logo";

type Props = {
    position: string;
}

const NavigationBar = ({ position }: Props) => {
    return (
        <nav className={position}>
            <Logo />
            <menu>
                <li>something</li>
                <li>something</li>
                <li>something</li>
                <li>something</li>
                <li>something</li>
            </menu>
        </nav>
    );
}

export default NavigationBar;