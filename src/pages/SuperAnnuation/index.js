import React from "react";

import acc from "../../assets/images/Superanuation Service.webp";
import contentImage from "../../assets/images/Comprehensive Superannuation Services.webp";
import ServiceBanner from "../../components/serviceBanner";
import Styles from "./taxReturn2.module.scss";
import Footer from "../../layout/footer";

import ServiceLayoutContent from "../../components/servicesLayoutcontent";
import ServiceLayoutBullet from "../../components/servicesLayoutbullets";
import BannerFooter from "../../components/bannerFooter";
import ContentHeadingComponent2 from "../../components/ContentHeadingComponent2";
import { Helmet } from "react-helmet";

const TaxReturn = () => {
  // const detail = [
  //   {
  //     content:
  //       "At Siddiqui Associates, we provide comprehensive estate planning services to help you protect your assets and ensure that your wishes are carried out in the event of your passing. Our team of experts can help you develop a plan that meets your unique needs and ensures that your loved ones are taken care of.",
  //   },
  // ];
  // const list = [
  //   {
  //     value: "Superannuation Advice and Planning",
  //   },

  //   {
  //     value:
  //       "This information is important to the government to see if all tax-paying entities have met their actual tax liabilities",
  //   },
  //   {
  //     value:
  //       "Assessing your current superannuation arrangements and identifying areas for improvement",
  //   },
  //   {
  //     value: "Providing guidance on investment strategies and asset allocation",
  //   },
  //   {
  //     value:
  //       "Developing a comprehensive superannuation plan tailored to your unique needs and circumstances",
  //   },
  //   {
  //     value:
  //       "Providing ongoing support and guidance to help you achieve your financial goals",
  //   },
  //   {
  //     value: "Self-Managed Superannuation Funds (SMSFs)",
  //   },
  // ];
  const list2 = [
   
    {
      heading:"Self-managed superannuation funds (SMSFs) :",
      value: "Siddiqui Associates provides tailored advice and support to clients in managing their SMSFs. With our extensive knowledge and experience, we can help you navigate the complexities of SMSF compliance, investment strategies, and taxation. ",
    },
    {
      heading: "Superannuation compliance and administration :  ",
      value:"We provide comprehensive services to ensure efficient superannuation administration, including reporting, taxation, and compliance. We work closely with you to develop customized solutions for your superannuation needs."
    },
  
    
  ];
  const list3 = [
    {
      value: "Establishing and administering self-managed superannuation funds",
    },
    {
      value: "Providing guidance on investment strategies and asset allocation",
    },
    {
      value:
        "Assisting with compliance requirements, including annual audits and tax returns",
    },
    {
      value:
        "Helping you navigate the complex world of SMSFs and ensure that you have the tools you need to achieve your financial goals",
    },
    {
      value: "Superannuation Compliance and Administration",
    },
  ];
  const list4 = [
    {
      value:
        "Ensuring that your superannuation arrangements are compliant with all relevant regulationsand requirements",
    },
    {
      value:
        "Handling all aspects of superannuation administration, including contributions and benefit payments",
    },
    {
      value:
        "Assisting with reporting requirements and liaising with regulatory bodies as necessary ",
    },
    {
      value: "Retirement Planning",
    },
  ];
  // const list5 = [
  //   {
  //     value:
  //       "Developing a comprehensive retirement plan tailored to your unique needs and circumstances",
  //   },
  //   {
  //     value: "Providing guidance on investment strategies and asset allocation",
  //   },
  //   {
  //     value:
  //       "Helping you navigate the complex world of retirement planning and ensure that you have the tools you need to achieve your financial goals",
  //   },
  //   {
  //     value:
  //       "At Siddiqui Associates, we are committed to providing our clients with the highest level of service and support. Contact us today to learn more about our superannuation services and how we can help you achieve your financial goals.",
  //   },
  // ];

  const contentList = [
    {
      heading: "Why Do You Need Superannuation Services?",
      detail:
        "Superannuation is a key part of planning for your financial future, and it's important to have the right information and resources to make informed decisions. Our team of experts can help you navigate the complex world of superannuation and ensure that you have the tools you need to achieve your financial goals.",
    },
  ];
  

  return (
    <>
      <Helmet>
        <title>Expert Superannuation Services in Australia | Siddiqui Associate</title>
        <meta name="description" content="Get expert superannuation services in Australia with Siddiqui Associate. Our experienced professionals offer tailored solutions for your retirement savings." />
        <meta property="og:title" content="Get Professional Superannuation Assistance in Australia | Siddiqui Associate" />
        <meta property="og:description" content="Get expert superannuation services in Australia with Siddiqui Associate. Our experienced professionals offer tailored solutions for your retirement savings." />
        <link rel="canonical" href="https://siddiquiassociates.com.au/superannuation" />

      </Helmet>
      {/* <Navbar /> */}
      <div className={`${Styles.serviceContainer}`}>
        <ServiceBanner
          img={acc}
          alt="Superannuation Service"
          heading="Superannuation"
          detail="At Siddiqui Associates, we provide comprehensive superannuation services to help you plan for your
          retirement and achieve your financial goals. Our team of experts can help you navigate the complex
          world of superannuation and ensure that you have the information and resources you need tomake
          informed decisions about your financial future."
        />

        <ServiceLayoutBullet
          list={list2}
          heading="Our Services Includes:"
          img={contentImage}
          alt="Superannuation Service"
        />
        <ContentHeadingComponent2 headingList={contentList} />
        {/* <ServiceLayoutContent
          heading="Our Services:"
          alt="Superannuation advice and planning"
          listheading="Our superannuation advice and planning services include:"
          list={list}
        /> */}

        <ServiceLayoutContent
          heading="Our SMSF Services Includes:"
          list={list3}
        />
        <ServiceLayoutContent
          heading="Our Compliance and Administration Services Includes:"
          list={list4}
        />
        {/* <ServiceLayoutContent
          heading="Our Retirement Planning Services Includes:"
          list={list5}
        /> */}
      </div>
      <BannerFooter />
      <Footer />
    </>
  );
};

export default TaxReturn;
