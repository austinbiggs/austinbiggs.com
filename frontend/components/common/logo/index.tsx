import * as React from "react";
import { Image } from "react-bootstrap";
import Link from "next/link";

import { Variant } from "./types";

interface Props {
  className?: string;
  type: string;
  variant?: Variant;
}

const Logo: React.FC<Props> = (props) => {
  const { className, type, variant = "dark" } = props;

  const source = () => {
    switch (type) {
      case "text":
      case "legacy-text":
      case "legacy-symbol":
        return `/logos/${variant}/${type}.svg`;
      case "symbol":
      default:
        return `/logos/${variant}/symbol.svg`;
    }
  };

  return (
    <div className={className}>
      <Link href="/">
        <Image alt="Austin Biggs" src={source()} />
      </Link>
    </div>
  );
};

export { Logo };
