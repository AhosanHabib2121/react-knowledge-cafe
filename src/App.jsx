import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  // bookmarks useState here
  const [bookmarks, setBookmarks] = useState([])
  // reading time useState here
  const [readingTime, setReadingTime] = useState(0)

  // bookmarks func here
  const handleBookmark = blogData => {
    const newBookmarks = [...bookmarks, blogData];
    setBookmarks(newBookmarks);
  }

   // reading time func here
  const handleMarkRead = (id,readTime) => {
    const readingTimeNum = parseInt(readingTime);
    const readTimeNum = parseInt(readTime);
    const newReadingTime = readingTimeNum + readTimeNum;
    setReadingTime(newReadingTime)
    // remove the read blog from bookmark
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !== id);
    setBookmarks(remainingBookmarks);
  }
  return (
    <div>
      {/* header area */}
      <Header></Header>

      {/* main area */}
      <main className='md:flex gap-6 mx-20'>
        {/* Blogs area */}
        <Blogs handleBookmark={handleBookmark} handleMarkRead={handleMarkRead}></Blogs>

        {/* Bookmarks area */}
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  )
}

export default App
