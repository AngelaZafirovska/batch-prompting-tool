import React, { useState } from 'react';
import LoginForm from '../components/auth/LoginForm';
import SignUpPage from '@/components/auth/SignUpForm';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      {isLogin ? <LoginForm /> : <SignUpPage />}
      <button onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Need an account? Sign Up' : 'Already have an account? Login'}
      </button>
    </div>
  );
};

export default AuthPage;
