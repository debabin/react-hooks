import { memo } from "react";

const SlowList = memo(function SlowList({ text }: { text: string }) {
  let items = [];
  for (let i = 0; i < 500; i++) {
    items.push(<SlowItem key={i} text={text} />);
  }
  return <ul className="items">{items}</ul>;
});

export const SlowItem = ({ text }: { text: string }) => {
  let startTime = performance.now();
  while (performance.now() - startTime < 1) {
    // Do nothing for 1 ms per item to emulate extremely slow code
  }
  return <li className="item">Text: {text}</li>;
};

export default SlowList;
