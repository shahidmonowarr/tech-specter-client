import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import useBlogDetails from '../../../hooks/useBlogDetails/useBlogDetails';

const BlogDetails = () => {
    const { blogId } = useParams();
    const [blog] = useBlogDetails(blogId);
    return (
        <Container>
            <Card className='text-start'>
      <Card.Img variant="top" src={blog.image} />
      <Card.Body>
        <Card.Title style={{textTransform:'uppercase', fontWeight:'bold'}} as="h3">{blog.name}</Card.Title>
        <Card.Text>
            {blog.description}
        </Card.Text>
        <Card.Text>
            <h6 className='fw-bold'>{blog.desTitle1} :</h6><hr></hr>{blog.description1}
        </Card.Text>
        <Card.Text>
        <h6 className='fw-bold'>{blog.desTitle2} :</h6><hr></hr>{blog.description2}
        </Card.Text>
        <Card.Text>
        <h6 className='fw-bold'>{blog.desTitle3} :</h6><hr></hr>{blog.description3}
        </Card.Text>
        <Card.Text>
        <h6 className='fw-bold'>{blog.desTitle4} :</h6><hr></hr>{blog.description4}
        </Card.Text>
        <Card.Text>
        <h6 className='fw-bold'>{blog.desTitle5} :</h6><hr></hr>{blog.description5}
        </Card.Text>
        <Button variant="danger">Add Reviews</Button>
      </Card.Body>
    </Card>
        </Container>
    );
};

export default BlogDetails;