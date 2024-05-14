import { useEffect, useState } from "react";

const Blogs = () => {
  const [blogs,setBlogs]=useState([]);

  useEffect(()=>{
    fetch('blogs.json')
    .then(res=>res.json())
    .then(data => console.log(data))
  },[])
  return (
    <>
      <h1>blogs area</h1>
    </>
  );
};
export default Blogs;
