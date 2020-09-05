import React, { FC } from "react";
import { ISocialAccount } from "../../layout/model/socialAccount";

const HeaderSocialMediaList: FC<{ socialAccounts: ISocialAccount[] }> = ({
  socialAccounts,
}) => {
  return (
    <ul className="social-media-account">
      {socialAccounts.map((sa) => {
        return (
          <li key={sa.id}>
            <a href={sa.url}>
              <img src={sa.logo.url} alt={sa.logo.fileName} />
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderSocialMediaList;
