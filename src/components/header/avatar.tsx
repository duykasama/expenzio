import PlaceholderAvatar from '@/assets/placeholder-avatar.png';

const Avatar = () => {
    return (
        <div className='p-0.5 bg-[#2B32B2] rounded-full cursor-pointer'>
            <img src={PlaceholderAvatar} alt="avatar" className='w-12' />
        </div>
    );
}

export default Avatar;