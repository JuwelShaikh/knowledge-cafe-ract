import proPic from '../../assets/images/profile.png'

const Header = () => {
    return (
        <div className="text-2xl font-bold">
            <h1>Knowledge Cafe</h1>
            <img src={proPic} alt="" />
        </div>
    );
};

export default Header;