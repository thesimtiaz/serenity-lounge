import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";

const Blogs = ({ handleAddToBookmark }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);
  return (
    <div className="md:w-2/3">
      {blogs.map((blogs) => (
        <Blog
          key={blogs.id}
          blog={blogs}
          handleAddToBookmark={handleAddToBookmark}
        >
          {" "}
        </Blog>
      ))}
    </div>
  );
};
export default Blogs;
