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
  const handleMarkRead = (readTime) => {
    const readingTimeNum = parseInt(readingTime);
    const readTimeNum = parseInt(readTime);
    const newReadingTime = readingTimeNum + readTimeNum;
    setReadingTime(newReadingTime)
  }
  return (
    <div>
      <Header></Header>
      <main className='md:flex gap-6 mx-20'>
        <Blogs handleBookmark={handleBookmark} handleMarkRead={handleMarkRead}></Blogs>
        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </main>
    </div>
  )
}

export default App
