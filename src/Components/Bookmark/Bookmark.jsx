

const Bookmark = ({bookmark}) => {
    const {title} = bookmark
    return (
        <div>
            <h3 className="text-lg bg-white rounded-lg p-4 mx-1 my-4">{title}</h3>
        </div>
    );
};

export default Bookmark;