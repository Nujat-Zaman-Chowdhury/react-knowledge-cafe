import PropTypes from 'prop-types';
import { IoBookmarkOutline } from "react-icons/io5";

const Blog = ({blog, handleAddToBookmark, handleMarkAsRead}) => {

    console.log(blog);
    const {title,cover,author_img,reading_time,author,posted_date,hashtags} = blog;
    return (
        <div className='mb-20 space-y-4'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <img className='w-[60px] h-[60px]' src={author_img}></img>
                    <div className='ml-6'>
                        <h4 className='text-xl'>{author}</h4>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <span>{reading_time} min read</span>
                    <button onClick={()=>handleAddToBookmark(blog)} className='text-red-400'><IoBookmarkOutline /></button>
                </div>
            </div>
            <h2 className="text-3xl text-left mb-4">{title}</h2>
            <p className='text-left'>
                {
                    hashtags.map((hash,index)=><span className='mr-2' key={index}><a href=''>#{hash}</a></span>)
                }
            </p>
            <button className='text-purple-500 font-bold underline w-full text-left' onClick={()=>handleMarkAsRead(reading_time)}>Mark as read</button>
        </div>
    );
};

Blog.propTypes ={
    blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func.isRequired,
    handleMarkAsRead:PropTypes.func.isRequired
}

export default Blog;