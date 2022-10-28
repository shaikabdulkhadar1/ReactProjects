/* eslint-disable eqeqeq */
import { useState } from "react";
import "./App.css";
import { Slides } from "./Slides";

function App() {
  const [indx, setIndx] = useState(0);
  const [title, setTitle] = useState(Slides[indx].title);
  const [text, setText] = useState(Slides[indx].text);

  const funcReset = () => {
    setIndx(0);
    setTitle(Slides[indx].title);
    setText(Slides[indx].text);
  };

  const funcPrev = () => {
    if (indx > 0) {
      setIndx(indx - 1);
    }
    setTitle(Slides[indx].title);
    setText(Slides[indx].text);
  };

  const funcNext = () => {
    if (indx < Slides.length) {
      setIndx(indx + 1);
    }
    setTitle(Slides[indx].title);
    setText(Slides[indx].text);
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
            disabled={indx == Slides.length ? true : false}
          >
            Next
          </button>
        </div>
        <div className="taks">
          <h1 className="title">{title}</h1>
          <p className="text">{text}</p>
        </div>
      </div>
    </>
  );
}

export default App;
