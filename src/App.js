
import { useState } from 'react';
import LoginForm from './components/login_form';
import RegisterForm from './components/register_form';

const App = () => {
  const [authState, setAuthState] = useState('login');

  const onChangeState = () => {
    setAuthState('register');
  }
  return (
    <div style={{
      position: "absolute",
      top: "50%",
      left:"50%",
      transform: "translate(-50%, -50%)",
      width: "200px",
      innerHeight: "200px",
      // background: ""
      }}>
        {authState == 'login' ? <LoginForm changeState={onChangeState}/> : <RegisterForm />}
    </div>
  );
}

export default App;
