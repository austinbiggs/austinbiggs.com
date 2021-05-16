import * as React from "react";

import { Page } from "components/common";

import styles from "./style.module.scss";

const Blog: React.FC = () => {
  return (
    <Page name="Blog">
      <div className={styles.page} />
    </Page>
  );
};

export default Blog;
