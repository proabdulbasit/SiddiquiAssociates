import Styles from "./dashboard.module.scss";

import Footer from "../../layout/footer";

import Card from "../../components/card";
import card1 from "../../assets/images/bookkepping.webp";
import card2 from "../../assets/images/Business-activity-statemant.webp";
import card3 from "../../assets/images/business-planning.webp";

import card6 from "../../assets/images/superannuation.webp";
import card7 from "../../assets/images/tax-return.webp";
import card8 from "../../assets/images/businessStructure.webp";
import acc from "../../assets/images/Home-page-backgorund.webp";
import ServiceCounter from "../../components/serviceCounter";
import medal from "../../assets/images/Tax-service.webp";
import cup from "../../assets/images/satisfaction.webp";
import thumbs from "../../assets/images/recomendation.webp";

import Slider from "../../components/slider";

import Map from "../../components/map";
import ServicesLayoutContent from "../../components/servicesLayoutcontent";
import { Helmet } from "react-helmet";
import LogoSlider from "../../components/LogoSlider";

const testimonial = [
  {
    name: "Antoni Granata",
    review:
      "I Have been going to Siddiqui associates for several years now, they are always professional and trust worthy. I live quite far away, and with my work commitments its hard to sometimes come in as my hours are difficult, however they are always willing to help over the phone appointment / email. I have referred many friends that are now also agreeing with the excellent service. I would definitely recommend",
  },
  {
    name: "d marshall",
    review:
      "Exceptional service and value. Awesome turnaround time and great communications.",
  },
  {
    name: "Jacob Korz",
    review:
      "I have been going to Siddiqui for getting my tax returns done for many years. I have recommended many friends as he is really good at it. Great service. Trust worthy and very efficient. Highly recommended !!",
  },
  {
    name: "Adrian Rice",
    review:
      "I arrived at the office with an absolute mess of a tax situation. Siddiqui set to work and calmly sorted the whole mess out in no time flat. Outstanding. I am now back on the best of terms with the ATO. As the other reviews state, efficient, reliable and friendly. I have recommended Siddiqui to everyone I know.",
  },
  {
    name: "Jack O'Leary",
    review:
      "Excellent Business. Efficient, honest and reliable service. This will be my third tax return under Siddiqui Associates. I have recommended a number of friends & colleagues.",
  },
  {
    name: "Lee Dor",
    review:
      "I have been served by Siddiqui Associates for several years. They are very professional, friendly and cooperative. I get valuable advice from them whenever I require.",
  },
];
const images = [
  {
    src: "./images/7eleven.png",
    alt: "7-Eleven",
    name: "7-Eleven "
  },
  {
    src: "./images/cheesecake.png",
    alt: "The Cheesecake Shop",
    name: "The Cheesecake Shop "
  },
  {
    src: "./images/rashays.png",
    alt: "Rashays",
    name: "Rashays  "
  },
  {
    src: "./images/artmarket.png",
    alt: "Artmarkets ",
    name: "Artmarkets  "
  },
  {
    src: "./images/caltex_logo.png",
    alt: "Caltex",
    name: "Caltex  "
  },
  {
    src: "./images/broaster.png",
    alt: "Broaster Chicken",
    name: "Broaster Chicken "
  },
  {
    src: "./images/original.png",
    alt: "Love Recruitment",
    name: "Love Recruitment "
  },
  {
    src: "./images/dcquantity.png",
    alt: "DC Estimation Construction Services ",
    name: "DC Estimation Construction Services  "
  },
  {
    src: "./images/leadingedge.png",
    alt: "Leading Edge Carpentry Services",
    name: "Leading Edge Carpentry Services "
  },
  {
    src: "./images/adam.png",
    alt: "Adam's Handyman Services",
    name: "Adam's Handyman Services "
  },
  {
    src: "./images/sunshine.png",
    alt: "Sunshine Electrical & Solar Services",
    name: "Sunshine Electrical & Solar Services"
  },
];
const list = [
  {
    value:
      "We are professional accountants and have more than 25 years’ experience.",
  },
  {
    value:
      "Your business is important for us and believe in honest and expert advice.",
  },
  {
    value:
      "Know the tricks of trade & have expertise in Tax Laws and make sure provide best possible advice and claim all your entitled deductions.",
  },
  {
    value:
      "We believe in long term relationships with our clients and act as partners for taxation, accounting and financial matters and take the responsibility of compliance activities on your behalf while you focus on your business operations and growth.",
  },
  {
    value:
      "We understand and are engaged in business processes, operations and structures of many type of business whether it’s a company, partnership, trust, sole trader, self-managed super fund, body corporate or a charity organization.",
  },
  {
    value: "We offer value for money and cost effective services.",
  },
];

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>
          Trusted Associate Service Provider in Australia | Siddiqui Associates
        </title>
        <meta
          name="description"
          content="Get reliable and professional Associate services in Darlinghurst, Australia with Siddiqui Associate Service. Contact us today for BAS & GST, Tax Return & more."
        />
        <meta
          property="og:title"
          content="Innovative Solutions & Top-Notch Support from Our Associate Service Team in Australia | Siddiqui Associates"
        />
        <meta
          property="og:description"
          content="Get reliable and professional Associate services in Darlinghurst, Australia with Siddiqui Associate Service. Contact us today for BAS & GST, Tax Return & more."
        />
        <link rel="canonical" href="https://siddiquiassociates.com.au" />
      </Helmet>
      {/* <Navbar /> */}
      <div className={Styles.mainWrapper}>
        <img src={acc} alt="Sadiqui Associates" />
        <div className={Styles.content}>
          <h1>Siddiqui Associates</h1>
          <h2 style={{ fontSize: "25px" }}>
            Taxation and Accounting Services{" "}
          </h2>
        </div>
      </div>
      <div className={Styles.counterWrapper}>
        <ServiceCounter
          imageSrc={medal}
          sign={"+"}
          text={"Tax Services"}
          limit={20}
          alt="Tax Services"
        />
        <ServiceCounter
          imageSrc={thumbs}
          sign={"%"}
          text={"Recommended"}
          limit={90}
          alt="Recommendation"
        />
        <ServiceCounter
          imageSrc={cup}
          sign={"%"}
          text={"Satisfaction"}
          limit={100}
          alt="100% Satisfaction"
        />
      </div>
      <h1 style={{ textAlign: "center", margin: "45px 0px" }}>Our Services</h1>
      <div className={Styles.serviceWrapper}>
        <Card
          link="/business-activity-statement"
          heading={"BUSINESS ACTIVITY STATEMENTS (BAS) OR GST"}
          content={
            "We are providing our services to various small/medium business for their GST obligations to lodge their monthly/quarterly and annually (BAS) business activity statements...."
          }
          cardImg={card2}
          alt="Business Activity Statement"
          modalContent={
            "We are providing our services to various small/medium business for their GST obligations to lodge their monthly/quarterly and annually (BAS) business activity statements."
          }
        />
        <Card
          link="/income-tax-and-tax-returns-service"
          heading={"INCOME TAX AND TAX RETURNS FILING SERVICE IN AUSTRAILIA"}
          content={
            "We have many years’ experience for the preparation and lodgement of annual return obligations for wide range of industries that includes Tradies, Retailers, Professionals...."
          }
          cardImg={card7}
          alt="Tax Return"
          modalContent={
            "We have many years’ experience for the preparation and lodgement of annual return obligations for wide range of industries that includes Tradies, Retailers and Professionals."
          }
        />
        <Card
          link="/business-planning-advisory-formation-services"
          heading={"BUSNIESS PLANNING ADIVSORY AND FORMATION SERVICES"}
          content={
            "Establishing the right business structure is essential for protecting your assets against unforeseeable circumstances or losses. When the right structure is chosen, the...."
          }
          cardImg={card3}
          alt="Busines Planning And Advisory"
          modalContent={
            "Establishing the right business structure is essential for protecting your assets against unforeseeable circumstances or losses. When the right structure is chosen, the business assets can be saved from any potential litigation, and to avoid losing control of your business. The competing issues of tax, preferred exit strategies and regulations amongst other matters will need to be balanced in this critical decision. Regardless whether you are planning to purchase an existing business, a brand-new start-up business, and an established enterprise or looking to exit an existing business, we can help with your business needs. Every business is different! We will work closely with your management and gain a thorough understanding of your business needs and the industry, and provide specialist knowledge and objective advice to help your business meet its full potential. We will also provide thorough and objective review of your current operations to reduce costs, improve efficiency and increase profitability."
          }
        />

        <Card
          heading={"SUPERANNUATION"}
          content={
            "With effective tax rates and increased control over assets and investment choice, it’s no surprise that Self Managed Super Funds (SMSFs) are Australia’s fastest growing...."
          }
          cardImg={card6}
          modalContent={
            "With effective tax rates and increased control over assets and investment choice, it’s no surprise that Self Managed Super Funds (SMSFs) are Australia’s fastest growing investment vehicle. In order to access these benefits an SMSF must comply with the legislation and regulations. There’s also a large administrative tasks, ongoing minutes and trustee meetings, monitoring contributions and pension withdrawal, updating market value of fund’s assets, preparing reports and organising an annual audit – all of which can be time consuming and therefore take your attention away from your focus on managing the growth of wealth for the retirement benefit of members. We can provide through our financial planner the relevant strategies that suit your circumstances in order to achieve member’s needs, from accessing benefits to maximising their SMSF’s balances or purchasing real estate via finance in the SMSFs, etc. Additionally, our Financial Planning division will provide the investment advices and products tailored to suit your individual needs."
          }
          alt="Superannuation Service"
          link="superannuation"
        />
        <Card
          heading={"BOOKKEEPING"}
          content={
            "Small business owners generally spend loads of time on administration, record keeping and date entry for the business. Our experienced bookkeepers can assist...."
          }
          cardImg={card1}
          alt="Bookkeeping Service"
          modalContent={
            "Small business owners generally spend loads of time on administration, record keeping and date entry for the business. Our experienced bookkeepers can assist from software setup, data entry, reconciliation, accounts payable and receivable, payroll, insurance, month and year end accounts and reporting, and more."
          }
          link="bookkeeping"
        />
        <Card
          heading={"Business Structures & New Business Setup Services"}
          content={
            "Our company startup and formation services can include registering a new company with the Australian Securities and Investments Commission (ASIC)...."
          }
          cardImg={card8}
          alt="Business Structures"
          modalContent={
            "Our company startup and formation services can include registering a new company with the Australian Securities and Investments Commission (ASIC)."
          }
          link="/Business-Structures-New-Business-Setup-Services"
        />
      </div>
      <div style={{ marginTop: "50px" }}>
        <ServicesLayoutContent
          heading={"Why Choose Siddiqui Associates as your Accountant"}
          list={list}
        />
      </div>
      <div className="container" style={{ padding: "50px 0" }}>
        <h2 style={{ textAlign: "center", margin: "15px 0px", fontSize: "38px" }}>
          Our Major Business Clients
        </h2>
        <LogoSlider images={images} />

      </div>

      <h2 style={{ textAlign: "center", margin: "15px 0px", fontSize: "38px" }}>
        Testimonials
      </h2>
      <Slider testimonial={testimonial} />
      {/* <Slider testimonial={"First one"} /> */}
      {/* <Map/> */}
      <Map />
      <Footer />
    </>
  );
};

export default Dashboard;
