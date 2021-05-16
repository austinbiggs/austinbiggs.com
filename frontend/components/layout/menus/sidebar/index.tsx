import * as React from "react";

interface MenuLink {
  href: string;
  text: string;
  title: string;
}

const Sidebar: React.FC = () => {
  const links = {
    categories: [
      { href: "/latest", text: "Latest", title: "Latest Articles" },
      { href: "/languages/js", text: "Javascript", title: "Learn Javascript" },
      {
        href: "/frameworks/react-js",
        text: "React.js",
        title: "Learn React.js",
      },
      { href: "/frameworks/next-js", text: "Next.js", title: "Learn Next.js" },
      {
        href: "/library/apollo",
        text: "Apollo Client",
        title: "Learn Apollo Client",
      },
      { href: "/languages/graphql", text: "GraphQL", title: "Learn GraphQL" },
      { href: "/etc", text: "Etc", title: "Other Knowledge" },
    ],
    meta: [{ href: "/privacy", text: "Privacy", title: "Privacy Policy" }],
    pages: [
      { href: "/", text: "Home", title: "Home" },
      { href: "/about", text: "About", title: "About Austin Biggs" },
    ],
  };

  const renderLinks = (data: MenuLink[]) => {
    return data.map((link: MenuLink) => {
      return (
        <li key={link.href}>
          <a href={link.href} title={link.title}>
            {link.text}
          </a>
        </li>
      );
    });
  };

  return (
    <>
      <ul id="pageMenu">{renderLinks(links.pages)}</ul>
      <ul id="categoryMenu">{renderLinks(links.categories)}</ul>
      <ul id="metaMenu">{renderLinks(links.meta)}</ul>
    </>
  );
};

export { Sidebar };
