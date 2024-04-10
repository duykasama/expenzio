import PageNotFound from '../../assets/page-not-found.webp';

const NotFound = () => {
    return (
        <main className='h-screen bg-primary text-primary-foreground flex flex-col gap-4 justify-center items-center'>
										<img src={PageNotFound} alt='page not found' />
										<h1 className='text-lg'>The page you're looking for cannot be found or still being developed.</h1>
								</main>
    );
};

export default NotFound;
