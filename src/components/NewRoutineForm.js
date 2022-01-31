// import React, { useState } from "react";
// import { callApi } from "../api";
// import { useHistory, useParams } from "react-router-dom";

// const NewRoutineForm = ({ token, setRoutines, routines, action }) => {
//   const history = useHistory();
//   const { routineId } = useParams();

//   const [newRoutine, setNewRoutine] = useState({
//     name: "",
//     goal: "",
//     creatorName: "",
//     activities: "",
//   });
//   const isEdit = action === "edit";
//   const name = isEdit ? "Edit this routines" : "Add a New Post";
//   const method = isEdit ? "PATCH" : "POST";
//   const API_URL = isEdit ? `/routines/${routineId}` : `/routines`;

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const {
//          routines 
//       } = await callApi({
//         url: API_URL,
//         method: method,
//         body: {
//           name: newRoutine.name,
//           goal: newRoutine.goal,
//           creatorName: newRoutine.creatorName,
//           activities: newRoutine.activities,
//         },
//         token,
//       });

//       if (isEdit) {
//         const filteredRoutines = routines.filter(
//           (routines) => routines._id !== routineId
//         );
//         setRoutines([...filteredRoutines, routines]);
//       } else {
//         setRoutines([...routines, routines]);
//       }

//       history.push("/routines");
//     } catch (error) {
//       console.error("error adding a routines: ", error);
//     }
//   };

//   const handleRoutineFieldChange = (property) => (event) => {
//     if (property === "") {
//       setNewRoutine({ ...newRoutine, [property]: event.target.checked });
//     } else {
//       setNewRoutine({ ...newRoutine, [property]: event.target.value });
//     }
//   };

//   return (
//     <>
//       <h2 className="newRoutineHead">{name}</h2>
//       <div className="newRoutine">
//         <form className="newRoutine" onSubmit={handleSubmit}>
//           <input
//             type="text"
//             placeholder="name"
//             onChange={handleRoutineFieldChange("name")}
//             value={newRoutine.name}
//           ></input>
//           <input
//             type="text"
//             placeholder="goal"
//             onChange={handleRoutineFieldChange("goal")}
//             value={newRoutine.goal}
//           ></input>
//           <input
//             type="number"
//             placeholder="creatorName"
//             onChange={handleRoutineFieldChange("creatorName")}
//             value={newRoutine.creatorName}
//           ></input>
//           <input
//             type="text"
//             placeholder="location"
//             onChange={handleRoutineFieldChange("location")}
//             value={newRoutine.activities}
//           ></input>

//           <button>{name}</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default NewRoutineForm;
