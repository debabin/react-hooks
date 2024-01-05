import React, { useId } from "react";

export const InputComponent = () => {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Name:</label>
      <input type="text" id={id} aria-describedby={`password-hint-${id}`} />
      <p id={`password-hint-${id}`}>
        The password should contain at least 18 characters
      </p>
    </div>
  );
};
