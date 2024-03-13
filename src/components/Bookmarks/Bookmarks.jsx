import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';
const Bookmarks = ({bookmarks, readingTime}) => {
    return (

        

        <div className="md:w-1/3 mx-auto bg-gray-100 ml-4 pt-4">
            <div className='bg-sky-200 p-4 rounded-xl m-4'>
                <h3 className='text-3xl'>Spent time on read :  {readingTime} min</h3>
            </div>
            <div>
            <h2 className="text-3xl text-center">Bookmarks Blogs: {bookmarks.length}</h2>
            {
                bookmarks.map(bookmark=><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
            </div>
        </div>
    );
};

Bookmarks.propTypes={
    bookmarks:PropTypes.object.isRequired,
    readingTime: PropTypes.number.isRequired
}
export default Bookmarks;