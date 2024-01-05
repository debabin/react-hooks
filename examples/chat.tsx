import React, { useState, useEffect } from "react";
import { createConnection } from "./createConnection";

export const ChatRoom = () => {
  const [serverUrl, setServerUrl] = useState("https://localhost:3001");
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);

    const connection = createConnection(serverUrl);
    connection.connect(() => setLoading(false));

    return () => {
      connection.disconnect();
    };
  }, [serverUrl]);

  return (
    <>
      <input
        type="text"
        value={serverUrl}
        onChange={(event) => setServerUrl(event.target.value)}
      />

      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>You in chat</h1>
        </>
      )}
    </>
  );
};
