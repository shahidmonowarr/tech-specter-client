import React, { useEffect, useState } from "react";
import {
  Button,
  ButtonGroup,
  Container,
  Pagination,
  Row,
  Spinner,
  Toast
} from "react-bootstrap";
import PageTitle from "../../../Components/Shared/PageTitle/PageTitle";
import SingleBlog from "../SingleBlog/SingleBlog";

const AllBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const count = blogs.length;

  useEffect(() => {
    fetch("https://tech-specter.onrender.com/blogs")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data);
      })
      .catch((error) => Toast.error(error.message));
  }, []);

  const [tempBlogs, setTempBlogs] = useState(blogs);
  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage, setBlogsPerPage] = useState(6);

  const filterBlogs = (blogCate) => {
    const cateServices = blogs.filter((currentCourses) => {
      return currentCourses.category === blogCate;
    });
    if (blogCate === "All") {
      setTempBlogs(blogs);
    } else {
      setTempBlogs(cateServices);
    }
    setCurrentPage(1);
  };

  const totalPages = Math.ceil(tempBlogs.length / blogsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = tempBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

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
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterBlogs("All")}
              >
                All
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterBlogs("development")}
              >
                Development
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterBlogs("design")}
              >
                Design
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterBlogs("marketing")}
              >
                Marketing
              </Button>
              <Button
                className="mx-2 my-2 rounded-3"
                variant="secondary"
                onClick={() => filterBlogs("health")}
              >
                Health
              </Button>
            </ButtonGroup>
          </Container>
          <Row>
            {currentBlogs.length === 0
              ? blogs?.map((singleBlog) => (
                  <SingleBlog key={singleBlog._id} singleBlog={singleBlog} />
                ))
              : currentBlogs.map((singleBlog) => (
                  <SingleBlog
                    key={singleBlog._id}
                    singleBlog={singleBlog}
                  ></SingleBlog>
                ))}
          </Row>
          <div className="d-flex justify-content-center">
            <Pagination className="mt-4">
              {[...Array(totalPages)].map((_, index) => (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === currentPage}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              ))}
            </Pagination>
          </div>
        </Container>
      )}
    </>
  );
};

export default AllBlogs;
