import * as React from "react";

interface Props {}

const Content: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};

export { Content };
