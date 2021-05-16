import * as React from "react";
import Bugsnag from "@bugsnag/js";
import BugsnagPluginReact from "@bugsnag/plugin-react";
import "bootswatch/dist/litera/bootstrap.min.css";
import LogRocket from "logrocket";
import setupLogRocketReact from "logrocket-react";

import { usePageLoading } from "hooks";
import { Provider } from "gql/provider";
import { Loading } from "components/common";

if (process.env.LOGROCKET_APP_ID) {
  LogRocket.init(process.env.LOGROCKET_APP_ID);
  setupLogRocketReact(LogRocket);
}

const isProduction = process.env.NODE_ENV === "Production";
if (isProduction && process.env.BUGSNAG_API_KEY) {
  Bugsnag.start({
    apiKey: process.env.BUGSNAG_API_KEY,
    plugins: [new BugsnagPluginReact()],
    releaseStage: process.env.NODE_ENV,
    user: {
      id: "1",
      name: "Austin Biggs",
      email: "hi@austinbiggs.com",
    },
  });

  if (process.env.LOGROCKET_APP_ID) {
    Bugsnag.beforeNotify = (data) => ({
      ...data,
      metaData: { ...data.metaData, sessionURL: LogRocket?.sessionURL },
    });
  }
}

const AustinBiggs = ({ Component, pageProps }) => {
  const { loading } = usePageLoading();

  return (
    <Provider>{loading ? <Loading /> : <Component {...pageProps} />}</Provider>
  );
};

export default AustinBiggs;
