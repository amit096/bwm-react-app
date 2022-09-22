import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../shared/form/input';
import { required,minLength4 } from '../shared/form/validator';

export const LoginForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid } = props
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="email"
                type="email"
                label='email'
                placeholder="Email"
                className='form-control'
                component={renderField}
                validate={[required,minLength4 ]}
            />
            <Field
                name="password"
                type="password"
                label='password'
                placeholder="Password"
                className='form-control'
                component={renderField}
                validate={[required]}
            />
            <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
                Submit
            </button>
        </form>
    )
}


export default reduxForm({
    form: 'LoginForm'
})(LoginForm)