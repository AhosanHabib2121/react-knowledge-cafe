import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";
import PropTypes from 'prop-types';

const Blogs = ({handleBookmark,handleMarkRead}) => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('../../../public/blog.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    },[])
    return (
        <>
            <div className="md:w-2/3">
                {
                    blogs.map(blog => <Blog
                        key={blog.id}
                        blog={blog}
                        handleBookmark={handleBookmark}
                        handleMarkRead ={handleMarkRead}
                    ></Blog>)
                }
            </div>
        </>
    );
};
Blogs.propTypes = {
    handleBookmark:PropTypes.func,
    handleMarkRead:PropTypes.func
}

export default Blogs;