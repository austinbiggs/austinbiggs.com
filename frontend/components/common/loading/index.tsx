import * as React from "react";

import { Logo } from "components/common";

import styles from "./style.module.scss";

const Loading: React.FC = () => {
  return (
    <div className={styles.loading}>
      <Logo className={styles.indicator} type="symbol" />
    </div>
  );
};

export { Loading };
