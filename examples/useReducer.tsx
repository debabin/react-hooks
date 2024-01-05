import { ChangeEventHandler, useReducer } from "react";

function reducer(
  state: { name: string; age: number },
  action:
    | { type: "incremented_age" }
    | { type: "changed_name"; nextName: string }
) {
  switch (action.type) {
    case "incremented_age": {
      return {
        name: state.name,
        age: state.age + 1,
      };
    }
    case "changed_name": {
      return {
        name: action.nextName,
        age: state.age,
      };
    }
  }
}

const initialState = { name: "Taylor", age: 42 };
export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleButtonClick = () => {
    dispatch({ type: "incremented_age" });
  };
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    dispatch({
      type: "changed_name",
      nextName: event.target.value,
    });
  };

  return (
    <>
      <input value={state.name} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Increment age</button>
      <p>
        Hello, {state.name}. You are {state.age}.
      </p>
    </>
  );
};
