import { useState } from "react";
import "./App.css";
import { useNavigate } from "react-router-dom";
import mewtIcon from "./Class=Logo white 1.svg";

function App() {
  const navigate = useNavigate();
  const [phoneNumber, setPhoneNumber] = useState();

  const handlePhoneNo = () => {
    navigate("/otp");
  };
  const handleInputChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  return (
    <div className="main-body">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "flex-start",
        }}
      >
        <h1>Make vendor payment through credit card</h1>
        <img
          src={mewtIcon}
          alt="Mewt Icon"
          style={{ width: "20%", height: "20%" }}
        ></img>
      </div>

      <div
        style={{
          paddingRight: "10px",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <label className="common-label">Phone number</label>
        <input
          className="common-input"
          name="Phone number"
          placeholder="enter your phone number here"
          onChange={handleInputChange}
        ></input>
        <button className="black-button" onClick={handlePhoneNo}>
          go
        </button>
      </div>
    </div>
  );
}

export default App;
