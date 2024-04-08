import React from "react";
// import Navbar from "../../layout/navbar";
import acc from "../../assets/images/BUSINESS-PLANNING-_-ADVISORY-Banner.webp";
import contentImage from "../../assets/images/BUSINESS PLANNING  ADVISORY.webp";
import ServiceBanner from "../../components/serviceBanner";
import Styles from "./taxReturn2.module.scss"
import Footer from "../../layout/footer";
// import ServiceLayout from "../../components/ServicesLayout";
import ServiceLayoutContent from "../../components/servicesLayoutcontent";
import ServiceLayoutBullet from "../../components/servicesLayoutbullets"
import BannerFooter from "../../components/bannerFooter";
import ContentHeadingComponent2 from "../../components/ContentHeadingComponent2";
import { Helmet } from 'react-helmet';

const TaxReturn = () => {
  // const detail = [
  //   // {
  //   //   content:
  //   //   "At Siddiqui Associates, we provide comprehensive business planning and advisory services to help you achieve your business goals. Whether you are just starting out or are an established business looking to grow, our team of experts is here to help."
  //   // },
  //   // {
  //   //   content:
  //   //     "The government has detailed laws to determine a person/business’s tax liability. There are also policies by which people can reduce their tax burden. To take full advantage of these legislations, income tax filing agents are essential.",
  //   // },
  //   // {
  //   //   content:
  //   //     "They are professionally trained agents who help people with their paperwork to fulfil their tax payments. These agents also help clients fill out their income tax returns claims to minimise their tax liability. RSJ Taxation is one of the most reputed income tax filing companies in Berwick, Officer, and Melbourne, providing tax-law compliant, transparent, and affordable taxation consultancy services so that you can live your lives hassle-free.",
  //   // },
  // ];
  const list = [
    {
      value:"Business planning"
    },
    {
      value:
        "Financial analysis",
    },
    {
      value:
      "Cash flow management"
    },
    {
      value:
      "Risk management"
    },
    {
      value:
      "Business valuation"
    },
 
    {
      value:
      "Succession planning"
    },
    {
      value:

"Strategic planning"  
  },
   
  ];
  // const list2=[
  //   {
  //     value:"GST (Goods and Services Tax) is a 10% tax that is charged on all goods and services created and sold in Australia"
  //   },
  //   {
  //  value:"All businesses with an annual turnover above $75,000 are required to register for GST"
  //   },
  //   {
  // value:"This GST registration is essential for compliance with Australian business laws and eligibility for various tax rebates. "
  //   },
  // ]
  // const list3=[
  //   {
  //  value:"TFN (Tax Filing Number) pertains to individuals, and ABN (Australian Business Number) pertains to business entities"
  //   },
  //   {
  //     value:"TFN and ABN are essential for all Australian taxpayers"
  //      },
  //      {
  //       value:"Without TFN or ABN, taxpayers cannot pay their income tax or file their income tax returns."
  //        },
  // ]
  const contentList = [
 
    {
     
      detail:"At Siddiqui Associates, we are committed to providing our clients with the highest level of service and support. Our team of experts has the knowledge and expertise to help you achieve your business goals and drive growth and profitability."
    
    },
    {
      detail:"Contact us today to learn more about our business planning and advisory services and how we can help you achieve success."
    }
    // {
    //   heading: "What Is GST Registration, And Why Do You Need It?",
    //   detail:
    //     "Goods and Services Tax (GST) is a tax on most goods and services sold in Australia. If you are running a business, you may be required to register for GST. GST registration can help you claim back GST credits and can also make your business more attractive to customers who are also registered for GST.",
    // },
    // {
    //   heading: "Should You Get TFN and ABN Registration?",
    //   detail:
    //     "If you are an individual or business in Australia, you may need to apply for a Tax File Number (TFN) and/or an Australian Business Number (ABN). A TFN is a unique identifier used by the Australian Taxation Office (ATO) to track your tax obligations. An ABN is a unique identifier used by businesses to identify themselves to government and other businesses.",
    // },
    // {
    //   heading: "Why us?",
    //   detail:
    //     "At Siddiqui Associates, we are committed to providing our clients with the highest level of service and support. Our team of experts has the knowledge and expertise to help you navigate the complexities of the Australian tax system. We pride ourselves on our attention to detail, timely service, and commitment to your success.",
    // },
  ];
  const list2=[
    {
value:"Develop a clear and concise business plan"
    },
    {
value:"Conduct a comprehensive financial analysis to assess your business's financial position and identify opportunities for improvement"
    },
    {
value:"Develop a cash flow management plan to help you manage your cash floweffectively"
    },
    {
value:"dentify and manage risks that could impact your business's success"
    },
    {
value:"Conduct a business valuation to help you understand the value of your business"
    },
    {
value:"Develop a succession plan to ensure the long-term success of your business"

    },
    {
value:" Create a strategic plan to help you achieve your business goals"
    },
  ]
  return (
    <>
      <Helmet>
        {/* <title>Business Planning Advisory and Formation Services  in Australia | Siddiqui Associates</title> */}
        <title>Business Planning Advisory and Formation Services in Australia</title>
        <meta name="description" content="Drive business growth with our expert Business Planning Advisory and Formation Services in Australia. Our strategic solutions and insights are tailored to your needs." />
        <meta property="og:title" content="Customized Business Planning  Advisory and Formation  Services for Your Success | Siddiqui Associates" />
        <meta property="og:description" content="Drive business growth with our expert Business Planning Advisory and Formation  Services in Australia. Our strategic solutions and insights are tailored to your needs." />
        <link rel="canonical" href="https://siddiquiassociates.com.au/business-planning-advisory" />

      </Helmet>
      {/* <Navbar /> */}
      <div className={`${Styles.serviceContainer}`}>
        <ServiceBanner
          img={acc}
          alt="Business Planning Advisory and Formation "
          heading="Business Planning Advisory And Formation Services"
          detail="At Siddiqui Associates, we provide comprehensive business planning and advisory services to help you
          achieve your business goals. Whether you are just starting out or are an established business looking to
          grow, our team of experts is here to help."
        />
       
        <ServiceLayoutBullet
          heading="Our Services Includes:"

          list={list}
          img={contentImage}
          alt="Business Planning "
        />
        <ServiceLayoutContent
        heading={"Our Strategies:"}
        list={list2}
        />

        
        {/* <ServiceLayoutBullet
         img={acc}
         heading="Income Tax and Tax Returns Filing Service in Berwick, Officer, and Melbourne"
         list={list2}
         content="At RSJ Taxation, our team of certified tax agents helps clients organise and file the paperwork for their GST registration. All GST eligibility criteria need to be checked before making the filing.         "
        /> */}
        <ContentHeadingComponent2 headingList={contentList}/>
        {/* <ServiceLayoutContent heading="Should You Get TFN and ABN Registration?"
        list={list3}
        /> */}
      </div>
      <BannerFooter/>
      <Footer />
    </>
  );
};

export default TaxReturn;
