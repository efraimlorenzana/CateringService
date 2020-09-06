import React, { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { getHeader } from "../store/action/headerAction";
import { IStateProps, IAppDispatchProps } from "./model/reduxProps";
import Header from "../component/header/header";
import { getStandardPages, getBlockContents } from "../store/action/pagesAction";
import { INavigation } from "./model/header";
import { withRouter, Switch, Route } from "react-router-dom";
import DynamicRoute from "../component/dynamicRoute";
import StandardPageComponent from "../component/pages/standardPageComponent";
import NotFound from "./notFound";

const mapState = (state: IStateProps) => ({
  header: state.header,
  standardPages: state.standardPages,
});

const mapDispatch = {
  getHeader: () => getHeader(),
  getStandardPages: () => getStandardPages(),
  getBlockContents: (ids: string[], pageID: string) => getBlockContents(ids, pageID)
};

type Props = IStateProps & IAppDispatchProps;

const App = (_: Props) => {
  const isLoading = _.header === null || _.standardPages!.length === 0;

  useEffect(() => {
    if (isLoading) _.header === null ? _.getHeader() : _.getStandardPages();
  }, [_, isLoading]);

  if (isLoading) return <h1>Loading...</h1>;

  const nav: INavigation[] = _.standardPages!.map((p) => ({
    page: p.name,
    url: p.url,
    isMain: p.mainPage,
    isNav: p.enableNavigation,
  }));

  return (
    <Fragment>
      <Header header={_.header!} nav={nav} />
      {_.standardPages!.map((page, i) => {
        return (
          <Fragment key={page.id}>
            {
              <DynamicRoute  nav={nav[i]} element={<StandardPageComponent page={page} fetchContent={_.getBlockContents} />} />
            }
          </Fragment>
        );
      })}
      <Route 
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <Switch>
              <Route component={NotFound} />
            </Switch>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default withRouter(
  connect<IStateProps, IAppDispatchProps>(mapState, mapDispatch)(App)
);
