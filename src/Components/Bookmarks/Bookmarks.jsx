

const Bookmarks = ({ bookmarks }) => {
    return (
        <div className="md:w-1/3">
            <h1 className="text-3xl">Bookmarks: {bookmarks.length}</h1>
        </div>
    );
};

export default Bookmarks;