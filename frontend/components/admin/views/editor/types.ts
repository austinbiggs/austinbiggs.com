import { Entity } from "components/admin/types";

export interface Props {
  mode: EditorMode;
  entity: Entity;
}

export type EditorMode = "create" | "edit";
