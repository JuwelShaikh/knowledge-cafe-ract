import PropTypes from 'prop-types';


const Blog = ({ blog }) => {
    const { title, cover, author_img, author, posted_date, reading_time } = blog;
    return (
        <>
            <div className='my-4 border-b-2'>
                <img src={cover} alt={`This is the picture of the ${title}`} />
                <div className='flex justify-between my-2'>
                    <div className='flex'>
                        <img className='w-12' src={author_img} alt="Author img" />
                        <div className='ml-3'>
                            <h4 className='text-xl font-bold'>{author}</h4>
                            <p>{posted_date}</p>
                        </div>
                    </div>
                    <div className='flex'>
                        <p>{reading_time} read time</p>
                        {/* <button>btn</button> */}
                    </div>
                </div>
            <h1 className="text-xl ">{title}</h1>
            </div>
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;