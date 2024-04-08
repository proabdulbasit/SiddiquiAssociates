import React from "react";
import Styles from "./service.module.scss";
import ServiceBanner from "../../components/serviceBanner";
import ServiceDetail from "../../components/serviceDetail";
import ServiceDetail2 from "../../components/serviceDetail2";
import acc from "../../assets/images/Associate Services.webp";

import Footer from "../../layout/footer";
import card1 from "../../assets/images/bookkepping1.webp";
import card2 from "../../assets/images/Business-activity-statemant1.webp";
import card3 from "../../assets/images/business-planning1.webp";


import card6 from "../../assets/images/superannuation1.webp";
import card8 from "../../assets/images/businessStructure1.webp";
import card7 from "../../assets/images/tax-return1.webp";
import ServicesLayoutContent from "../../components/servicesLayoutcontent";
import { Helmet } from "react-helmet";
const ServicePage = () => {
  const list = [
    {
      value:
        "Tax returns preparation and lodgement for business clients including companies, trusts, partnerships, sole traders and self-managed superannuation funds.",
    },
    {
      value:
        "Tax compliance and planning for clients for best possible outcome so there are no surprises ",
    },
    {
      value: "Goods and Services Tax (GST) advice and compliance ",
    },
    {
      value: "Capital gains tax (CGT) advice and compliance",
    },
    {
      value: "Payroll tax advice and compliance",
    },
    {
      value: "Investment property appraisal and negative gearing advice ",
    },
    {
      value: "Fringe Benefits Tax (FBT) advice and compliance",
    },
  ];
  const list2=[
    {
value:"Bookkeeping and accounting"
    },
    {
value:"Financial statement preparation"
    },
    {
value:"Budgeting and forecasting"
    },
    {
value:"Cash flow management"
    },
    {
value:"Business advisory services"
    },
    {
      value:"ASIC (Australian Securities & Investment Commission ) Administrative Services"
    }
  ]
  return (
    <>
      <Helmet>
        <title>Professional Accounting and Taxation Services | Siddiqui Associate Australia</title>
        <meta name="description" content="Expert services for all your legal needs. Trust Siddiqui & Associates Service for professional legal advice and representation. Visit us today!" />
        <meta property="og:title" content="Professional Accounting and Taxation Services | Siddiqui Associate Australia" />
        <meta property="og:description" content="Expert services for all your legal needs. Trust Siddiqui & Associates Service for professional legal advice and representation. Visit us today!" />
        <link rel="canonical" href="https://siddiquiassociates.com.au/services" />

      </Helmet>
      {/* <Navbar /> */}
      <div className={`${Styles.serviceContainer}`}>
        <ServiceBanner
          img={acc}
          
          alt="Texation And Accounting Services"
          heading="Our Services"
          detail="At Siddiqui Associates, we understand that tax compliance and accounting can be complex and timeconsuming. That's why we offer a comprehensive range of taxation services and accounting solutions to
          help you meet your financial obligations and achieve your business goals."
        />
        <div style={{ marginTop: "50px" }}>
          <h2 style={{ textAlign: "center", marginBottom: "30px" }}>
            Our Services
          </h2>
          <ServicesLayoutContent
            detail="Our team of experienced tax and accounting professionals can provide you with the support you need to
            navigate the constantly changing tax landscape, while minimizing your tax burden and maximizing your
            profitability. Whether you are an individual, small business owner, or large corporation, we can provide
            you with tailored solutions to meet your unique needs."
            list={list}
            listheading="Our taxation services include:"
          />
            <ServicesLayoutContent
            detail="In addition to our taxation services, we also offer a full range of accounting services to help you keep
            your financials in order. Our accounting solutions include:"
            list={list2}
            content="At Siddiqui Associates, we are committed to providing our clients with the highest level of service and
            support. Contact us today to learn more about how we can help you with your taxation and accounting
            needs"
            
          />
        </div>
        <ServiceDetail
          link="/business-activity-statement"
          img={card2}
          alt="Business Activity Statement"
          heading="BUSINESS ACTIVITY STATEMENTS (BAS) OR GST"
          detail="We are providing our services to various small/medium business for their GST obligations to lodge their monthly/quarterly and annually (BAS) business activity statements...."
        />
        <ServiceDetail2
          img={card7}
          alt="Income Tax And Tax Return Services"
          link="/income-tax-and-tax-returns-service"
          heading="INCOME TAX AND TAX RETURNS FILING SERVICE IN AUSTRAILIA"
          detail="We have many years’ experience for the preparation and lodgement of annual return obligations for wide range of industries that includes Tradies, Retailers, Professionals...."
        />

        <ServiceDetail
          link="/business-planning-advisory-formation-services"
          img={card3}
          alt="Business Planning And Advisory"
          heading="BUSINESS PLANNING ADVISORY AND FORMATION SERVICES
          "
          detail="Establishing the right business structure is essential for protecting your assets against unforeseeable circumstances or losses. When the right structure is chosen, the....

          "
        />

     

       

        <ServiceDetail2
          
          img={card6}
          link="/superannuation"
          heading="SUPERANNUATION"
          alt="Superaanuation Service"
          detail="With effective tax rates and increased control over assets and investment choice, it’s no surprise that Self Managed Super Funds (SMSFs) are Australia’s fastest growing...."
        
        />
         <ServiceDetail
         img={card1}
         link="/bookkeeping"
         heading="BOOKKEEPING"
         alt="Bookkeeping Services"
         detail="Small business owners generally spend loads of time on administration, record keeping and date entry for the business. Our experienced bookkeepers can assist...."
        />
  <ServiceDetail2
          
          img={card8}
          link="/Business-Structures-New-Business-Setup-Services"
          heading="Business Structures & New Business Setup Services"
          alt="Business Structures Service"
          detail="Our company startup and formation services can include registering a new company with the Australian Securities and Investments Commission (ASIC)...."
        
        />

      </div>

      <Footer />
    </>
  );
};

export default ServicePage;
