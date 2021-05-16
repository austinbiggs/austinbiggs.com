import * as React from "react";

export interface Props {
  children: React.ReactNode;
  size: Size;
}

export type Size =
  | "xxxl"
  | "xxl"
  | "xl"
  | "lg"
  | "md"
  | "sm"
  | "xs"
  | "xxs"
  | "xxxs";
