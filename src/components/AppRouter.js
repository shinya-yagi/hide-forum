import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import PageHome from "./PageHome";
import PageNotFound from "./PageNotFound";
import PageThread from "./PageThread";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <React.Fragment>
        <AppHeader />
        <AppContent>
          <Switch>
            <Route exact path="/" component={PageHome} />
            <Route path="/threads/:threadId" component={PageThread} />
            <Route path="*" component={PageNotFound} />
          </Switch>
        </AppContent>
      </React.Fragment>
    </BrowserRouter>
  );
};

export default AppRouter;
