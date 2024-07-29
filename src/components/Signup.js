import React from 'react'
import { Formik, Form } from 'formik'
import * as Yup from 'yup'
import { Textfield } from './Textfield'

export const Signup = () => {
    const validate = Yup.object({
        firstName: Yup.string()
            .max(15, 'must be 15 character or less')
            .required('required'),
        lastName: Yup.string()
            .max(15, 'must be 15 character or less')
            .required('required'),
        email: Yup.string()
            .email('Email invalid')
            .required('Email is required'),
        password: Yup.string()
            .min(8, ' password must be at least 8 character')
            .required(' passsword is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('passsword'), null], 'password must be match')
            .required('confirm password is required'),

    })
    return (
        <Formik
            initialValues={
                {
                    firstName: '',
                    lastName: '',
                    email: '',
                    password: '',
                    confirmPassword: ''
                }}
            validationSchema={validate}
            onSubmit={value => { console.log(value) }}
        >
{Formik => (
    <div>
        <h1 className='my-4 font-weight-bold .display-4'>signup form</h1>
        <Form>
<Textfield label='First Name' name='firstName' type='Text' />
<Textfield label='Last Name' name='lastName' type='Text' />
<Textfield label='Email' name='email' type='email' />
<Textfield label='Password' name='password' type='password' />
<Textfield label='Confirm Password' name='confirmPassword' type='Text' />
<button className='btn btn-dark mt-3' type='submit'>Register Now</button>
<button className='btn btn-danger mt-3 ml-3' type='reset'>Reset</button>
        </Form>
    </div>
)}
        </Formik>
    )
}

export default Signup