import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks }) => {
  return (
    <div className="md:w-1/3">
      <div className="bg-slate-300 space-y-3 text-center p-4 rounded-lg">
        <h1 className="text-2xl font-bold">
          Bookmarked Blogs: {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark) => (
          <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
export default Bookmarks;
