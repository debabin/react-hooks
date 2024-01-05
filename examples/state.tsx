import { useState } from "react";

export const App = () => {
  const [object, setObject] = useState({
    name: "dima",
    channel: "sibeiacancode",
  });

  return (
    <button onClick={() => setObject({ ...object, name: "nedima" })}>
      {object.channel} {object.name}
    </button>
  );
};
