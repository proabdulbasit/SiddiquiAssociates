import React from "react";
// import Navbar from "../../layout/navbar";
import acc from "../../assets/images/bookkeping Service.webp";
import acc2 from "../../assets/images/Bookkeping Services.webp";
import ServiceBanner from "../../components/serviceBanner";
import Styles from "./service.module.scss";
import Footer from "../../layout/footer";
import ServiceLayout from "../../components/ServicesLayout";
import ServiceLayoutContent from "../../components/servicesLayoutcontent";
// import ServiceLayoutBullet from "../../components/servicesLayoutbullets"
import BannerFooter from "../../components/bannerFooter";
import ContentHeadingComponent from "../../components/ContentHeadingComponent"
import FaqSection from "../../components/FaqSection"
import { Helmet } from 'react-helmet';



const TaxReturn = () => {
  const detail = [
    {
      content:
      "We specialize in providing bookkeeping services to small businesses. Our team of experienced bookkeepers has the knowledge and expertise to handle all aspects of your bookkeeping needs, from data entry to financial reporting. We are committed to providing you with accurate and timely financial information so that you can make informed business decisions. "
    },
    
  ];
  const list = [
    {
      value:
        "Thorough analysis of your business requirements to determine the best bookkeeping practices for you.",
    },
    {
      value:
        "Customized bookkeeping solutions tailored to your business needs.",
    },
    {
      value:
        "Monthly reconciliation of bank accounts, credit cards, and loans to ensure accuracy.",
    },
    {
      value:
        "Accurate recording and categorization of all financial transactions.",
    },
    {
      value:
      "Preparation of financial statements, including balance sheets, income statements, and cash flow statements."
    },
    {
      value:
        "Timely and accurate preparation and lodgment of BAS and IAS returns.",
    },
 
  ];
  
  const lastContent=[
    {
   detail:"Bookkeeping can be time-consuming and complex, and it is important to get it right. Having a professional bookkeeper on your side can help you stay organized and ensure that your financial records are accurate and up to date. This can save you time and money in the long run, as well as give you peace of mind knowing that your financial information is in good hands."
    },
  ]
  const faqSection = [
    {
      heading: "What bookkeeping software do you use?",
      detail:
        "We use a variety of bookkeeping software, including Xero, MYOB, and QuickBooks, depending on your business needs.",
    },
    {
      heading: "How often will I receive financial reports?",
      detail:
        "We provide monthly, quarterly, and yearly financial reports, depending on your reporting needs.",
    },
    {
      heading: "What happens if there are errors in my financial records?",
      detail:
        "Our team of bookkeepers is committed to providing accurate financial records. If errors are found, we will work with you to correct them as soon as possible.",
    },
  
  ];
  return (
    <>
        <Helmet>
        <title>Professional Bookkeeping Services in Australia | Siddiqui Associates</title>
        <meta name="description" content="Top-rated Bookkeeping Service in Australia. Certified professionals providing accurate, reliable, and affordable services tailored to meet your needs." />
        <meta property="og:title" content="Expert Bookkeeping Services in Australia | Siddiqui Associates" />
        <meta property="og:description" content="Top-rated Bookkeeping Service in Australia. Certified professionals providing accurate, reliable, and affordable services tailored to meet your needs." />
        <link rel="canonical" href="https://siddiquiassociates.com.au/bookkeeping" />

      </Helmet>
      {/* <Navbar /> */}
      <div className={`${Styles.serviceContainer}`}>
        <ServiceBanner
          img={acc}
          alt="bookkeping Service"
          heading="Most Reliable Bookkeeping Services in Australia."
          detail="At Siddiqui Associates Taxation, we understand that bookkeeping is a vital part of any business, big or
          small. Our team of expert bookkeepers is dedicated to providing you with the most reliable and accurate
          bookkeeping services in Australia. With our help, you can focus on running your business and leave the
          bookkeeping to us."
        />
        <ServiceLayout
          img={acc2}
          alt="Bokkkeping Services"
          heading="Why Choose Siddiqui Associates Taxation for Small Business Bookkeeping?"
          detail={detail}
        />
          <ContentHeadingComponent heading="Do I Really Need a Bookkeeper for My Small Business?" headingList={lastContent}/>
        <ServiceLayoutContent
          heading="Our Strategies:
"
         


          list={list}
        />
     
          <FaqSection heading="FAQs:" headingList={faqSection} />
      </div>
      <BannerFooter/>
      <Footer />
    </>
  );
};

export default TaxReturn;
