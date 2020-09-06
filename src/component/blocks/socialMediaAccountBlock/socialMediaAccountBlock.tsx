import React, { FC } from "react";
import { ISocialAccount } from "../../../layout/model/socialAccount";

interface IProps {
  data: ISocialAccount;
}

const style = {
    cursor: "pointer"
}

const SocialMediaAccountBlock: FC<IProps> = ({ data }) => {
  return (
    <a href={data.url} data-id={data.id} className="social-media-account-block" style={style}>
      <img src={data.logo.url} alt={data.logo.fileName} />
    </a>
  );
};

export default SocialMediaAccountBlock;
