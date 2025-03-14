import React from "react";
import PropTypes from "prop-types";
import alarmModalStyles from "../assets/css/alarmmodal.module.css";
import user from "../assets/images/katalk.png";

export default function ChatMessage({
  userName,
  position,
  contents,
  departmentNo,
  departmentName,
  pageMovement,
}) {



  return (
    <div
      className={alarmModalStyles.content}
      onClick={() => pageMovement(departmentNo)}
      style={{ cursor: "pointer" }}
    >
      <div
        className={alarmModalStyles.profile}
        style={{ borderRight: "1px solid rgba(170, 170, 170, 0.3)" }}
      >
        <img
          style={{
            transform: "scale(0.3)",
            margin: "-39px 0px 0px -42px",
          }}
          src={user}
          className={alarmModalStyles["user-profile"]}
          alt="profile"
        />
      </div>
      <div
        style={{
          float: "left",
          marginLeft: "2px",
          paddingTop: "4px",
          //   border: "1px solid blue",
          height: "100%",
        }}
      >
        <div
          style={{
            // border: "1px solid purple",
            height: "60%",
            fontWeight: "bolder",
            fontSize: "18px",
            width: "180px",
          }}
        >{`${userName} ${position} (${departmentName})`}</div>

        <div
          style={{
            // border: "1px solid magenta",
            height: "40%",
            width: "180px",
            textOverflow: "ellipsis",
            borderTop: "1px solid rgba(170, 170, 170, 0.3)",
          }}
        >{`${contents}`}</div>
      </div>
    </div>
  );
}

ChatMessage.propTypes = {
  departmentNo: PropTypes.number.isRequired,
};
