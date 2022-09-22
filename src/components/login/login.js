import React from "react";
import LoginForm from './loginForm';
import { connect } from "react-redux";
import * as action from '../../actions/index';

function Login(props) {
    function loginUser(userdata) {
        props.dispatch(action.login(userdata));
    }

    return (
        <section id="login">
            <div className="bwm-form">
                <div className="row">
                    <div className="col-md-5">
                        <h1>Login</h1>
                        <LoginForm submitCb={loginUser} />
                    </div>
                    <div className="col-md-6 ml-auto">
                        <div className="image-container">
                            <h2 className="catchphrase">Hundreds of awesome places in reach of few clicks.</h2>
                            <img src='' alt="" />
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