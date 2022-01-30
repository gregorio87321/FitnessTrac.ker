import React, { useState, useEffect } from "react";
import { callApi } from "../api";

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
      {activities && activities.length
        ? activities.map(({ name, description }) => (
            <div className="activities" >      
              Activity: {name} Description: {description}
            </div>
          ))
        : ""}
    </div>
  );
};

export default Activities;
