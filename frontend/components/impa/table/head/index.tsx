import * as React from "react";
import { isEmpty } from "lodash";
import { paramCase } from "change-case";
import classNames from "classnames";

import { Header } from "../header";

import styles from "./style.module.scss";
import { Props } from "./types";


export const Head: React.FC<Props> = (props) => {
  const { children, className, headers } = props;

  const renderHeaders = () => {
    return headers.map(
      (header) => {
        return (
          <Header key={paramCase(header)}>{header}</Header>
        )
      }
    )
  };

  return (
    <div className={classNames([styles.head], {[styles[className]]: className})}>
      {isEmpty(headers) ? children : renderHeaders()}
    </div>
  );
};