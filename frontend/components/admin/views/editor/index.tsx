import * as React from "react";
import EditorJS from "@editorjs/editorjs";
import { isUndefined } from "lodash";
import { Button, Col, Container, Row } from "react-bootstrap";

import { useFetchEntity } from "hooks";
import { AdminLayout } from "components/admin/layout";
import { Editor } from "components/admin/editor";

import { Props } from "./types";
import styles from "./style.module.scss";

const validateEntityType = (entityType: Props["entity"]["type"]) => {
  if (isUndefined(entityType)) {
    return false;
  }

  // todo(austinbiggs): refactor this to a shared util that strips plurality
  switch (entityType) {
    // case "Course":
    case "Page":
    case "Post":
      return true;
    default:
      throw new Error("entityType could not be verified");
  }
};

const EditorView: React.FC<Props> = (props: Props) => {
  const { mode, entity: entityFromProps } = props;
  const [editorInstance, setEditorInstance] = React.useState(null as EditorJS);

  console.log({ editorInstance });

  // verify the entity type is valid
  validateEntityType(entityFromProps.type);

  const { data: entity } = useFetchEntity(entityFromProps);

  React.useEffect(() => {
    if (mode === "edit") {
      // fetchEntity();
    }
  }, []);

  // if(mode === "edit"){
  //   const fetchEntity = useFetchEntity(entity);
  //   console.log("fetchEntity",fetchEntity);
  // }

  // const [insertEntity] = useInsertEntity(entity);

  // setup mutation
  // const [insertPost] = useMutation(InsertPost);
  //
  // if (!called && mode === "edit") {
  //   getPost();
  // } else if (loading) {
  //   return <>Loading&hellip;</>;
  // }
  //
  // const post = data?.posts_by_pk;
  // const content = post?.content;

  // const handleSave = () =>
  //   editorInstance.save().then((saveData) => {
  //     insertPost({
  //       variables: {
  //         content: JSON.stringify(saveData),
  //         createdBy: 1,
  //         slug: "new-post",
  //         updatedBy: 1,
  //         title: "New Post",
  //         status: "published",
  //         summary: JSON.stringify(saveData),
  //       },
  //     }).then((result) => console.log("insertPost then", result));
  //   });

  const handleSave = () => console.log("handleSave");
  const content = entity as any;

  return (
    <AdminLayout>
      <Container>
        <Row>
          <Col xs={12} sm={12} md={12} lg={12} xl={12}>
            <Button onClick={handleSave}>Save</Button>
            <div className={styles.content}>
              <Editor content={content} onInit={setEditorInstance} />
            </div>
          </Col>
        </Row>
      </Container>
    </AdminLayout>
  );
};

export { CREATE, EDIT } from "./constants";
export { EditorView };
