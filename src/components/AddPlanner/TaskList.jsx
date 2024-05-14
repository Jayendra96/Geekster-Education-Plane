import React from 'react'
import 

const TaskList = ({ subject, hours}) => {
  return (
    <div>
      <span>{`${subject} - ${hours}`}</span>
    </div>
  )
}

export default TaskList;

