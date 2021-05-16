import * as React from "react";

interface Props {
  id: number;
}

const Article: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};

export { Article };
