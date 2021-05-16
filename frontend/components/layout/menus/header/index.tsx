import { Nav } from "react-bootstrap";
import * as React from "react";
import classNames from "classnames";
import Link from "next/link";

import { useActivePage } from "hooks/useActivePage";

import styles from "./style.module.scss";

interface MenuLink {
  href: string;
  text: string;
  title: string;
}

const Header: React.FC = () => {
  const { isActive } = useActivePage();

  const links = [
    { href: "/", text: "Home", title: "Home" },
    { href: "/about", text: "About", title: "About Austin Biggs" },
    { href: "/blog", text: "Blog", title: "Blog" },
  ];

  const renderLinks = () =>
    links.map((link: MenuLink) => {
      const active = isActive(link.href);

      return (
        <Link href={link.href} key={link.href}>
          <Nav.Link
            active={active}
            className={classNames([styles.link], {
              [styles.active]: active,
            })}
            href={link.href}
            key={link.href}
            title={link.title}
          >
            {link.text}
          </Nav.Link>
        </Link>
      );
    });

  return (
    <>
      <Nav className="justify-content-center" activeKey="/home">
        {renderLinks()}
      </Nav>
    </>
  );
};

export { Header };
