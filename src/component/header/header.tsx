import React, { FC } from "react";
import { IHeader, INavigation } from "../../layout/model/header";
import "./header.css";
import { resolvedCSS } from "../../layout/utility/cssStrStyleResolver";
import { applyCSS } from "../../layout/utility/cssGlobalResolver";
import UserCircleIcon from "../../layout/icons/userCircle";
import HeaderSocialMediaList from "./headerSocialMediaList";
import HeaderContactInfo from "./headerContactInfo";
import HeaderNav from "./headerNav";

interface IProps {
  header: IHeader;
  nav: INavigation[]
}

const Header: FC<IProps> = ({ header, nav }) => {
  const cmsCSS = resolvedCSS(header.css);
  const inlineStyle = {
    ...cmsCSS,
  };

  header.globalCss && applyCSS(header.globalCss, "clientStyling", "head");

  return (
    <header className="header" style={inlineStyle}>
      <div className="header__logo">
        <img src={header.logo.url} alt="Company logo" />
      </div>
      <div className="header__company-info">
        <div className="header__company-info--1">
          <h5 className="welcome-text">{header.welcomeText}</h5>
          <HeaderSocialMediaList socialAccounts={header.socialAccounts} />
          <button>
            <UserCircleIcon />
            {header.accountButtonLabel}
          </button>
        </div>

        <div className="header__company-info--2">
            <HeaderContactInfo contactInfo={header.contactInformations} />
        </div>
      </div>
      <HeaderNav nav={nav} />
    </header>
  );
};

export default Header;
