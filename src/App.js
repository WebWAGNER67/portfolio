import React, { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Mavi from "./mavi";
import Cursor from "./mavi/components/common/cursor";
import SwitchWrapper from "./mavi/components/common/switchWrapper";
import MouseContextProvider from "./mavi/context/mouseContext";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import Popper from 'popper.js';
import { WOW } from "wowjs";
import "./index.css";

function App() {

  const wow = new WOW({
    boxClass: 'wow',      // default
    animateClass: 'animated', // default
    offset: 60,          // default
    mobile: false,       // default
    live: true        // default
  });

  const [theme, setTheme] = useState();
  const [color, setColor] = useState();
  const [cursor, setCursor] = useState();

  const template = (theme, color, cursor) => {
    setTheme(theme);
    setColor(color);
    setCursor(cursor);
  }

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <React.Fragment>
      <MouseContextProvider>
        <BrowserRouter>
          <div className={`${theme} ${color} ${cursor}`}>
            {/* Cursor Start */}
            <Cursor />
            {/* Cursor End */}
            {loading ? <React.Fragment>
              {/* Pre-Loader Start */}
              <div id="preloader">
                <div className="loader_line"></div>
              </div>
              {/* Pre-Loader End */}
            </React.Fragment> : <React.Fragment>
              {/* Switch Toggle Start */}
              <SwitchWrapper template={(theme, color, cursor) => template(theme, color, cursor)} />
              {/* Switch Toggle End */}
              <Mavi />
            </React.Fragment>}
          </div>
        </BrowserRouter>
      </MouseContextProvider>
    </React.Fragment >
  );
}

export default App;
