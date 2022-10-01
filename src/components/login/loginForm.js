import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { renderField } from '../shared/form/input';
import { required, minLength4 } from '../shared/form/validator';
import { ResError } from '../shared/form/error';

export const LoginForm = props => {
    const { handleSubmit, pristine, submitting, submitCb, valid, errors } = props;
    return (
        <form onSubmit={handleSubmit(submitCb)}>
            <Field
                name="email"
                type="email"
                label='Email'
                placeholder="Email"
                className='form-control'
                component={renderField}
                validate={[required, minLength4]}
            />
            <Field
                name="password"
                type="password"
                label='Password'
                placeholder="Password"
                className='form-control'
                component={renderField}
                validate={[required]}
            />
            <button className='btn btn-bwm btn-form' type="submit" disabled={!valid || pristine || submitting}>
                Login
            </button>
            {
               <ResError errors={errors}/>
            }
        </form>
    )
}


export default reduxForm({
    form: 'LoginForm'
})(LoginForm)