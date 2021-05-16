import * as React from "react";

import { Provider } from "gql/provider";
import { useAnalytics } from "hooks";
import { Document, Header } from "components/layout";

interface Props {
  children: React.ReactNode;
  name: string;
}

const isProduction = process.env.NODE_ENV === "production";

const Page: React.FC<Props> = (props) => {
  const { children, name } = props;
  const { trackPage } = useAnalytics();

  React.useEffect(() => {
    // Only init Google Analytics in Production
    if (!isProduction) {
      // return;
    }

    trackPage();
  }, []);

  return (
    <Provider>
      <Document.Head pageName={name} />
      <Header />

      <>{children}</>
    </Provider>
  );
};

export { Page };
