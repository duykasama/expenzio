type Props = {
    position: string;
}

const Footer = ({position}: Props) => {
    return (
        <footer className={`${position} flex justify-center items-center`}>
            <p>&copy; 2024 Nguyen Thanh Duy</p>
        </footer>
    );
};

export default Footer;