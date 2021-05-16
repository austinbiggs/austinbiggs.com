import * as React from "react";

interface Props {
  children: React.ReactNode;
}

const MetaWrapper: React.FC<Props> = (props) => {
  return <>{props.children}</>;
};

export { MetaWrapper };
