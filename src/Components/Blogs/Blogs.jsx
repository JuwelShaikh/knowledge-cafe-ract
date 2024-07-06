
import { useEffect } from 'react';
import { useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [Blogs, setBlog] = useState([]);
    
    useEffect(()=>{
        fetch('Blogs.json')
        .then(res => res.json())
        .then(data =>setBlog(data))
    },[])

    return (
        <div className='md:w-2/3'>
            <h3 className='text-xl'>Blogs: {Blogs.length}</h3>
            {
                Blogs.map(blog => <Blog 
                    key={Blogs.id}
                    blog={blog}
                />)
            }
        </div>
    );
};

export default Blogs;