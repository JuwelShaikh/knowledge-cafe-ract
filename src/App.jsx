

import { useState } from 'react'
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks)
  }

  return (
    <div className='max-w-5xl items-center mx-auto'>
      <Header />
      <main className='md:flex'>
        <Blogs handleAddBookmark={handleAddBookmark} />
        <Bookmarks bookmarks={bookmarks}/>
      </main>
    </div>
  )
}

export default App
