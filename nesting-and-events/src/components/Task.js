import React from 'react';

function Task(props, {toggleComplete}) {

  return (
      <div className={"task"+(props.isComplete?" checked":"")} >
        <span>{props.title}</span>
        <span className="status" onClick={() => toggleComplete(props.id)}>{props.isComplete ? "✔️":"🔘"}</span>
      </div>
  );
}
export default Task