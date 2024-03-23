type Props = {
    position: string;
}

const Header = ({position}: Props) => {
    return (
        <header className={position}>This is header</header>
    );
}

export default Header;