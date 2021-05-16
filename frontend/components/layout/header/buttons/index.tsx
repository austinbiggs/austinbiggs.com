import { faBars, faSearch } from "@fortawesome/free-solid-svg-icons";
import { Button } from "react-bootstrap";
import classNames from "classnames";
import * as React from "react";

import { Icon } from "components/common/icon";

import styles from "./style.module.scss";

const HeaderButtons = () => {
  const openSearch = () => {
    console.log("open search");
  };

  const openMenu = () => {
    console.log("open menu");
  };

  return (
    <div className="d-flex justify-content-end">
      <Button
        aria-label="Open Search"
        className={styles.button}
        onClick={openSearch}
        variant="link"
      >
        <Icon
          className={classNames(styles.icon, styles.menu)}
          icon={faSearch}
        />
      </Button>
      <Button
        aria-label="Open Menu"
        className={styles.button}
        onClick={openMenu}
        variant="link"
      >
        <Icon className={classNames(styles.icon, styles.menu)} icon={faBars} />
      </Button>
    </div>
  );
};

export { HeaderButtons };
