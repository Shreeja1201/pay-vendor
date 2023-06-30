import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AccountDetails() {
  const navigate = useNavigate();
  const [amount, setAmount] = useState("");

  const handleCompletionClick = () => {
    navigate("/done");
  };

  const handleAmountChange = (event) => {
    const token=event.target.value;
    setAmount(token);
  };


  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h1>Please enter the valid account details to pay the vendor</h1>
      <div
        style={{
          paddingRight: "10px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <label className="common-label">Amount</label>
        <input
          name="Phone number"
          className="common-input"
          placeholder="enter amount here"
          onChange={handleAmountChange}
        ></input>
      </div>

      <div
        style={{
          paddingRight: "10px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {" "}
        <label className="common-label">Name of the vendor</label>
        <input
          name="Phone number"
          className="common-input"
          placeholder="enter name here"
        ></input>
      </div>

      <div
        style={{
          paddingRight: "10px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        <label className="common-label">Bank Account number</label>
        <input
          name="Phone number"
          className="common-input"
          placeholder="enter account number here"
        ></input>
      </div>

      <div
        style={{
          paddingRight: "10px",
          display: "flex",
          justifyContent: "flex-start",
        }}
      >
        {" "}
        <label className="common-label">IFSC Code</label>
        <input
          name="Phone number"
          className="common-input"
          placeholder="enter IFSC Code here"
        ></input>
      </div>

      <button className='black-button' 
      style={{position:'absolute'}} 
      onClick={handleCompletionClick}>
        Make payment ₹{amount === "" ? "0" : 1.02*amount}</button>
    </div>
  );
}

export default AccountDetails;
