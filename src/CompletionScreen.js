import { useState, useEffect } from 'react';

function CompletionScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating payment processing delay
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer); // Cleanup function to cancel the timer if component unmounts
  }, []);

  return (
    <div className='payment-screen'>
      {isLoading ? (
        <>
          <h1>Payment Processing</h1>
          <div className='loading-icon'>
            {/* Add your loading icon component or animation here */}
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
