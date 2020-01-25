import React from 'react';
import './signIn.scss';
import SignIn from '../../components/sign-in/signIn';
import Signup from '../../components/sign-up/signup';

const AuthenticationForm = () => {
    return (<div className="Authentication">
         <SignIn/>
         <Signup />
    </div>  );
}
 
export default AuthenticationForm;