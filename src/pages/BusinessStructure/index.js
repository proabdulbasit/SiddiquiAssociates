import React from "react";
// import Navbar from "../../layout/navbar";
import acc from "../../assets/images/business-structures-banner.webp";
import acc2 from "../../assets/images/business structureServices.webp";
import ServiceBanner from "../../components/serviceBanner";
import Styles from "./businessstructure.module.scss";
import Footer from "../../layout/footer";
import ServiceLayout from "../../components/ServicesLayout";
// import ServiceLayoutContent from "../../components/servicesLayoutcontent";
// import ServiceLayoutBullet from "../../components/servicesLayoutbullets"
import BannerFooter from "../../components/bannerFooter";
import ContentHeadingComponent from "../../components/ContentHeadingComponent"
// import FaqSection from "../../components/FaqSection"
import { Helmet } from 'react-helmet';



const TaxReturn = () => {
  const detail = [
    {
      content:
      "Our company startup and formation services can include registering a new company with the Australian Securities and Investments Commission (ASIC), obtaining an Australian Business Number (ABN), registering for Goods and Services Tax (GST), and establishing a corporate structure that meets your business needs. Our team can also provide ongoing support to help you meet your compliance obligations and ensure your business stays on track."
    },
    {
        content:"We can help you navigate the legal requirements involved in starting a new company, including drafting the necessary documents and obtaining any necessary licenses or permits. Our team can also provide guidance on the best corporate structure for your business needs, taking into account your objectives, budget, and other factors."
    }
    
  ];
//   const list = [
//     {
//       value:
//         "Thorough analysis of your business requirements to determine the best bookkeeping practices for you.",
//     },
//     {
//       value:
//         "Customized bookkeeping solutions tailored to your business needs.",
//     },
//     {
//       value:
//         "Monthly reconciliation of bank accounts, credit cards, and loans to ensure accuracy.",
//     },
//     {
//       value:
//         "Accurate recording and categorization of all financial transactions.",
//     },
//     {
//       value:
//       "Preparation of financial statements, including balance sheets, income statements, and cash flow statements."
//     },
//     {
//       value:
//         "Timely and accurate preparation and lodgment of BAS and IAS returns.",
//     },
 
//   ];
  
  const lastContent=[
    {
        detail:"If you are looking for a business structure that can offer tax benefits and flexibility, a trust may be the right choice for you. Our trust startup and formation services can help you establish a trust and provide ongoing support to ensure it is managed effectively."
    },
    {
        detail:"Our team can help you choose the right type of trust for your business, whether it's a discretionary trust, unit trust, or hybrid trust. We can also assist with the legal requirements involved in setting up a trust, including drafting the necessary documents and registering with ASIC."
    }
  ]
//   const faqSection = [
//     {
//       heading: "What bookkeeping software do you use?",
//       detail:
//         "We use a variety of bookkeeping software, including Xero, MYOB, and QuickBooks, depending on your business needs.",
//     },
//     {
//       heading: "How often will I receive financial reports?",
//       detail:
//         "We provide monthly, quarterly, and yearly financial reports, depending on your reporting needs.",
//     },
//     {
//       heading: "What happens if there are errors in my financial records?",
//       detail:
//         "Our team of bookkeepers is committed to providing accurate financial records. If errors are found, we will work with you to correct them as soon as possible.",
//     },
  
//   ];
const lastContent2=[
    {
detail:"If you are looking to establish a partnership, our partnership startup and formation services can help you navigate the complex legal requirements and ensure that you and your partners are protected. We can assist with registering your partnership with ASIC, obtaining an ABN, and drafting a partnership agreement that outlines the rights and responsibilities of each partner."
    },
    {
        detail:"Our team can also provide ongoing support to help you manage your partnership effectively, including preparing financial statements, managing tax compliance, and ensuring that your partnership agreement is up to date.        "
    },

]
const lastContent3=[
    {
        detail:"For sole traders, our sole trader startup and formation services can help you get your business up and running quickly and efficiently. We can help you register as a sole trader with ASIC, obtain an ABN, and provide ongoing support to ensure you meet your compliance obligations."
    },
    {
        detail:"Our team can also help you manage your finances and tax obligations, including preparing and lodging tax returns, managing GST and other tax obligations, and ensuring that you have the necessary insurance and other protections in place.        "
    },
    {
        detail:"At Siddiqui Associates, we understand that every business is unique, and we take a tailored approach to each client's needs. Our team will work closely with you to understand your goals and objectives, and provide the support and guidance you need to achieve them. Contact us today to learn more about our business structures and new business setup services."
    }
]
  return (
    <>
        <Helmet>
        <title>Professional Business Structures & Setup Services</title>
        <meta name="description" content="Streamline your business setup with Siddiqui & Associates. Get expert guidance on choosing the right business structures for success. Contact us now!" />
        <meta property="og:title" content="Professional Business Structures & Setup Services" />
        <meta property="og:description" content="Streamline your business setup with Siddiqui & Associates. Get expert guidance on choosing the right business structures for success. Contact us now!" />
        <link rel="canonical" href="https://siddiquiassociates.com.au/Business-Structures-New-Business-Setup-Services" />

      </Helmet>
      {/* <Navbar /> */}
      <div className={`${Styles.serviceContainer}`}>
        <ServiceBanner
          img={acc}
          alt="business structure Services"
          heading="Business Structures & New Business Setup Services"
          detail="At Siddiqui Associates, we offer a range of services to help businesses of all sizes and structures establish themselves in Australia. Our experienced team of accountants and tax professionals understand the complexities of the Australian taxation system and can help you choose the right business structure for your needs."
        />
        <ServiceLayout
          img={acc2}
          alt="business structure Services"
          heading="Company startup and formation services"
          detail={detail}
        />
          <ContentHeadingComponent heading="Trust startup and formation services" headingList={lastContent}/>
          <ContentHeadingComponent heading="Partnership startup and formation services" headingList={lastContent2}/>
          <ContentHeadingComponent heading="Sole trader startup and formation services" headingList={lastContent3}/>
        {/* <ServiceLayoutContent
          heading="Our Strategies:
"
         


          list={list}
        /> */}
     
          {/* <FaqSection heading="FAQs:" headingList={faqSection} /> */}
      </div>
      <BannerFooter/>
      <Footer />
    </>
  );
};

export default TaxReturn;
