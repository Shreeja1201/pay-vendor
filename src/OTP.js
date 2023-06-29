import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function OTP() {
  const [otpToken, setOtpToken] = useState('');

  const navigate = useNavigate();

  const handleNextClick = () => {
      navigate('/options');
    
  };

  const handleOtpToken = (event) => {
    const token = event.target.value;
    setOtpToken(token);

  };

  return (
    <div className="main-body" style={{ marginTop: '20px' }}>
      <h1>OTP Screen</h1>
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
