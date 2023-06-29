import React from "react";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';
import OTPScreen from "./OTP";
import App from "./App";
import AccountDetailsScreen from './AccountDetails';
import PaymentCompletionScreen from './CompletionScreen';
import PaymentOptionsScreen from './paymentOptions'

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/otp" element={<OTPScreen />} />
        <Route path="/accountDetails" element={<AccountDetailsScreen />} />
        <Route path="/done" element={<PaymentCompletionScreen />} />
        <Route path="/options" element={<PaymentOptionsScreen />} />
      </Routes>  
    </Router>
  );
};

export default AppRouter;

// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import HomeScreen from './HomeScreen';
// import OTPS from './OTP';

// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route exact path="/" component={HomeScreen} />
//         <Route path="/otp" component={OTPScreen} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
