import PropTypes from 'prop-types';
import Bookmark from '../bookmark/Bookmark';

const Bookmarks = ({bookmarks,readingTime}) => {
    return (
        <div className="md:w-1/3">
            {/* read Time area */}
            <div className='bg-sky-100 px-4 pt-4 rounded-xl pb-4 mb-5'>
                <h2 className="text-2xl font-semibold text-blue-600">Spent time on read : {readingTime? readingTime + " min":'' }</h2>
            </div>
            {/* bookmark blogs */}
            <div className=" bg-slate-400 px-5 pt-4 rounded-xl pb-8">
                <h2 className="text-2xl font-semibold">Bookmarks Blogs: {bookmarks.length}</h2>
                {
                    bookmarks.map((bookmark,idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
                }
            </div>
        </div>
    );
};
Bookmarks.propTypes = {
    bookmarks: PropTypes.array,
    readingTime: PropTypes.number
}
export default Bookmarks;