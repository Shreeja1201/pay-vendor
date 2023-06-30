import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import mewtIcon from "./Class=Logo white 1.svg";


function OTP() {
  const [otpToken, setOtpToken] = useState('');
  const [correctOTP, setCorrectOTP] = useState(false);


  const navigate = useNavigate();

  const handleNextClick = () => {
    if (correctOTP) {
      navigate('/options');
    } else {
      alert('Enter correct OTP');
    }
  };

  const handleOtpToken = (event) => {
    const token = event.target.value;
    if(token.length>4){
      setOtpToken(token.slice(0,4))
    }
    else{
      setOtpToken(token);
    }
    if (token === '1234') {
      setCorrectOTP(true);
    } else {
      setCorrectOTP(false);
    }
  };

  return (
    <div className="main-body" style={{ marginTop: '20px' }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom:'20px'
        }}
      >
        <h1>OTP Screen</h1>
        <img
          src={mewtIcon}
          alt="Mewt Icon"
          style={{ width: "auto", height: "auto",backgroundColor:'gray' }}
        ></img>
      </div>
      <div
        style={{
          paddingRight: '10px',
          display: 'flex',
          justifyContent: 'space-around',
        }}
      >
        <label className="common-label">OTP Token</label>
        <input
          className="common-input"
          name="Phone number"
          placeholder="enter your OTP here"
          onChange={handleOtpToken}
          value={otpToken}
        ></input>
        <button className="black-button" onClick={handleNextClick}>
          next
        </button>
      </div>
      <p>For demo purpose please use 1234 as OTP</p>
    </div>
  );
}

export default OTP;
