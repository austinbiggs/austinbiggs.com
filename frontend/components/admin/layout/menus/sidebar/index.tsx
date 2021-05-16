import * as React from "react";
import classNames from "classnames";
import { Button, Nav } from "react-bootstrap";
import { faFileAlt } from "@fortawesome/free-regular-svg-icons";
import {
  faTachometerAlt,
  faGraduationCap,
} from "@fortawesome/free-solid-svg-icons";

import { Icon, Logo } from "components/common";

import styles from "./style.module.scss";

const SidebarMenu: React.FC = () => {
  const iconColor = "#fff";

  return (
    <div className={styles.menu}>
      <Nav className="flex-column">
        <Nav.Item>
          <Button
            aria-label="Home"
            className={classNames([styles.logo, styles.link])}
            href="/"
            title="Home"
            variant="link"
          >
            <Logo type="symbol" variant="light" />
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            aria-label="Dashboard"
            className={styles.link}
            href="/admin"
            title="Dashboard"
            variant="link"
          >
            <Icon
              className={styles.icon}
              color={iconColor}
              icon={faTachometerAlt}
            />
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            aria-label="Posts"
            className={styles.link}
            href="/admin/posts"
            title="Posts"
            variant="link"
          >
            <Icon className={styles.icon} color={iconColor} icon={faFileAlt} />
          </Button>
        </Nav.Item>
        <Nav.Item>
          <Button
            aria-label="Courses"
            className={styles.link}
            href="/admin/courses"
            title="Courses"
            variant="link"
          >
            <Icon
              className={styles.icon}
              color={iconColor}
              icon={faGraduationCap}
            />
          </Button>
        </Nav.Item>
      </Nav>
    </div>
  );
};

export { SidebarMenu };
