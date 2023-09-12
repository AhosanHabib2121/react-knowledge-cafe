import './App.css'
import Header from './components/header/Header'
import Blogs from './components/blogs/Blogs'
import Bookmarks from './components/bookmarks/Bookmarks'
import { useState } from 'react'

function App() {
  const [bookmarks, setBookmarks] = useState([])
  const handleBookmark = blogData => {
    const newBookmarks = [...bookmarks, blogData];
    setBookmarks(newBookmarks);
  }

  return (
    <div>
      <Header></Header>
      <main className='md:flex gap-6 mx-20'>
        <Blogs handleBookmark={handleBookmark}></Blogs>
        <Bookmarks bookmarks={bookmarks}></Bookmarks>
      </main>
    </div>
  )
}

export default App
