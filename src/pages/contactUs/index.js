
import Styles from "./contactUs.module.scss"
import contactBanner from "../../assets/images/contactUs.jpg"

import Footer from '../../layout/footer'
import ContactForm from '../../components/contactForm'
import { Helmet } from "react-helmet"


const ContactUs = () => {
  
    return (
        <>
            
            <Helmet>
        <title>Contact Us | Get in Touch with Our Associate Service Team in Australia | Siddiqui Associates</title>
        <meta name="description" content="Get expert Associate service in Australia. Contact us to discuss your needs and learn how we can help you achieve business success. Contact Us now!" />
        <meta property="og:title" content="Contact Our Expert Associate Service Team in Australia | Siddiqui Associates" />
        <meta property="og:description" content="Get expert Associate service in Australia. Contact us to discuss your needs and learn how we can help you achieve business success. Contact Us now!" />
        <link rel="canonical" href="https://siddiquiassociates.com.au/contact-us" />

      </Helmet>
           
            <div className={`${Styles.contactBanner}`}>
               
                <img src={contactBanner} alt="Contact US Now" />
                <div className={Styles.heading}>
                    <h1>Contact Us</h1>
                    <p>Reach Out To Us</p>
                </div>
            </div>
            <div className={Styles.formContentContainer}>
                <ContactForm />
               
            </div>
            <Footer />
        </>
    )
}

export default ContactUs