import * as React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { isArray } from "lodash";

import { Page } from "components/common";
import client from "gql/client";
import { GetPostsDocument } from "hooks/useFetchEntities/gql/get-posts";

import styles from "./style.module.scss";

const Blog: React.FC = () => {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
    client()
      .query({
        query: GetPostsDocument,
        variables: {
          limit: 10,
          status: "published",
        },
      })
      .then((result: any) => {
        setPosts(result.data.posts);
      })
      .catch((error: any) => {
        console.error(error);
      });
  }, []);

  const renderPosts = () => {
    if (!isArray(posts)) {
      return;
    }

    return posts.map((post: any) => {
      return <div key={post.id}>{post.title}</div>;
    });
  };

  return (
    <Page name="Blog">
      <div className={styles.hero}>
        <Container>
          <Row>
            <Col xs={4} sm={4} md={4} lg={5} xl={5}>
              <div className={styles.content}>
                <>{renderPosts()}</>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Page>
  );
};

export default Blog;
