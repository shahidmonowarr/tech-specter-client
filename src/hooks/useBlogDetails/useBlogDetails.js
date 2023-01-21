import { useEffect, useState } from "react";

const useBlogDetails = blogId => {
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const url = `https://tech-specter-server.vercel.app/blogs/${blogId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setBlog(data));
  }, [blogId]);
  return [blog]
};

export default useBlogDetails;