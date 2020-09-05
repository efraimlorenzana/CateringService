import React from "react";

const UserCircleIcon = () => {

  const style = {
    display: "inline-block",
    width: "2rem",
    height: "2rem",
    strokeWidth: 0,
    stroke: "black",
    fill: "black",
  };

  return (
    <svg className="icon icon-account_circle" style={style}>
      <use xlinkHref="#icon-account_circle">
        <symbol id="icon-account_circle" viewBox="0 0 24 24">
          <path d="M12 19.219q1.594 0 3.352-0.938t2.648-2.297q-0.047-1.313-2.109-2.203t-3.891-0.891-3.891 0.867-2.109 2.227q0.891 1.359 2.648 2.297t3.352 0.938zM12 5.016q-1.219 0-2.109 0.891t-0.891 2.109 0.891 2.109 2.109 0.891 2.109-0.891 0.891-2.109-0.891-2.109-2.109-0.891zM12 2.016q4.125 0 7.055 2.93t2.93 7.055-2.93 7.055-7.055 2.93-7.055-2.93-2.93-7.055 2.93-7.055 7.055-2.93z"></path>
        </symbol>
      </use>
    </svg>
  );
};

export default UserCircleIcon;