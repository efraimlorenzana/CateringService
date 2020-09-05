import React, { FC } from "react";
import { INavigation } from "../../layout/model/header";
import { NavLink } from "react-router-dom";

const HeaderNav: FC<{ nav: INavigation[] }> = ({ nav }) => {
  return (
    <nav className="header__navigation">
      <div>
          {
              nav.map(n => (n.isNav && <NavLink key={n.url} to={n.url}>{n.page}</NavLink>))
          }
      </div>
    </nav>
  );
};

export default HeaderNav;