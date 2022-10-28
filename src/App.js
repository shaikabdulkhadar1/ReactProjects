/* eslint-disable no-eval */
import { useState } from "react";
import "./App.css";

function App() {
  const [inp, setInp] = useState("");
  const [otp, setOtp] = useState("");

  const btnAction = (v) => {
    setInp(inp + v);
    console.log("btn");
  };

  const resAction = (inp) => {
    setOtp(eval(inp).toFixed(3));
    console.log("result");
  };

  const clearAction = () => {
    setInp("");
    setOtp("");
    console.log("clear");
  };

  return (
    <div className="App">
      <div className="main-border">
        <h1 className="heading">react calculator</h1>
        <div className="fields">
          <h3 className="inpField">{inp}</h3>
          <h3 className="otpFeild">{otp}</h3>
        </div>
        <div className="container">
          <button className="item" id="btnClr" onClick={clearAction}>
            C
          </button>
          <button className="item" onClick={() => btnAction("(")}>
            (
          </button>
          <button className="item" onClick={() => btnAction(")")}>
            )
          </button>
          <button className="item" id="btnOpr" onClick={() => btnAction("/")}>
            /
          </button>
          <button className="item" onClick={() => btnAction("7")}>
            7
          </button>
          <button className="item" onClick={() => btnAction("8")}>
            8
          </button>
          <button className="item" onClick={() => btnAction("9")}>
            9
          </button>
          <button className="item" id="btnOpr" onClick={() => btnAction("*")}>
            x
          </button>
          <button className="item" onClick={() => btnAction("4")}>
            4
          </button>
          <button className="item" onClick={() => btnAction("5")}>
            5
          </button>
          <button className="item" onClick={() => btnAction("6")}>
            6
          </button>
          <button className="item" id="btnOpr" onClick={() => btnAction("-")}>
            -
          </button>
          <button className="item" onClick={() => btnAction("1")}>
            1
          </button>
          <button className="item" onClick={() => btnAction("2")}>
            2
          </button>
          <button className="item" onClick={() => btnAction("3")}>
            3
          </button>
          <button className="item" id="btnOpr" onClick={() => btnAction("+")}>
            +
          </button>
          <button className="item" onClick={() => btnAction("0")}>
            0
          </button>
          <button className="item" onClick={() => btnAction(".")}>
            .
          </button>
          <button className="item-eq" id="btnEq" onClick={() => resAction(inp)}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
