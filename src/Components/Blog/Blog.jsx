import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    const {title} = blog;
    return (
        <div>
            <h1 className="text-xl">Title: {title}</h1>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired
}

export default Blog;