import React, { useEffect, useState } from "react";
import { IGrid, IGridDispatchProps } from "../../../layout/model/grid";
import { connect } from "react-redux";
import { IStateProps } from "../../../layout/model/reduxProps";
import { getGridContent } from "../../../store/action/pagesAction";
import { pageComponents } from "../../../layout/utility/components";
import { applyCSS } from "../../../layout/utility/cssGlobalResolver";
import { mediaQuery } from "../../../layout/utility/mediaQuery";
import './grid.css';

interface IProps {
  data: IGrid;
  pageRef: string;
}

const mapState = (state: IStateProps) => ({
  standardPages: state.standardPages,
});

const mapDispatch = {
  getGridContent: (ids: string[], gridID: string) =>
    getGridContent(ids, gridID),
};

type Props = IStateProps & IGridDispatchProps & IProps;

const GridBlock = (_: Props) => {
  const isLoading = _.data.gridContent === undefined;
  const [fetch_flag, setFetchFlat] = useState(true);

  useEffect(() => {
    if (isLoading && fetch_flag) {
      setFetchFlat(false);
      _.getGridContent(
        _.data.content.map((c) => c.id),
        _.data.id
      );
    }
  }, [isLoading, _, fetch_flag, setFetchFlat]);

  //   if (isLoading) return <div>No Content</div>;

  interface IComponents {
    data: any;
    component: any;
  }

  const contents: IComponents[] = [];

  _.data.content.forEach((pr) => {
    if (_.data.gridContent !== undefined) {
      _.data.gridContent!.forEach((c) => {
        if (pr.id === c.id) {
          pageComponents.forEach((pc) => {
            if (c.type === pc.name) {
              contents.push({
                data: c.data,
                component: pc.component,
              });
            }
          });
        }
      });
    }
  });

  const customClasses = [
    `grid-col-${_.data.numberOfColumn}-${mediaQuery()}`,
    ..._.data.customClass,
  ];

  let width = "1200px";

  if (_.data.enableFullWidth) {
    width = "100%";
  }

  return (
    <section
      id={_.data.customId}
      style={{ width, marginLeft: "auto", marginRight: "auto" }}
      className={`grid-block ${customClasses.join(" ")}`}
      data-id={_.data.id}
    >
      {applyCSS(`${_.data.css ?? ""}`, _.data.id, `head`)}
      {contents.map((content, i) =>
        React.createElement(content.component, {
          key: `${i}_${content.data.id}`,
          data: content.data,
          pageRef: _.pageRef,
        })
      )}
    </section>
  );
};

export default connect<IStateProps, IGridDispatchProps>(
  mapState,
  mapDispatch
)(GridBlock);
