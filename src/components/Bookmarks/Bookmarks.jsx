import Bookmark from "../Bookmark/Bookmark";

const Bookmarks = ({ bookmarks, readingTime }) => {
  return (
    <div className="md:w-1/3 space-y-4">
      <h1 className="text-2xl text-blue-700 font-bold bg-slate-300 text-center p-4 rounded-lg border-2 border-blue-700">
        Spent time on read : {readingTime} min
      </h1>
      <div className="bg-slate-300 space-y-3 text-center p-4 rounded-lg">
        <h1 className="text-2xl font-bold">
          Bookmarked Blogs : {bookmarks.length}
        </h1>
        {bookmarks.map((bookmark, idx) => (
          <Bookmark key={idx} bookmark={bookmark}></Bookmark>
        ))}
      </div>
    </div>
  );
};
export default Bookmarks;
