"use client";

import { Accordion, AccordionItem } from "../../examples/compound-components";

const App = () => (
  <Accordion>
    <AccordionItem index={0}>
      <h3>Section 1</h3>
      <p>Content for section 1...</p>
    </AccordionItem>
    <AccordionItem index={1}>
      <h3>Section 2</h3>
      <p>Content for section 2...</p>
    </AccordionItem>
    <AccordionItem index={2}>
      <h3>Section 3</h3>
      <p>Content for section 3...</p>
    </AccordionItem>
  </Accordion>
);

export default App;
