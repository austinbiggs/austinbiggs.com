import * as React from "react";
import Head from "next/head";

interface Props {
  pageName: string;
}

const buildPageTitle = (pageName: string) => {
  const divider = " | ";
  const siteDescription = "Austin Biggs - Senior Software Engineer in Denver, CO";

  return pageName + divider + siteDescription;
};

const DocumentHead: React.FC<Props> = (props: Props) => {
  const { pageName } = props;

  return (
    <Head>
      <title>{buildPageTitle(pageName)}</title>

      <meta name="theme-color" content="#364b63" />

      <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
      <link
        rel="apple-touch-icon"
        type="image/png"
        href="/icons/apple-touch-icon.png"
      />
      <link rel="alternate icon" href="/icons/favicon.ico" />
      <link
        rel="mask-icon"
        href="/icons/safari-pinned-tab.svg"
        color="#364b63"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap"
        rel="stylesheet"
      />
    </Head>
  );
};

export { DocumentHead };
