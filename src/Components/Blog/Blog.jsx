import PropTypes from 'prop-types';


const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time } = blog;
    return (
        <>
            <div>
                <img src={cover} alt={`This is the picture of the ${title}`} />
                <div className='flex justify-between'>
                    <div className='flex'>
                        <img className='w-12' src={author_img} alt="Author img" />
                        <div className='ml-3'>
                            <h4 className='text-xl font-bold'>{author}</h4>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>0{reading_time} read time</p>
                        <button>btn</button>
                    </div>
                </div>
            </div>
            <h1 className="text-xl ">{title}</h1>
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;