
import { useState } from 'react';
import LoginForm from './components/login_form';
import RegisterForm from './components/register_form';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ForgotPassword from './components/forgot_password';

const App = () => {
  // const [authState, setAuthState] = useState('login');

  // const onChangeView = () => {
  //   setAuthState('register');
  // }
  return (
    <>
      <div style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}>
        <Router>
          <Routes>
            <Route path="/" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
          </Routes>
        </Router>
      </div>

    </>
  );
}

export default App;
