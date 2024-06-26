import { useState } from "react";
import TaskList from "./TaskList";

const AddPlanner = () => {
  const [myTasks, setMyTasks] = useState([]);

  const [subject, setSubject] = useState("");
  const [hours, setHours] = useState(undefined);

  const handleAddTask = () => {
    if(!subject || !hours) return;

    const reqObj = {
        subject,
        hours
    };

        setMyTasks([...myTasks, reqObj])

        setSubject("");
        setHours("");
  };

  return (
    <div>
      <h2>Geekster Education Plane</h2>
      <section>
      <input
        value={subject}
        type="text"
        placeholder="Subject"
        onChange={(e) => setSubject(e.target.value)}
      />
      <input
        value={hours}
        type="number"
        placeholder="Hours"
        onChange={(e) => setHours(e.target.value)}
      />
      <button onClick={handleAddTask}>Add</button>
      </section>
      <section>
        {
            myTasks.map((task,index) => (
                <TaskList key={index} subject={task.subject} hours={task.hours} />
            ))
        }
      </section>
    </div>
  );
};

export default AddPlanner;
