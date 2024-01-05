import { useRef } from "react";

export const Counter = () => {
  let ref = useRef(0);

  console.log("@render");

  const handleClick = () => {
    ref.current = ref.current + 1;
    alert("You clicked " + ref.current + " times!");
  };

  return <button onClick={handleClick}>Click me!</button>;
};
