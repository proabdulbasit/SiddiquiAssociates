import React from "react";
// import Navbar from "../../layout/navbar";
import acc from "../../assets/images/Business Activity Banner.webp";
import contentImage from "../../assets/images/Business Activity.webp";
import ServiceBanner from "../../components/serviceBanner";
import Styles from "./taxReturn2.module.scss";
import Footer from "../../layout/footer";
// import ServiceLayout from "../../components/ServicesLayout";

// import ServiceLayoutContent from "../../components/servicesLayoutcontent";
import ServiceLayoutBullets from "../../components/servicesLayoutbullets";
// import ServiceLayoutBullet from "../../components/servicesLayoutbullets"
import BannerFooter from "../../components/bannerFooter";
import ContentHeadingComponent from "../../components/ContentHeadingComponent";
import { Helmet } from 'react-helmet';

const TaxReturn = () => {

  const list = [
    {
      value: "BAS Preparation and Lodgment",
    },
    {
      value: "GST Advice and Compliance",
    },
    {
      value: "PAYG withholding Advice and Compliance",
    },
    {
      value: "Record-Keeping Assistance",
    },
   
  ];
  const contentList = [
    {
      heading: "Expertise",
      detail:
        "Our team of experienced tax and accounting professionals has the knowledge and expertise to provide you with tailored solutions to meet your unique needs. We stay up to date with the latest changes in tax laws and regulations, so you don't have to.",
    },
    {
      heading: "Efficiency",
      detail:
        "Our efficient processes and advanced technology allow us to streamline your tax and accounting needs, saving you time and money. We pride ourselves on our ability to deliver accurate and timely results.",
    },
    {
      heading: "Customization",
      detail:
        "We understand that every client is unique, which is why we provide customized solutions to meet your specific needs. Whether you are an individual or a large corporation, we can provide you with the support you need to achieve your financial goals.",
    },
    {
      heading: "Business advisory services",
      detail:
        "In addition to our taxation and accounting services, we also offer business advisory services to help you grow and succeed. Our team can provide you with strategic advice and insights to help you make informed business decisions.",
    },
    {
      heading: "Client-focused",
      detail:
        "At Siddiqui Associates, we are committed to providing our clients with the highest level of service and support. We value our relationships with our clients and strive to build long-term partnerships based on trust and mutual respect.",
    },
  ];
  const contentList2=[
    {
      detail:"Our team of professionals has extensive experience in preparing and lodging BAS and GST returns for a variety of industries, including small businesses, sole traders, and large corporations. We work closely with you to ensure that your returns are accurate, timely, and compliant with all regulations."
    }
  ]
  return (
    <>
     <Helmet>
        <title>Expert BAS & GST Services in Australia | Siddiqui Associates</title>
        <meta name="description" content="Stress-free BAS & GST services in Australia. Let our experienced team handle your compliance needs with accurate and timely solutions. Contact us today!" />
        <meta property="og:title" content="Reliable Business Activity Statements (BAS) & GST Services in Australia | Siddiqui Associates" />
        <meta property="og:description" content="Stress-free BAS & GST services in Australia. Let our experienced team handle your compliance needs with accurate and timely solutions. Contact us today!" />
        <link rel="canonical" href="https://siddiquiassociates.com.au/business-activity-statement" />

      </Helmet>
      {/* <Navbar /> */}
      <div className={`${Styles.serviceContainer}`}>
        <ServiceBanner
          img={acc}
          alt="Business Activity Statements"
          heading="Business Activity Statements (BAS) or GST"
          detail="At Siddiqui Associates, we provide expert advice and support for all your Business Activity Statement
          (BAS) and Goods and Services Tax (GST) needs. We understand that complying with these regulations
          can be complex and time-consuming, which is why our team of experienced professionals is dedicated
          to providing you with tailored solutions to meet your unique needs."
        />
      
        <ServiceLayoutBullets img={contentImage}
        alt="Our BAS and GST Services"
        heading={"Our BAS and GST Services Includes:"}
        list={list}
        />

         <ContentHeadingComponent
          heading="GST reporting and reconciliation"
          headingList={contentList2}
          lastContent="At Siddiqui Associates, we are committed to providing our clients with the highest level of service and
          support. Contact us today to learn more about how we can help you with your BAS and GST needs.
          "
        />
        <ContentHeadingComponent
          heading="Benefits You Will Enjoy from Working With Us"
          headingList={contentList}
          lastContent="By working with Siddiqui Associates, you can have peace of mind knowing that your taxation and accounting needs are being handled by a team of experts who are dedicated to your success. Contact us today to learn more about how we can help you achieve your financial goals."
        />
      </div>
      <BannerFooter />
      <Footer />
    </>
  );
};

export default TaxReturn;
