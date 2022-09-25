import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../shared/form/input';
import {ResError} from '../shared/form/error';

const RegisterForm = props => {
    const { handleSubmit, pristine, reset, submitting, submitCb, valid, errors } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>

            <Field
                name="username"
                type="text"
                label='username'
                placeholder="First Name"
                className='form-control'
                component={renderField}
            />
            <Field
                name="email"
                type="email"
                label='email'
                placeholder="Email"
                className='form-control'
                component={renderField}
            />
            <Field
                name="password"
                type="password"
                label='password'
                placeholder="Password"
                className='form-control'
                component={renderField}
            />
            <Field
                name="confirmpassword"
                type="password"
                label='confirmpassword'
                placeholder="Confirm Password"
                className='form-control'
                component={renderField}
            />
            <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
                Register
            </button>
            {
               <ResError errors={errors}/>
            }
        </form>
    )
}

const validate = values => {
    const errors = {}
    if (values.username && values.username?.length < 4) {
        errors.username = 'User name min length is 4 char'
    }
    if (!values.email) {
        errors.email = 'Please enter email'
    }
    if (!values.confirmpassword) {
        errors.confirmpassword = 'Please enter password confiramition'
    }

    if (values.confirmpassword !== values.password) {
        errors.password = 'Password must match'
    }
    return errors
}

export default reduxForm({
    form: 'registerForm',
    validate
})(RegisterForm)