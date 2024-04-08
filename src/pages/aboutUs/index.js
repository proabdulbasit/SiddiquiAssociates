
import Styles from "./aboutUs.module.scss";

import Footer from '../../layout/footer'

import contactBanner from "../../assets/images/about-us-background.webp"
import AboutCard from '../../components/aboutCard';
import ata from "../../assets/images/ata-sadiqui.webp";
import aniq from "../../assets/images/aniq-sadiqui.webp";
import cpa from "../../assets/images/cpa.webp"
import ipa from "../../assets/images/ipa.webp"
import ishfaq from "../../assets/images/ishfaq siddiqui.webp"
import ContentHeadingComponent2 from "../../components/ContentHeadingComponent2"
import { Helmet } from 'react-helmet';

const AboutUs = () => {
    
   const content=[
        {
  heading:"Our Mission & Character:",
  detail:"People want to engage in business with entities whose values align with theirs and who understand the business value of operating transparently and ethically. Our firm strongly believes in these principals and our aim is to provide our services best possible way taking the responsibility of their compliance work leaving our clients stress free.",
        },
        {
            heading:"",
            detail:"At Siddiqui Associates, we are committed to providing our clients with the highest level of service and support. Our team of experts has the knowledge and expertise to help you navigate the complexities of the Australian tax system. We pride ourselves on our attention to detail, timely service, and commitment to your success.",
                  },
                  {
                    heading:"Expert Taxation Services and Accounting Solutions",
                    detail:"At Siddiqui Associates, our mission is to provide reliable and professional taxation and accounting services that helps individuals and businesses to achieve financial success. Our goal is to deliver exceptional value to our clients through personalized solutions, expert advice, and unmatched customer service.",
                          },
    ]
    return (
        <>
           <Helmet>
        <title> About Our Associate Service in Australia | Siddiqui Associates</title>
        <meta name="description" content="Unlock your business potential with our Associate Service in Australia. Our expert team offers innovative solutions and top-notch support. Contact us now!" />
        <meta property="og:title" content="Learn About Our Trusted Associate Service in Australia | Siddiqui Associates" />
        <meta property="og:description" content="Unlock your business potential with our Associate Service in Australia. Our expert team offers innovative solutions and top-notch support. Contact us now!" />
        <link rel="canonical" href="https://siddiquiassociates.com.au/about-us" />

      </Helmet>
            {/* <Navbar /> */}
            
            {/* <TopBar /> */}
            <div className={`${Styles.contactBanner}`}>
               
                <img src={contactBanner} alt="About Us" />
                <div className={Styles.heading}>
                    <h1>About Us</h1>
                    <p>Money Problems Solved Better</p>
                </div>
            </div>
            <div style={{margin:"50px 0", textAlign:"center"}}>
            <ContentHeadingComponent2
            headingList={content}
            />
            </div>
            <h1 className='text-center'>Meet Our Team</h1>
            <div className={Styles.aboutWrapper}>
                
                <AboutCard name={"Ata Siddiqui"} certification={"Certified Practicing Accountant"} alt="Director and Partner"  img={ata} logoDescription="CPA institute" logo={cpa} title={"Director and Partner"} exp={"25+ years"} number="+61 412 939 117 " link="tel:+61 412 939 117 " />
                <AboutCard name={"Aneiq Siddiqui"} certification={"Institute of Public Accountant"} alt="Senior Accountant" img={aniq} logo={ipa} title={"Senior Accountant"} logoDescription="IPA institute" exp={"5+ years"} number="+61 469 782 387" link="tel:+61 469 782 387 " />
                <AboutCard name={"Ishfaq Siddiqui"} certification={"Institute of Public Accountant"} alt="Director and Partner" img={ishfaq} logo={ipa} logoDescription="IPA institute" title={"Director and Partner"} exp={"20+ years"} number="+61 401 154 312 " link="tel:+61 401 154 312 "/>
            </div>
            
            <Footer />
        </>
    )
}

export default AboutUs