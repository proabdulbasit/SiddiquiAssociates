// // import React, { useState, useEffect } from 'react'
// import Styles from "./contactForm.module.scss"
// import { useState } from "react";
// import Modal from 'react-modal';
// import "./form.css"


// const ContactForm = () => {
//     const [isModalOpen, setIsModalOpen] = useState(false);
//     const [name, setName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phone, setPhone] = useState('');
//     const [message, setMessage] = useState('');
  
//     const isSubmitDisabled = !name || !phone || !email || !message;
  
//     const handleSubmit =async  (event) => {
//       event.preventDefault();
//       // Perform form submission actions
//       setIsModalOpen(true);
//       const formData = new FormData();
//       formData.append('name', name);
//       formData.append('email', email);
//       formData.append('phone', phone);
//       formData.append('message', message);
  
//       try {
//         // Send the form data to the PHP script
//         const response = await fetch('https://siddiquiassociates.com.au/form.php', {
//           method: 'POST',
//           body: formData
//         });
  
//         // Check the response status
//         if (response.ok) {
//           // Redirect to the desired page
//           window.location.href = '/';
//         } else {
//           // Handle error case
//           console.error('Form submission failed.');
//         }
//       } catch (error) {
//         // Handle error case
//         console.error('An error occurred while submitting the form.', error);
//       }
//     };
//     const closeModal = () => {
//       window.location.reload();
//       setIsModalOpen(false);
//     };
   


//     return (
//         <div className={Styles.formContainer}>

//             <div className={Styles.contactForm}>
//                 <h1>Let's get started</h1>
//                 <p className='mb-4'>Have any queries or need any help? Please fill out the form below and we will get back to you shortly.</p>

//                 <div>
//                 <form action="https://siddiquiassociates.com.au/form.php" method="post" onSubmit={handleSubmit} >
//                         <div className='row'>
//                             <div className='col-md-6 col-12'>
//                             <input type="text" name="name" 
//                              value={name} onChange={(e) => setName(e.target.value)}
//                             placeholder="Your Name" className={Styles.input_field}/>
//                             </div>
//                             <div className='col-md-6 col-12 mt-md-0 mt-4'>
//                             <input type="text" name="email" placeholder="Your Email" className={Styles.input_field}
                            
//                             value={email} onChange={(e) => setEmail(e.target.value)}
//                             />
//                             </div>
//                         </div>

//                         <div className='row mt-4'>
//                             <div className='col-md-6 col-12'>
//                                <input type="text" name="phone" 
//                                value={phone} onChange={(e) => setPhone(e.target.value)}
//                                placeholder="Your Phone" className={Styles.input_field} label="Your Phone (Optional)"/>
                               
//                             </div>
//                             <div className='col-md-6 col-12 mt-md-0 mt-4'>
//                             <input type="text" name="organization" placeholder="Your Organization" className={Styles.input_field} label="Your Organization" variant="outlined" fullWidth />
//                                 {/* <TextField id="organization" name='organization' helperText={formik.touched.organization && formik.errors.organization} error={formik.touched.organization && Boolean(formik.errors.organization)} value={formik.values.organization} onChange={formik.handleChange} label="Your Organization" variant="outlined" fullWidth /> */}
//                             </div>
//                         </div>

//                         <div className='mt-4'>
//                         <textarea rows="5" name="message"
//                         value={message} onChange={(e) => setMessage(e.target.value)}
//                         cols="30" placeholder="Text Something" className={Styles.message}  label="Type your message here"></textarea>
                           
//                         </div>

//                         <div className="d-flex justify-content-end mt-3">
                          
//                             <input type="submit" name="submit" value="Submit" 
//                             disabled={isSubmitDisabled} className={isSubmitDisabled ? Styles.disabled :Styles.submit_btn}
                            
//                             msg={"Submit"}/>
//                         </div>

//                     </form>
//                     <Modal
//          style={{
//           overlay: {
//             backgroundColor: 'rgba(0, 0, 0, 0.5)'
//           },
//           content: {
//             width: '300px',
//             margin: 'auto',
//             padding: '20px',
//             borderRadius: '4px',
//             boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
//             backgroundColor: 'white'
//           }
//         }}
//        isOpen={isModalOpen} onRequestClose={closeModal}>
//         <div style={{marginBottom:"50px", textAlign:"center"}}>
//          <img src="./images/Header-Logo.webp" alt="" className={Styles.modelLogo}/>
         
//          </div>
//         <h2 style={{fontSize:"20px"}}>Your Email has been Sent Successfully</h2>
        
//         <button onClick={closeModal}><i class="fa-solid fa-xmark"></i></button>
//       </Modal>

//                 </div>


//             </div>

//         </div>








//     )
// }

// export default ContactForm


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
// import Styles from "./contactForm.module.scss"
// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';
// import { useNavigate } from "react-router-dom";

// const ContactForm = () => {
//   const form = useRef();
//   const navigate = useNavigate();
//   const sendEmail = (e) => {
//     e.preventDefault();
//     navigate("/");
//     emailjs
//       .sendForm('service_vh21rq9', 'template_rtw18k2', form.current, 'DKJ7BvUVcjgKz4q8i')
//       .then(
//         (result) => {
//           console.log('Email sent successfully:', result.text);
//           // Handle success, maybe show a success message or redirect
//           toast.success('Email sent successfully!', {
//             position: toast.POSITION.TOP_RIGHT
//           });
        
//         },
//         (error) => {
//           console.error('Email sending failed:', error.text);
//           // Handle error, maybe show an error message
//           toast.error('Failed to send email. Please try again later.', {
//             position: toast.POSITION.TOP_RIGHT
//           });
//         }
//       );
//   };

//   return (
//     <div className={Styles.formContainer}>
//       <div className={Styles.contactForm}>
//         <h1>Let's get started</h1>
//         <p className='mb-4'>Have any queries or need any help? Please fill out the form below and we will get back to you shortly.</p>
//         <form ref={form} onSubmit={sendEmail}>
//           <div className='row'>
//             <div className='col-md-6 col-12'>
//               <input type="text" name="user_name" placeholder="Your Name" className={Styles.input_field}/>
//             </div>
//             <div className='col-md-6 col-12 mt-md-0 mt-4'>
//               <input type="email" name="user_email" placeholder="Your Email" className={Styles.input_field}/>
//             </div>
//           </div>
//           <div className='row mt-4'>
//             <div className='col-md-6 col-12'>
//               <input type="tel" name="user_phone" placeholder="Your Phone" className={Styles.input_field} />
//             </div>
//             <div className='col-md-6 col-12 mt-md-0 mt-4'>
//               <input type="text" name="organization" placeholder="Your Organization" className={Styles.input_field} />
//             </div>
//           </div>
//           <div className='mt-4'>
//             <textarea rows="5" name="message" placeholder="Type Something" className={Styles.message}></textarea>
//           </div>
//           <div className="d-flex justify-content-end mt-3">
//             <input type="submit" value="Submit" className={Styles.submit_btn} />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
// export default ContactForm
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import Styles from "./contactForm.module.scss"
 const ContactForm = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vh21rq9', 'template_rtw18k2', form.current, 'DKJ7BvUVcjgKz4q8i')
      .then(
        (result) => {
          console.log('Email sent successfully:', result.text);
          // Handle success, maybe show a success message or redirect
        },
        (error) => {
          console.error('Email sending failed:', error.text);
          // Handle error, maybe show an error message
        }
      );
  };

  return (
    <div className={Styles.formContainer}>
      <div className={Styles.contactForm}>
        <h1>Let's get started</h1>
        <p className='mb-4'>Have any queries or need any help? Please fill out the form below and we will get back to you shortly.</p>
        <form ref={form} onSubmit={sendEmail}>
          <div className='row'>
            <div className='col-md-6 col-12'>
              <input type="text" name="user_name" placeholder="Your Name" className={Styles.input_field}/>
            </div>
            <div className='col-md-6 col-12 mt-md-0 mt-4'>
              <input type="email" name="user_email" placeholder="Your Email" className={Styles.input_field}/>
            </div>
          </div>
          <div className='row mt-4'>
            <div className='col-md-6 col-12'>
              <input type="tel" name="user_phone" placeholder="Your Phone" className={Styles.input_field} />
            </div>
            <div className='col-md-6 col-12 mt-md-0 mt-4'>
              <input type="text" name="organization" placeholder="Your Organization" className={Styles.input_field} />
            </div>
          </div>
          <div className='mt-4'>
            <textarea rows="5" name="message" placeholder="Type Something" className={Styles.message}></textarea>
          </div>
          <div className="d-flex justify-content-end mt-3">
            <input type="submit" value="Submit" className={Styles.submit_btn} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm

