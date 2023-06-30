import {useNavigate} from 'react-router-dom';
import mewtIcon from "./Class=Logo white 1.svg";


function PaymentOptions() {
    const navigate= useNavigate();

  const handlePayment=()=>{
    navigate('/accountDetails')
  }

  return (
    
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '100px'
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          marginBottom:'20px'
        }}
      >
        
        <img
          src={mewtIcon}
          alt="Mewt Icon"
          style={{ width: "auto", height: "auto",backgroundColor:'gray' }}
        ></img>
      </div>
      <button
        className="black-button"
        style={{
          backgroundColor: 'grey',
          marginBottom: '10px',
        }}
      >
        Electricity bill payment
      </button>
      <button
        className="black-button"
        style={{
          backgroundColor: 'grey',
          marginBottom: '10px',
        }}
      >
        Water bill payment
      </button>
      <button
        className="black-button"
        style={{
          backgroundColor: 'grey',
          marginBottom: '10px',
        }}
      >
        GST Taxes payment
      </button>
      <button className="black-button" onClick={handlePayment}>
        Vendor Account payment
      </button>
    </div>
  );
}

export default PaymentOptions;
