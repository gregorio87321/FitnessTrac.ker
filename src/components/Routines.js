import React, { useState, useEffect } from "react";
import { callApi } from "../api";
// import NewRoutineForm from "./NewRoutineForm";

const Routines = () => {
  const [routines, setRoutines] = useState([]);
//   const [showNewRoutinetForm, setShowNewRoutineForm] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const allRoutines = await callApi({ url: "/routines" });
      setRoutines(allRoutines);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h2 className="allRoutines">Routines</h2>

      {routines && routines.length
        ? routines.map(({ id, name, goal, creatorName }) => (
            <div className="routines" key={id}>
              <br></br>
              <span>Title: {name}</span>
              <br></br>
              <span>Goal: {goal}</span>
              <br></br>
              <span>Created by: {creatorName}</span>
              <br></br>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Routines;
