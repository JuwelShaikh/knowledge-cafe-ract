import proPic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className='flex justify-between place-items-center mx-5 p-2 border-b-2'>
            <h1 className="text-2xl font-bold">Knowledge Cafe</h1>
            <img src={proPic} alt="" />
        </div>
    );
};

export default Header;