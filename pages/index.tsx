import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
import * as React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";

import { Icon, Page } from "components/common";

import styles from "./home/style.module.scss";

const Home: React.FC = () => {
  return (
    <Page name="Home">
      <div className={styles.hero}>
        <Container>
          <Row>
            <Col xs={4} sm={4} md={4} lg={5} xl={5}>
              <div className={styles.content}>
                <h1>
                  Master <span>frontend</span> web development
                </h1>
                <p>
                  Learn about all things frontend including TypeScript, React,
                  Apollo, GraphQL, etc.
                </p>
                <Button
                  className={styles.button}
                  href="/blog"
                  variant="success"
                >
                  Start Reading
                  <Icon className={styles.icon} icon={faLongArrowAltRight} />
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Page>
  );
};

export default Home;
