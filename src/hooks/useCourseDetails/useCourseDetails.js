import { useEffect, useState } from "react";

const useCourseDetails = serviceId => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    const url = `http://localhost:5000/course/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, [serviceId]);
  return [course]
};

export default useCourseDetails;
