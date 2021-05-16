import * as React from "react";
import dynamic from "next/dynamic";

const NoSsr: React.FC = (props) => <>{props.children}</>;

export default dynamic(() => Promise.resolve(NoSsr), {
  ssr: false,
});
