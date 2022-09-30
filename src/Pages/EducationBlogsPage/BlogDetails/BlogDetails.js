import React from 'react';
import { useParams } from 'react-router-dom';
import useBlogDetails from '../../../hooks/useBlogDetails/useBlogDetails';

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blog] = useBlogDetails(blogId);
    return (
        <div>
            <h2>{blog.name}</h2>
        </div>
    );
};

export default BlogDetails;