import { useState, useTransition } from "react";
import SlowList from "./SlowList.jsx";

export const App = () => {
  const [text, setText] = useState("");
  const [deferedText, setDeferedText] = useState("");
  const [isPending, setTransition] = useTransition();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
    setTransition(() => setDeferedText(e.target.value));
  };

  return (
    <>
      <input value={text} onChange={onChange} />
      {isPending && <div>Loading ...</div>}
      <SlowList text={deferedText} />
    </>
  );
};
