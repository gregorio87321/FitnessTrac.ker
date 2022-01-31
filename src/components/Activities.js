import React, { useState, useEffect } from "react";
import { callApi } from "../api";

const styles = {
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    padding: "16px",
    alignItems: "center",
  },
  searchInput: {
    margin: "0 16px",
  },
};

const Activities = () => {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allActivities = await callApi({ url: "/activities" });
      setActivities(allActivities);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2 className="allActivities">Activities</h2>
      {activities && activities.length
        ? activities.map(({ id, name, description }) => (
            <div className="activities" key={id}>
              <br></br>
              <span>Activity: {name}</span>
              <span>Description: {description}</span>
              <br></br>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Activities;
