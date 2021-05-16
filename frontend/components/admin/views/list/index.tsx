import * as React from "react";
import { head, isUndefined } from "lodash";
import { Col } from "react-bootstrap";
import { capitalCase } from "change-case";

import { useFetchEntities } from "hooks/useFetchEntities";
import { AdminLayout } from "components/admin/layout";
import { Entity } from "components/admin/types";
import { Heading, Table } from "components/impa";

import { Props } from "./types";

const validateEntityType = (entityType: Entity["type"]) => {
  if (isUndefined(entityType)) {
    return false;
  }

  // todo(austinbiggs): refactor this to a shared util that strips plurality
  switch (entityType.toLowerCase()) {
    case "pages":
    case "posts":
      return true;
    default:
      throw new Error("entityType could not be verified");
  }
};

const ListView: React.FC<Props> = (props: Props) => {
  const { entityType } = props;

  // verify the entity type is valid
  validateEntityType(entityType);

  const { entities } = useFetchEntities(entityType);

  const renderTable = () => {
    const headers = ["Title", "Author", "Date", "Status"];

    const renderRows = (entities: Entity[]) => {
      return entities.map((entity) => {
        return (
          <Table.Row key={entity.id}>
            <Table.Cell>{entity.title}</Table.Cell>
            <Table.Cell>{entity.userByCreatedById.fullName}</Table.Cell>
            <Table.Cell>{entity.createdAt}</Table.Cell>
            <Table.Cell>{entity.status}</Table.Cell>
          </Table.Row>
        );
      });
    };

    return (
      <Table.Base>
        <Table.Head headers={headers} />
        <Table.Body>
          {entities && renderRows(head(Object.values(entities)))}
        </Table.Body>
      </Table.Base>
    );
  };

  return (
    <AdminLayout>
      <Col>
        <Heading size="sm">{entityType && capitalCase(entityType)}</Heading>
        <>{renderTable()}</>
      </Col>
    </AdminLayout>
  );
};

export { ListView };
