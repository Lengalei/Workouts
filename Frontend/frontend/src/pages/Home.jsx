import React, { useEffect, useState } from "react";
import axios from "axios";
import Workoutdetails from "../components/Workoutdetails";
import WorkoutForm from "../components/WorkoutForm";
function Home() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      const response = await axios("http://localhost:4000/api/workout");
      console.log(response);

      if (response.status == 200) {
        setWorkouts(response.data);
      }
    };

    fetchWorkouts();
  }, []);
  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts?.map((workout) => (
            <Workoutdetails key={workout._id} workout={workout}/>
          ))}
      </div>
      <WorkoutForm/>
    </div>
  );
}

export default Home;
