import { useState, useEffect } from 'react';
import mewtIcon from "./Class=Logo white 1.svg";

function CompletionScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className='payment-screen'>
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
      {isLoading ? (
        <>
          <h1>Payment Processing</h1>
          <div className='loading-icon'>
            Loading...
          </div>
        </>
      ) : (
        <h1>Payment Done</h1>
      )}
    </div>
  );
}

export default CompletionScreen;
