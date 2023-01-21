import React, { useEffect, useState } from 'react';
import { Button, ButtonGroup, Container, Row, Spinner, Toast } from 'react-bootstrap';
import PageTitle from '../../../Components/Shared/PageTitle/PageTitle';
import SingleBlog from '../SingleBlog/SingleBlog';

const AllBlogs = () => {
    const [blogs, setBlogs] = useState([]);
  const count = blogs.length;

  useEffect(() => {
    fetch("https://tech-specter-server.vercel.app/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      })
      .catch((error) => Toast.error(error.message));
  }, []);

    const [tempBlogs, setTempBlogs] = useState(blogs);

    const filterBlogs = (blogCate) => {
        const cateServices = blogs.filter((currentCourses) => {
            return currentCourses.category === blogCate;
        });
        if (blogCate === "All") {
            setTempBlogs(blogs);
        } else {
            setTempBlogs(cateServices);
        }
    };
    return (
        <>
        {!count ? (
          <div className="text-center my-5 private-spinner py-5">
            <Spinner variant="danger" animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
            <h6>Loading...</h6>
          </div>
        ) : (
          <Container className="mb-5">
            <PageTitle title="Blogs"></PageTitle>
            <h2 className="text-center text-uppercase mt-5 mb-4 feature">
              LATEST Blogs
            </h2>
            <p style={{ maxWidth: "500px" }} className="mx-auto text-center">
              Learn a new thing to build career!
            </p>
            <Container>
              <ButtonGroup className="flex-wrap mb-2" aria-label="Basic example">
                <Button className="mx-2 my-2 rounded-3" variant="secondary" onClick={() => filterBlogs("All")}>
                  All
                </Button>
                <Button className="mx-2 my-2 rounded-3"
                  variant="secondary"
                  onClick={() => filterBlogs("development")}
                >
                  Development
                </Button>
                <Button className="mx-2 my-2 rounded-3"
                  variant="secondary"
                  onClick={() => filterBlogs("design")}
                >
                  Design
                </Button>
                <Button className="mx-2 my-2 rounded-3"
                  variant="secondary"
                  onClick={() => filterBlogs("marketing")}
                >
                  Marketing
                </Button>
                <Button className="mx-2 my-2 rounded-3"
                  variant="secondary"
                  onClick={() => filterBlogs("health")}
                >
                  Health
                </Button>
              </ButtonGroup>
            </Container>
            <Row>
              {tempBlogs.length === 0
                ? blogs?.map((singleBlog) => (
                    <SingleBlog
                      key={singleBlog._id}
                      singleBlog={singleBlog}
                    />
                  ))
                : tempBlogs.map((singleBlog) => (
                    <SingleBlog
                      key={singleBlog._id}
                      singleBlog={singleBlog}
                    ></SingleBlog>
                  ))}
            </Row>
          </Container>
        )}
      </>
    );
};

export default AllBlogs;