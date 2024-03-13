import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import Blog from '../../Blog/Blog';

const Blogs = ({handleAddToBookmark , handleMarkAsRead}) => {

    const [blogs,setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))  
        
    },[])

    return (
        <div className='md:w-2/3'>
            <h3 className='text-3xl my-4'>Blogs: {blogs.length}</h3>
            {
                blogs.map(blog=><Blog key={blog.id} blog={blog} handleAddToBookmark={handleAddToBookmark}
                    handleMarkAsRead={handleMarkAsRead}
                ></Blog>)
            }
        </div>
    );
};

Blogs.propTypes = {
    handleAddToBookmark:PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}
export default Blogs;