import React from "react";
import LoginForm from './loginForm';
import { connect } from "react-redux";
import * as action from '../../actions/index';
import { Redirect } from "react-router-dom";

function Login(props) {
    function loginUser(userdata) {
        props.dispatch(action.login(userdata));
    }
    const { isAuth, errors } = props.auth;
    const { successRegister } = props.location.state || false;
    const token=localStorage.getItem('auth_token');
    if (isAuth && token) {
        return <Redirect to={{ pathname: '/rentals' }} />
    }

    return (
        <section id="login">
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-5">
                        <h1>Login</h1>
                        {
                            successRegister && <div className='alert alert-success'>
                                <p>You have been successfully register ,Please login !!</p>
                            </div>
                        }
                        <LoginForm submitCb={loginUser} errors={errors} />
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="image-container">
                            <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                            <img src={process.env.PUBLIC_URL+'/login-image.jpg'} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    }
}

export default connect(mapStateToProps)(Login);