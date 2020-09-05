import React, { useEffect, Fragment } from "react";
import { connect } from 'react-redux';
import { getHeader } from "../store/action/headerAction";
import { IStateProps, IDispatchProps } from "./model/reduxProps";
import Header from "../component/header/header";
import { getStandardPages } from "../store/action/pagesAction";
import { INavigation } from "./model/header";
import {
  Route,
  RouteComponentProps,
  withRouter,
  Switch,
  Router
} from "react-router-dom";
import Home from "../component/home/home";

const mapState = (state: IStateProps) => ({
  header : state.header,
  standardPages : state.standardPages
});

const mapDispatch = {
  getHeader: () => getHeader(),
  getStandardPages: () => getStandardPages()
}

type Props = IStateProps & IDispatchProps;

const App = (_: Props) => {

  const isLoading = (_.header === null || _.standardPages!.length === 0);

  useEffect(() => {
    if(isLoading)
      _.header === null ? _.getHeader() : _.getStandardPages();

  }, [_, isLoading]);
 
  if(isLoading) return <h1>Loading...</h1>

  const nav: INavigation[] = _.standardPages!.map(p => ({ page: p.name, url: p.url, isMain: p.mainPage, isNav: p.enableNavigation }));

  return  (
    <Fragment>
      <Header header={_.header!} nav={nav} />
      <Route exact path={["/", `${nav.filter(x => x.isMain)[0].url}`]} component={Home} />

    </Fragment>
  );
};

export default withRouter(connect<IStateProps, IDispatchProps>(mapState, mapDispatch)(App));