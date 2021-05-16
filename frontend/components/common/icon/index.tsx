import * as React from "react";
import classNames from "classnames";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

import styles from "./style.module.scss";

type IconProp = IconDefinition;
interface Props extends FontAwesomeIconProps {
  icon: IconProp;
}

const Icon: React.FC<Props> = (props) => {
  const { className } = props;

  return (
    <FontAwesomeIcon
      {...props}
      className={classNames(styles.icon, className)}
    />
  );
};

export { Icon };
