import React from 'react'
import {gql,useMutation } from "@apollo/client"
import { Formik, Field, Form } from "formik"


const CREATE_SESSION =gql `
  mutation createSession($session: SessionInput!) {
    createSession(session: $session) {
      id 
      title
      day
      description
      level
    }
  }
`



 function ContactUs() {
  const [ create, { called, error } ] = useMutation(CREATE_SESSION);

  if(called) return <p>Session Submitted Successfully!</p>

  if(error) return <p>Failed to submit session</p>

  return (	
    <div	
      style={{	
        width: "100%",	
        display: "flex",	
        alignContent: "center",	
        justifyContent: "center",	
        padding: 10,	
      }}	
    >	
      <Formik	
        initialValues={{	
          title: "",	
          description: "",	
          day: "",	
          level: "",	
        }}	
        onSubmit={ async (values) => {
          await create({ variables: {session: values }});
        }}		
      >	
        {() => (	
          <Form style={{ width: "100%", maxWidth: 500 }}>	
            <h3 className="h3 mb-3 font-weight-normal">Contact Form!</h3>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputTitle">Full Name</label>	
              <Field	
                id="inputTitle"	
                className="form-control"	
                required	
                autoFocus	
                name="title"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputDescription">Email</label>	
              <Field	
                type="textarea"	
                id="inputDescription"	
                className="form-control"	
                required	
                name="description"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputDay">Phone Number</label>	
              <Field	
                name="day"	
                id="inputDay"	
                className="form-control"	
                required	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputLevel">Address</label>	
              <Field	
                name="level"	
                id="inputLevel"	
                className="form-control"	
                required	
              />	
            </div>	
            <div style={{ justifyContent: "center", alignContent: "center" }}>
              <button className="btn btn-primary">Submit</button>	
            </div>
          </Form>	
        )}	
      </Formik>	
    </div>	
  );	
}



export default ContactUs

export function ContactForm() {
  return (
    <>
        <section className="banner">	
        <div className="container">	
          <div className="row">	
            <ContactUs />	
          </div>	
        </div>	
      </section>
    </>
  )
}





{/*import "./contact.css";
import React from "react";

function Contact() {
  return (
    <div className="contact">
      <p className="heading">Contact Us</p>
      <form>
        <label>Your Name</label>
        <input
          type="text"
          id="name"
          className="name"
          placeholder="Your name....."
        />

        <label>Email</label>
        <input
          className="email"
          type="email"
          id="email"
          name="email"
          placeholder="Your email..."
        />
        <label>Message</label>
        <textarea
          className="message"
          id="subject"
          name="subject"
          placeholder="Write your message....."
        ></textarea>
        <center>
          <input className="submit" type="submit" value="Submit" />
        </center>
      </form>
    </div>
  );
}

export default Contact;

*/}


{/*
import React from 'react'
import {gql, useQuery,  useMutation } from "@apollo/client"
import { Formik, Field, Form } from "formik"


const CREATE_SESSION =gql `
  mutation createSession($session: SessionInput!) {
    createSession(session: $session) {
      id 
      title
      day
      description
      level
    }
  }
`


export function Contact () {  
 
  const [ create, { called, error } ] = useMutation(CREATE_SESSION);

  if(called) return <p>Session Submitted Successfully!</p>

  if(error) return <p>Failed to submit session</p>

  return (	
    <div	
      style={{	
        width: "100%",	
        display: "flex",	
        alignContent: "center",	
        justifyContent: "center",	
        padding: 10,	
      }}	
    >	
      <Formik	
        initialValues={{	
          title: "",	
          description: "",	
          day: "",	
          level: "",	
        }}	
        onSubmit={ async (values) => {
          await create({ variables: {session: values }});
        }}		
      >	
        {() => (	
          <Form style={{ width: "100%", maxWidth: 500 }}>	
            <h3 className="h3 mb-3 font-weight-normal">Contact Form!</h3>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputTitle">Full Name</label>	
              <Field	
                id="inputTitle"	
                className="form-control"	
                required	
                autoFocus	
                name="title"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputDescription">Email</label>	
              <Field	
                type="textarea"	
                id="inputDescription"	
                className="form-control"	
                required	
                name="description"	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputDay">Phone Number</label>	
              <Field	
                name="day"	
                id="inputDay"	
                className="form-control"	
                required	
              />	
            </div>	
            <div className="mb-3" style={{ paddingBottom: 5 }}>	
              <label htmlFor="inputLevel">Address</label>	
              <Field	
                name="level"	
                id="inputLevel"	
                className="form-control"	
                required	
              />	
            </div>	
            <div style={{ justifyContent: "center", alignContent: "center" }}>
              <button className="btn btn-primary">Submit</button>	
            </div>
          </Form>	
        )}	
      </Formik>	
    </div>	
  );	
}



export function ContactForm() {
  return (
    <>
        <section className="banner">	
        <div className="container">	
          <div className="row">	
            <ContactUs />	
          </div>	
        </div>	
      </section>
    </>
  )
}


*/}
