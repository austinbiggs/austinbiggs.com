import * as React from "react";

import { Page } from "components/common";

import styles from "./style.module.scss";

const About: React.FC = () => {
  return (
    <Page name="About">
      <div className={styles.page} />
    </Page>
  );
};

export default About;
