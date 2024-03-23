type Props = {
    position: string;
}

const Footer = ({position}: Props) => {
    return (
        <footer className={position}>This is a footer</footer>
    );
}

export default Footer;