import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";

import { SidebarMenu, TopbarMenu } from "./menus";
import styles from "./style.module.scss";

const AdminLayout: React.FC = (props) => {
  const { children } = props;

  return (
    <div className={styles.layout}>
      <SidebarMenu />
      <div className={styles.wrapper}>
        <Container fluid className={styles.container}>
          <Row className="no-gutters">
            <Col xs={12} sm={12} md={12} lg={12} xl={12}>
              <Row className="no-gutters">
                <TopbarMenu />
              </Row>
              <Row className="no-gutters">{children}</Row>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export { AdminLayout };
