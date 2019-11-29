import React, { Component } from 'react';
import './signIn.scss';
import SignIn from '../../components/sign-in/signIn';

const AuthenticationForm = () => {
    return (<div className="Authentication">
         <SignIn/>
    </div>  );
}
 
export default AuthenticationForm;