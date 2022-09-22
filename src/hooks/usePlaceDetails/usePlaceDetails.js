import { useEffect, useState } from "react";

const usePlaceDetails = serviceId => {
  const [place, setPlace] = useState({});

  useEffect(() => {
    const url = `https://tech-specter.onrender.com/travel/${serviceId}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, [serviceId]);
  return [place]
};

export default usePlaceDetails;