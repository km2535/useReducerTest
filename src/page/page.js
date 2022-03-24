import React, { useReducer } from "react";
import Content from "../components/content";
import Input from "../components/input";
import List from "../components/list";
import Title from "../components/title";
import { reducer, initailized } from "../reducer/reducer";

const Page = () => {
  const [student, dispatch] = useReducer(reducer, initailized);
  return (
    <>
      <Title />
      <Content student={student} />
      <Input dispatch={dispatch} student={student} />
      {student.map((v) => (
        <List key={v.id} student={v} dispatch={dispatch} />
      ))}
    </>
  );
};

export default Page;
