export const initailized = [{ id: 1, name: "이강민 " }];
export const reducer = (state, action) => {
  console.log("리듀서입니다.", state, action);
  switch (action.type) {
    case "ADDSTUDENT":
      return [...state, { id: action.id, name: action.name }];
    case "REMOVESTUDENT":
      return state.filter((v) => v.id !== action.id);
    default:
      return state;
  }
};
