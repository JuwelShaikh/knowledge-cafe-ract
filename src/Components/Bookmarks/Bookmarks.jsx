import Bookmark from "../Bookmark/Bookmark";


const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3 bg-gray-200 p-5 rounded-lg ml-2">
            <h1 className="text-2xl text-center">Bookmarked blogs: {bookmarks.length}</h1>
            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.id} bookmark={bookmark}/>)
            }
        </div>
    );
};

export default Bookmarks;