/* eslint-disable eqeqeq */
import { useState } from "react";
import "./App.css";
import { Slides } from "./Slides";

function App() {
  const [indx, setIndx] = useState(0);

  const funcReset = () => {
    setIndx(0);
  };

  const funcPrev = () => {
    if (indx > 0) {
      setIndx(indx - 1);
    }
  };

  const funcNext = () => {
    if (indx < Slides.length - 1) {
      setIndx(indx + 1);
    }
  };

  return (
    <>
      <div className="header">
        <div className="button">
          <button
            className="button-restart"
            onClick={funcReset}
            // eslint-disable-next-line eqeqeq
            disabled={indx == 0 ? true : false}
          >
            Restart
          </button>
          <button
            className="button-prev"
            onClick={funcPrev}
            disabled={indx == 0 ? true : false}
          >
            Prev
          </button>
          <button
            className="button-next"
            onClick={funcNext}
            disabled={indx == Slides.length - 1 ? true : false}
          >
            Next
          </button>
        </div>
        <div className="taks">
          <h1 className="title">{Slides[indx].title}</h1>
          <p className="text">{Slides[indx].text}</p>
        </div>
      </div>
    </>
  );
}

export default App;
