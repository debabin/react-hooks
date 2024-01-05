import React, { useState, ReactNode } from "react";
import { AccordionProvider, useAccordion } from "./accordionContext";

interface AccordionProps {
  children: ReactNode;
}

export const Accordion = ({ children }: AccordionProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <AccordionProvider value={{ activeIndex, setActiveIndex }}>
      <div>{children}</div>
    </AccordionProvider>
  );
};

interface AccordionItemProps {
  index: number;
  children: ReactNode;
}

export const AccordionItem = ({ index, children }: AccordionItemProps) => {
  const { activeIndex, setActiveIndex } = useAccordion();
  const isOpen = activeIndex === index;

  const handleClick = () => {
    setActiveIndex(isOpen ? null : index);
  };

  return (
    <div>
      <button onClick={handleClick}>{isOpen ? "Collapse" : "Expand"}</button>
      {isOpen && <div>{children}</div>}
    </div>
  );
};
