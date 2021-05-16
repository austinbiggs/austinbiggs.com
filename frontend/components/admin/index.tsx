import * as React from "react";

import { Provider } from "gql/provider";
import { useAnalytics } from "hooks";
import NoSsr from "components/common/no-ssr";

import { Document } from "../layout";

interface Props {
  children: React.ReactNode;
  name: string;
}

const isProduction = process.env.NODE_ENV === "production";

const Admin: React.FC<Props> = (props) => {
  const { children, name } = props;
  const { trackPage } = useAnalytics();

  React.useEffect(() => {
    // Only init analytics in production
    if (!isProduction) {
      // return;
    }

    trackPage();
  }, []);

  return (
    <Provider>
      <Document.Head pageName={name} />
      <NoSsr>{children}</NoSsr>
    </Provider>
  );
};

export { Admin };
