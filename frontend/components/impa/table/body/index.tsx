import * as React from "react";
import classNames from "classnames";

import styles from "./style.module.scss";
import { Props } from "./types";

export const Body: React.FC<Props> = (props) => {
  const { children, className } = props;

  return (
    <div className={classNames([styles.body], {[styles[className]]: className})}>
      {children}
    </div>
  );
};