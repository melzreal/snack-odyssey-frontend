import React from 'react';
import { connect } from 'react-redux';
import { updateLoginForm } from '../actions/loginForm';
import { login } from '../actions/currentUser';

const LoginForm = ({ loginForm, updateLoginForm, login}) => {

    const handleInputChange = event => {
        const { name, value } = event.target 
        const updatedInfo = {
            ...loginForm,
            [name]:value
        }
        updateLoginForm(updatedInfo)
    }

    const handleSubmit = event => {
        debugger
        event.preventDefault();
        login(loginForm)
    }

   return (
    <div>
        <form onSubmit={handleSubmit}>
            <input name="email" 
            type="text"
            value={loginForm.email} 
            placeholder="Email"
            onChange={handleInputChange}/>     
                <br/>
            <input 
            name="password" 
            type="password" 
            value={loginForm.password}
            placeholder="Password"
            onChange={handleInputChange}/>    
                <br/>
            <input type="submit" value="Log In" />
        </form>
    </div>
        );
}

//we get an argument coming into the component, an object of email and pass
const mapStateToProps = state => {
  return {
    loginForm: state.loginForm
  }

}


export default connect(mapStateToProps, { updateLoginForm, login })(LoginForm)