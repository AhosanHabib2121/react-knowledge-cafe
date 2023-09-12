import profile from '../../assets/1.png'

const Header = () => {
    return (
        <>
            <header className='flex justify-between gap-10 border-b mx-20 mt-8 mb-6'>
                <h2 className="text-3xl font-bold pb-5">Knowledge Cafe</h2>
                <img className='pb-5' src={profile} alt="not found"/>
            </header>
        </>
        
    );
};

export default Header;