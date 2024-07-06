
import { useEffect } from 'react';
import { useState } from 'react';

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
        </div>
    );
};

export default Blogs;