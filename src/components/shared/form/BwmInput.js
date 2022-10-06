import React from 'react';

export const BwmInput = ({
  input,
  label,
  type,
  symbol,
  className,
  meta: { touched, error, warning }
}) => (
  <div className='form-group'>
    <label>{label}</label>
    <div className='input-group'>
      { symbol &&
        <div className='input-group-prepend'>
          <div className='input-group-text'>{symbol}</div>
        </div>
      }
      <input {...input} min="1" type={type} className={className} />
    </div>
      {touched &&
        ((error && <div className='alert alert-danger'>{error}</div>))}
  </div>
)