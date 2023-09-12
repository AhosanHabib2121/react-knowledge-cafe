import PropTypes from 'prop-types';

const Bookmark = ({ bookmark }) => {
    const { title } = bookmark;
    return (
        <div className='bg-slate-300 rounded-lg mt-5'>
            <h2 className='text-xl font-medium py-4 pl-4'>{ title }</h2>
        </div>
    );
};
Bookmark.propTypes = {
    bookmark:PropTypes.object.isRequired
}
export default Bookmark;