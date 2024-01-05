import { createContext, useContext } from "react";

export const AccordionContext = createContext<{
  activeIndex: number | null;
  setActiveIndex: (index: number | null) => void;
}>({
  activeIndex: null,
  setActiveIndex: () => {},
});

export const AccordionProvider = AccordionContext.Provider;

export const useAccordion = () => useContext(AccordionContext);
