import * as React from "react";
import classnames from "classnames";
import { throttle } from "lodash";
import { Col, Container, Row } from "react-bootstrap";

import { Logo } from "components/common";
import { Header as HeaderMenu } from "components/layout/menus";

import styles from "./style.module.scss";
import { HeaderButtons } from "./buttons";

const SCROLL_TARGET = 40;

const Header: React.FC = () => {
  const [sticky, setSticky] = React.useState(false);

  const handleScroll = () => {
    setSticky(window.scrollY >= SCROLL_TARGET);
  };

  // attach scroll event listener
  React.useEffect(() => {
    document.addEventListener("scroll", throttle(handleScroll, 300));

    return () => {
      document.removeEventListener("scroll", throttle(handleScroll, 300));
    };
  }, []);

  return (
    <div className={classnames(styles.header, { [styles.sticky]: sticky })}>
      <Container>
        <Row>
          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <div className={styles.logo}>
              <Logo type="legacy-text" />
            </div>
          </Col>
          <Col xs={6} sm={6} md={6} lg={6} xl={6}>
            <HeaderMenu />
          </Col>
          <Col xs={3} sm={3} md={3} lg={3} xl={3}>
            <HeaderButtons />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { Header };
