import React, { FC } from "react";
import { IContactInformation } from "../../layout/model/contactInformation";

const HeaderContactInfo: FC<{ contactInfo: IContactInformation[] }> = ({
  contactInfo,
}) => {
  return (
    <ul className="contact-informations">
      {contactInfo.map((ci) => {
        return (
          <li key={ci.id}>
            <img className="icon" src={ci.logo.url} alt={ci.logo.fileName} />
            <div className="details">
              <div className="details--value">{ci.value}</div>
              <div className="details--label">{ci.label}</div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

export default HeaderContactInfo;
