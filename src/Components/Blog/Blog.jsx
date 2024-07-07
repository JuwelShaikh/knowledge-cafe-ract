import PropTypes from 'prop-types';
import { CiBookmark } from "react-icons/ci";




const Blog = ({ blog, handleAddBookmark }) => {
    const { title, cover, author_img, author, posted_date, reading_time, hashtags } = blog;
    return (
        <>
            <div className='my-4 border-b-2'>
                <img className='w-full' src={cover} alt={`This is the picture of the ${title}`} />
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
                        <button
                            onClick={handleAddBookmark}
                            className='ml-2 '><CiBookmark /></button>
                    </div>
                </div>
                <div className='mb-4'>
                    <h1 className="text-xl ">{title}</h1>
                    <p className='text-blue-700	'>
                        {
                            hashtags.map(hash => <span key={blog.id}><a href=''>#{hash} </a></span>)
                        }
                    </p>
                    <a className='text-blue-700	 mb-5' href=""><u>Mark as read</u></a>
                </div>
            </div>
        </>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;