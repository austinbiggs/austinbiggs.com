import * as React from "react";

import { Page } from "components/common";

import styles from "./style.module.scss";

const Privacy: React.FC = () => {
  return (
    <Page name="Privacy">
      <div className={styles.page} />
    </Page>
  );
};

export default Privacy;
