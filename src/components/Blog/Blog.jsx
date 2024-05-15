import { IoBookmarksOutline } from "react-icons/io5";

const Blog = ({ blog, handleAddToBookmark }) => {
  const {
    cover,
    title,
    author_img,
    author,
    posted_date,
    reading_time,
    hashtags,
  } = blog;
  return (
    <div className="mb-8 space-y-4">
      <img className="w-full rounded-xl" src={cover} alt="" srcset="" />
      <div className="flex justify-between items-center mt-4">
        <div className="flex gap-4">
          <img className="w-14" src={author_img} alt="" srcset="" />
          <div className="space-y-1">
            <h4 className="text-2xl font-bold">{author}</h4>
            <p className="text-base font-semibold">{posted_date}</p>
          </div>
        </div>

        <div className="flex gap-4 text-xl font-medium">
          <p>{reading_time} min read</p>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="hover:text-blue-800"
          >
            <IoBookmarksOutline />
          </button>
        </div>
      </div>

      <h1 className="text-4xl font-bold mt-4">{title} </h1>

      <p>
        {hashtags.map((hash, idx) => (
          <span key={idx}>
            {" "}
            <a className="hover:text-blue-700" href="">
              #{hash}
            </a>{" "}
          </span>
        ))}
      </p>
    </div>
  );
};
export default Blog;
