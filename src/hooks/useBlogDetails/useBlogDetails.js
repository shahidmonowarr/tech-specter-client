import { useEffect, useState } from "react";

const useBlogDetails = blogId => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const url = `https://tech-specter.onrender.com/blogs/${blogId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [blogId]);
  return [blog]
};

export default useBlogDetails;