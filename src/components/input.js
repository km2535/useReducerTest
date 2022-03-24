import React, { useState } from "react";

const Input = ({ student, dispatch }) => {
  const [name, setName] = useState("");

  const addStudent = () => {
    if (student.length !== 0) {
      dispatch({
        type: "ADDSTUDENT",
        id: student[student.length - 1].id + 1,
        name: name,
      });
    } else {
      dispatch({
        type: "ADDSTUDENT",
        id: 1,
        name: name,
      });
    }
  };

  const onchange = (e) => {
    setName(e.target.value);
  };

  return (
    <>
      <input
        type="text"
        placeholder="이름을 적어주세요"
        onChange={onchange}
        value={name}
      ></input>
      <button onClick={addStudent}>추가</button>
    </>
  );
};

export default Input;
