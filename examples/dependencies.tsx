import { useCallback, useEffect, useMemo } from "react";

export const App = () => {
  const value = useMemo(() => "value", []);

  const fn = useCallback(() => {}, [value]);

  useEffect(() => {});

  return null;
};
