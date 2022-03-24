import React from "react";

const List = ({ student, dispatch }) => {
  const removeStudent = () => {
    dispatch({ type: "REMOVESTUDENT", id: student.id });
  };

  return (
    <ul key={student.id}>
      <li>
        {student.id}. {student.name}
        <button onClick={removeStudent}>삭제</button>
      </li>
    </ul>
  );
};

export default List;
