import React, { useState } from "react";
import plusIcon from "../../assets/plus.png";
import "./Sidebar.css";

function Sidebar(props) {
  const colors = ["#fe9b72", "#fec971", "#00d4fe", "#e4ee91"];
  const [listOpen, setListOpen] = useState(false);
  return (
    <>
      <div className="sidebar">
        <img
          onClick={() => setListOpen(!listOpen)}
          className="plus_icon_img"
          src={plusIcon}
          alt="add-icon-img"
        />
        <ul
          style={{ height: listOpen ? "300px" : "0" }}
          className="sidebar_list"
        >
          {colors.map((value, index) => {
            return (
              <li
                key={index}
                style={{ background: value }}
                className="sidebar_list_item"
                onClick={() => props.createNote(value)}
              />
            );
          })}
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
