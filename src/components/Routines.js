import React, { useState, useEffect } from "react";
import { callApi } from "../api";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
  
  useEffect(() => {
    const fetchData = async () => {
      const allRoutines = await callApi({ url: "/routines" });
      setRoutines(allRoutines);
    };

    fetchData();
  }, []);
  return (
    <div>
      {routines && routines.length
        ? routines.map(({ id, name, goal, creatorName }) => (
            <div className="routines" key={id}>
              {name} createdBy: {creatorName} goal: {goal}
            </div>
          ))
        : ""}
    </div>
  );
};

export default Routines;
