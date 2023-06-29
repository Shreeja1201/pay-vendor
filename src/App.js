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
          justifyContent: "space-around",
          marginBottom:'20px'
        }}
      >
        <h1>Make vendor payment through credit card</h1>
        <img
          src={mewtIcon}
          alt="Mewt Icon"
          style={{ width: "auto", height: "auto",backgroundColor:'gray' }}
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
