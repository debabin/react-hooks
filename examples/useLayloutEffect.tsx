import React, { useLayoutEffect } from "react";

export const UseLayloutEffectExample = () => {
  useLayoutEffect(() => window.scrollBy(0, 99999), []);

  return (
    <div>
      <div>
        {[...Array(100)].map((_, index) => (
          <div key={index}>element - {index}</div>
        ))}
      </div>
    </div>
  );
};
