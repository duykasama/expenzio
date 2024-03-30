import LogoImage from '@/assets/expenzio-logo.png';
import { useNavigate } from 'react-router-dom';

const Logo = () => {
    const navigate = useNavigate();

    const navigateHome = () => {
        navigate('/', {replace: true});
    };

    return (
        <div className='flex justify-around cursor-pointer' onClick={navigateHome}>
            <img src={LogoImage} alt="logo" className='h-[98px] w-[104px]'/>
            <div>
                <p className='text-4xl my-2 font-semibold'>Expenzio</p>
                <p>Master your finance</p>
            </div>
        </div>
    );
};

export default Logo;