
import Blogs from './Components/Blogs/Blogs'
import Bookmarks from './Components/Bookmarks/Bookmarks'
import Header from './Components/Header/Header'

function App() {


  return (
    <div className='max-w-5xl items-center mx-auto'>
      <Header />
      <main className='md:flex'>
        <Blogs />
        <Bookmarks />
      </main>
    </div>
  )
}

export default App
