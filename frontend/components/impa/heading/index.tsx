import * as React from "react";
import classNames from "classnames";

import { ELEMENT_MAPPING } from "./constants";
import styles from "./style.module.scss";
import { Props } from "./types";

export const Heading: React.FC<Props> = (props) => {
  const { children, size } = props;

  const Element = ELEMENT_MAPPING[`${size}`];

  return (
    <Element className={classNames(styles.primary, styles[`${size}`])}>
      {children}
    </Element>
  );
};
