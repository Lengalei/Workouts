import React, { useState } from "react";

import axios from "axios";

function WorkoutForm() {
  const [title, setTitle] = useState("");
  const [load, setLoad] = useState("");
  const [reps, setReps] = useState("");
  const [error, setError] = useState(null);

const handleSubmit = async(e) => {
 e.preventDefault()

//  destructuring which could also be done within the api request - same thing
 const workout = {title, load, reps}

 const response = await axios.post("http://localhost:4000/api/workout", workout);

 if(!response.ok){
    setError(response.error)
 }
 if(response.ok){
    setTitle('')
    setLoad('')
    setReps('')
    setError(null)
    console.log(`new workout added`, response)
 }
}






  return (
    <form className="create" onSubmit={handleSubmit}>
      <h3>Create a new Workout</h3>

      <label>Excercise Title : </label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />
      <label>Load (in Kg) : </label>
      <input
        type="number"
        value={load}
        onChange={(e) => {
          setLoad(e.target.value);
        }}
      />
      <label>Reps : </label>
      <input
        type="number"
        value={reps}
        onChange={(e) => {
          setReps(e.target.value);
        }}
      />

      <button>Add Workout</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
}

export default WorkoutForm;
