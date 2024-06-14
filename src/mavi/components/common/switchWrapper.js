import React, { useContext, useEffect, useState } from "react";
import Orange from "../../../images/colors/orange.png";
import Purple from "../../../images/colors/purple.png";
import Red from "../../../images/colors/red.png";
import Violet from "../../../images/colors/violet.png";
import Blue from "../../../images/colors/blue.png";
import Golden from "../../../images/colors/golden.png";
import Magenta from "../../../images/colors/magenta.png";
import YellowGreen from "../../../images/colors/yellowgreen.png";
import Green from "../../../images/colors/green.png";
import Yellow from "../../../images/colors/yellow.png";
import { MouseContext } from "../../context/mouseContext";

const SwitchWrapper = ({ template }) => {
  const [color, setColor] = useState(localStorage.getItem('colors') ? localStorage.getItem('colors') : "blue");
  const [themeColor, setTheme] = useState(localStorage.getItem('themeColor') ? localStorage.getItem('themeColor') : "dark");
  const [cursor, setCursor] = useState(localStorage.getItem('cursor') ? localStorage.getItem('cursor') : "cursor_animation");
  const [isOpen, setIsopen] = useState(false);
  const { cursorChangeHandler } = useContext(MouseContext);

  useEffect(() => {
    template(themeColor, color, cursor);
  }, [themeColor, color, cursor]);

  const switchTheme = () => {
    if (themeColor == "light") {
      setTheme("dark");
      localStorage.setItem("themeColor", "dark");
    } else if (themeColor == "dark") {
      setTheme("light");
      localStorage.setItem("themeColor", "light");
    }
  };

  const switchCursor = () => {
    if (cursor == "cursor_pointer") {
      setCursor("cursor_animation");
      localStorage.setItem("cursor", "cursor_animation");
    } else if (cursor == "cursor_animation") {
      setCursor("cursor_pointer");
      localStorage.setItem("cursor", "cursor_pointer");
    }
  };

  const ToggleSidebar = () => {
    isOpen === true ? setIsopen(false) : setIsopen(true);
  };

  return (
    <React.Fragment>

      {/* Style Switcher Start */}
      <div className={`style-switch-wrapper ${isOpen == true ? "active" : ""}`}>

        {/* Style Switcher Switch Start */}
        <div className="style-switch-button" onClick={ToggleSidebar} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
          {isOpen == false ? (
            <React.Fragment>
              <i className="fa fa-cog" aria-hidden="true"></i>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <i className="fas fa-times"></i>
            </React.Fragment>
          )}
        </div>
        {/* Style Switcher Switch End */}

        {/* Color Style Switcher Start */}
        <h4>Couleur de fond</h4>
        <ul>
          <li onClick={() => { setColor("orange"); localStorage.setItem("colors", "orange"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Orange} alt="orange" />
          </li>
          <li onClick={() => { setColor("purple"); localStorage.setItem("colors", "purple"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Purple} alt="purple" />
          </li>
          <li onClick={() => { setColor("red"); localStorage.setItem("colors", "red"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Red} alt="red" />
          </li>
          <li onClick={() => { setColor("violet"); localStorage.setItem("colors", "violet"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Violet} alt="violet" />
          </li>
          <li onClick={() => { setColor("blue"); localStorage.setItem("colors", "blue"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Blue} alt="blue" />
          </li>
          <li onClick={() => { setColor("golden"); localStorage.setItem("colors", "golden"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Golden} alt="golden" />
          </li>
          <li onClick={() => { setColor("magenta"); localStorage.setItem("colors", "magenta"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Magenta} alt="magenta" />
          </li>
          <li onClick={() => { setColor("yellowgreen"); localStorage.setItem("colors", "yellowgreen"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={YellowGreen} alt="yellowgreen" />
          </li>
          <li onClick={() => { setColor("green"); localStorage.setItem("colors", "green"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Green} alt="green" />
          </li>
          <li onClick={() => { setColor("yellow"); localStorage.setItem("colors", "yellow"); }} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
            <img src={Yellow} alt="yellow" />
          </li>
        </ul>
        {/* Color Style Switcher End */}
        {/* Light Mode Switcher Start */}
        <h4>Light Mode</h4>
        <div className="switch" onClick={() => switchTheme()} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
          {themeColor == "light" ? (
            <React.Fragment>
              <i className="fas fa-sun"></i>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <i className="fas fa-moon"></i>
            </React.Fragment>
          )}
        </div>
        {/* Light Mode Switcher End */}

        {/* Cursor Mode Switcher Start */}
        <h4>Pointeur de souris</h4>
        <div className="switch" onClick={() => switchCursor()} onMouseEnter={() => cursorChangeHandler("hovered")} onMouseLeave={() => cursorChangeHandler("")}>
          {cursor == "cursor_pointer" ? (
            <React.Fragment>
              <i className="fas fa-mouse-pointer"></i>
            </React.Fragment>
          ) : (
            <React.Fragment>

              <i className="fas fa-record-vinyl"></i>
            </React.Fragment>
          )}
        </div>
        {/* Cursor Mode Switcher End */}
      </div>
      {/* Style Switcher End */}

      {/* Full Body Overlay Start*/}
      <div className={`sidebar-overlay ${isOpen == true ? "active" : ""}`} onClick={ToggleSidebar}></div>
      {/* Full Body Overlay Start*/}

    </React.Fragment>
  );
};

export default SwitchWrapper;
