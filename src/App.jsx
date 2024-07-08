

import { useState } from 'react'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  const handleMarkAsRead = time => {
    const newReadingTime = readingTime + time;
    setReadingTime(newReadingTime);
  }

  return (
    <div className='max-w-5xl items-center mx-auto'>
      <Header />
      <main className='md:flex'>
        <Blogs handleAddBookmark={handleAddBookmark}
          handleMarkAsRead={handleMarkAsRead} />
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks} />
      </main>
    </div>
  )
}

export default App
