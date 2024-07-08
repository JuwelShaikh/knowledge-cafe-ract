
import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks, readingTime }) => {
    return (
        <>
            <div className="md:w-1/3">
                <h4 className="bg-blue-50 text-center text-lg font-semibold text-blue-500 p-4 ml-2 mb-2 border border-indigo-600 rounded-md">Reading time spent: {readingTime}</h4>
                <div className=" bg-gray-200 p-5 rounded-lg ml-2">
                    <h1 className="text-2xl text-center">Bookmarked blogs: {bookmarks.length}</h1>
                    {
                        bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark} />)
                    }
                </div>
            </div>
        </>

    );
};

export default Bookmarks;