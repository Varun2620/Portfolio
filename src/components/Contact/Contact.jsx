import React from 'react'
import {Formik, Form, Field} from 'formik'
import * as Yup from 'yup'
import './Contact.css'

function Contact() {

    const initialData = {
        name: '' ,
        email: '',
        message: ''
    }

    const schema = Yup.object().shape({
        name: Yup.string()
            .required('*Enter your name')
            .min(3,'*Name should have atleast 3 characters'),
        email: Yup.string().email('*Invalid email address')
            .required('*Email address is required'),
        message: Yup.string().required('*Enter the message you want to send')
            .test('min words', '*The message should contain atleast 10 words', (value) => {
                if(!value) return false

                return value.trim().split(/\s+/).length >= 10
            })
    })

    return (
        <section className="contactContainer">
            <h1>Contact</h1>
            <Formik
                initialValues = {initialData}

                validationSchema={schema}

                onSubmit={async (values, {resetForm,setSubmitting}) => {
                    await new Promise((response) => setTimeout(response, 1000))
                    console.log(JSON.stringify(values, null, 2))
                    fetch('https://formspree.io/f/mvgrbloa',{
                        method: 'POST',
                        headers:{
                            'Content-Type' : 'application/json',
                            Accept : 'application/json'
                        },
                        body: JSON.stringify(values),

                    }).then((res) => {
                        if(res.ok){
                            alert('Message sent!')
                            resetForm()
                        }else{
                            alert('Something went wrong! Try again!')
                        }
                    }).catch(()=> alert('Network error'))
                    .finally(()=> setSubmitting(false))
                }}
            >
                {({errors, touched, isSubmitting}) => (
                    <Form className="contactForm">
                        <div className="formEle">
                            <label htmlFor="name">Name</label>
                            <Field className='formText' name='name' type='text' />
                            {errors.name && touched.name && <p className='errorMsg'>{errors.name}</p>}
                        </div>
                        <div className="formEle">
                            <label htmlFor="email">Email</label>
                            <Field className='formText' name='email' type='email' />
                            {errors.email && touched.email && <p className='errorMsg'>{errors.email}</p>}
                        
                        </div>
                        <div className="formMesg">
                            <label htmlFor="message">Message</label>
                            <Field className='formMsg' name='message' as='textarea' rows='5'/>
                            {errors.message && touched.message && <p className='errorMsg'>{errors.message}</p>}
                        </div>

                        <button className='contactBtn' type='submit' disabled={isSubmitting}>Submit</button>
                    </Form>
                )}
            </Formik>
        </section>
    )
}

export default Contact
