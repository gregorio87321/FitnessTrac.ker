// import React, { useState, useEffect } from "react";
// import { callApi } from "../api";

// const Routines = () => {
//   const [routines, setRoutines] = useState([]);
//   const [activities, setActivities] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const allRoutines = await callApi({ url: "/routines" });
//       setRoutines(allRoutines);
//     };

//     fetchData();
//   }, []);
//   return (
//     <div>
//       <h1>Fitness</h1>
//       {routines && routines.length
//         ? routines.map(({ id, name, goal, creatorName }) => (
//             <div className="routines" key={id}>
//               {name} createdBy: {creatorName}
//             </div>
//           ))
//         : ""}
//     </div>
//   );
// };

// export default Routines;
