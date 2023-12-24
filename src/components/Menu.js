import React from "react";

const Menu = ({ title, menuObject }) => {
  return (
    <div className="MenuContainer">
      <p className="title">{title}</p>

      <ul>
        {menuObject &&
          menuObject.map((item) => (
            <li>
              {" "}
              <a href="#">
                <i>{ item.icon }</i>
                <span>{ item.name }</span>
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
};

export { Menu };
