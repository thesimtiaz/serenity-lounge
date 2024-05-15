const Blog = ({ blog }) => {
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

        <div>
          <p className="text-lg font-medium">{reading_time} min read</p>
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
