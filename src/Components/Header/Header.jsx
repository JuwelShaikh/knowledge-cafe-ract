import proPic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <header className='flex justify-between place-items-center mx-5  mb-3 p-2 border-b-2'>
            <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
            <img src={proPic} alt="" />
        </header>
    );
};

export default Header;