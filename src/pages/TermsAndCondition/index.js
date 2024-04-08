import React from "react";
// import Navbar from "../../layout/navbar";
import Footer from "../../layout/footer";
import { Link } from "react-router-dom";
import Serviceslist from "../../components/servicesList/Serviceslist";
import { Helmet } from "react-helmet";

const TermsAndCondtion = () => {
  const list1 = [
    {
      value: "Republish material from siddiquiAssociates",
    },
    {
      value: "Sell, rent or sub-license material from siddiquiAssociates",
    },
    {
      value: "Reproduce, duplicate or copy material from siddiquiAssociates",
    },
    {
      value: "Redistribute content from siddiquiAssociates",
    },
  ];
  const list2 = [
    {
      value:
        "You are entitled to post the Comments on our website and have all necessary licenses and consents to do so;",
    },
    {
      value:
        "The Comments do not invade any intellectual property right, including without limitation copyright, patent or trademark of any third party;",
    },
    {
      value:
        "The Comments do not contain any defamatory, libelous, offensive, indecent or otherwise unlawful material which is an invasion of privacy",
    },
    {
      value:
        "The Comments will not be used to solicit or promote business or custom or present commercial activities or unlawful activity.",
    },
  ];
  const list3 = [
    {
      value: "Government agencies;",
    },
    {
      value: "Search engines;",
    },
    {
      value: "News organizations;",
    },
    {
      value:
        "Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and",
    },
    {
      value:
        "System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.",
    },
  ];
  const list4 = [
    {
      value: "commonly-known consumer and/or business information sources;",
    },
    {
      value: "dot.com community sites;",
    },
    {
      value: "associations or other groups representing charities;",
    },
    {
      value: "online directory distributors;",
    },
    {
      value: "internet portals;",
    },
    {
      value: "accounting, law and consulting firms; and",
    },
    {
      value: "educational institutions and trade associations.",
    },
  ];
  const list5 = [
    {
      value: "By use of our corporate name; or",
    },
    {
      value: "By use of the uniform resource locator being linked to; or",
    },
    {
      value:
        "By use of any other description of our Website being linked to that makes sense within the context and format of content on the linking party’s site.",
    },
  ];
  const list6 = [
    {
      value:
        "limit or exclude our or your liability for death or personal injury;",
    },
    {
      value:
        "limit or exclude our or your liability for fraud or fraudulent misrepresentation;",
    },
    {
      value:
        "limit any of our or your liabilities in any way that is not permitted under applicable law; or",
    },
    {
      value:
        "exclude any of our or your liabilities that may not be excluded under applicable law.",
    },
  ];
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Siddiqui Associate Australia</title>
        <meta name="description" content="Learn about Siddiqui Associate's website and service policies and regulations on our Terms and Conditions page. Read more to understand our terms of use." />
        <meta property="og:title" content="Siddiqui Associate Australia Terms and Conditions" />
        <meta property="og:description" content="Learn about Siddiqui Associate's website and service policies and regulations on our Terms and Conditions page. Read more to understand our terms of use." />
        <link rel="canonical" href="https://siddiquiassociates.com.au/term-and-condition" />

      </Helmet>
      {/* <Navbar /> */}
      <div className="container" style={{ padding: "50px 0" }}>
        <h1>Terms and Conditions</h1>
        <h2>Welcome to SiddiquiAssociates!</h2>
        <p>
          These terms and conditions outline the rules and regulations for the
          use of Siddiqui Associates's Website, located at&nbsp;
          <Link>https://siddiquiassociates.com.au</Link>.
        </p>
        <p>
          By accessing this website we assume you accept these terms and
          conditions. Do not continue to use siddiquiAssociates if you do not
          agree to take all of the terms and conditions stated on this page.
        </p>
        <p>
          The following terminology applies to these Terms and Conditions,
          Privacy Statement and Disclaimer Notice and all Agreements: "Client",
          "You" and "Your" refers to you, the person log on this website and
          compliant to the Company’s terms and conditions. "The Company",
          "Ourselves", "We", "Our" and "Us", refers to our Company. "Party",
          "Parties", or "Us", refers to both the Client and ourselves. All terms
          refer to the offer, acceptance and consideration of payment necessary
          to undertake the process of our assistance to the Client in the most
          appropriate manner for the express purpose of meeting the Client’s
          needs in respect of provision of the Company’s stated services, in
          accordance with and subject to, prevailing law of Netherlands. Any use
          of the above terminology or other words in the singular, plural,
          capitalization and/or he/she or they, are taken as interchangeable and
          therefore as referring to same.
        </p>
        <h2>Cookies</h2>
        <p>
          We employ the use of cookies. By accessing siddiquiAssociates, you
          agreed to use cookies in agreement with the Siddiqui Associates's
          Privacy Policy.
        </p>
        <p>
          Most interactive websites use cookies to let us retrieve the user’s
          details for each visit. Cookies are used by our website to enable the
          functionality of certain areas to make it easier for people visiting
          our website. Some of our affiliate/advertising partners may also use
          cookies.
        </p>
        <h2>License</h2>
        <p>
          Unless otherwise stated, Siddiqui Associates and/or its licensors own
          the intellectual property rights for all material on
          siddiquiAssociates. All intellectual property rights are reserved. You
          may access this from siddiquiAssociates for your own personal use
          subjected to restrictions set in these terms and conditions.
        </p>
        <p>You must not:</p>
        <Serviceslist list={list1} />
        <p>
          Parts of this website offer an opportunity for users to post and
          exchange opinions and information in certain areas of the website.
          Siddiqui Associates does not filter, edit, publish or review Comments
          prior to their presence on the website. Comments do not reflect the
          views and opinions of Siddiqui Associates,its agents and/or
          affiliates. Comments reflect the views and opinions of the person who
          post their views and opinions. To the extent permitted by applicable
          laws, Siddiqui Associates shall not be liable for the Comments or for
          any liability, damages or expenses caused and/or suffered as a result
          of any use of and/or posting of and/or appearance of the Comments on
          this website.
        </p>
        <p>
          Siddiqui Associates reserves the right to monitor all Comments and to
          remove any Comments which can be considered inappropriate, offensive
          or causes breach of these Terms and Conditions.
        </p>
        <p>You warrant and represent that:</p>
        <Serviceslist list={list2} />
        <p>
          You hereby grant Siddiqui Associates a non-exclusive license to use,
          reproduce, edit and authorize others to use, reproduce and edit any of
          your Comments in any and all forms, formats or media.
        </p>
        <h2>Hyperlinking to our Content</h2>
        <p>
          The following organizations may link to our Website without prior
          written approval:
        </p>
        <Serviceslist list={list3} />
        <p>
          These organizations may link to our home page, to publications or to
          other Website information so long as the link: (a) is not in any way
          deceptive; (b) does not falsely imply sponsorship, endorsement or
          approval of the linking party and its products and/or services; and
          (c) fits within the context of the linking party’s site.
        </p>
        <p>
          We may consider and approve other link requests from the following
          types of organizations:
        </p>
        <Serviceslist list={list4} />
        <p>
          We will approve link requests from these organizations if we decide
          that: (a) the link would not make us look unfavorably to ourselves or
          to our accredited businesses; (b) the organization does not have any
          negative records with us; (c) the benefit to us from the visibility of
          the hyperlink compensates the absence of Siddiqui Associates; and (d)
          the link is in the context of general resource information.
        </p>
        <p>
          These organizations may link to our home page so long as the link: (a)
          is not in any way deceptive; (b) does not falsely imply sponsorship,
          endorsement or approval of the linking party and its products or
          services; and (c) fits within the context of the linking party’s site.
        </p>
        <p>
          If you are one of the organizations listed in paragraph 2 above and
          are interested in linking to our website, you must inform us by
          sending an e-mail to Siddiqui Associates. Please include your name,
          your organization name, contact information as well as the URL of your
          site, a list of any URLs from which you intend to link to our Website,
          and a list of the URLs on our site to which you would like to link.
          Wait 2-3 weeks for a response.
        </p>
        <p>Approved organizations may hyperlink to our Website as follows:</p>
        <Serviceslist list={list5} />
        <p>
          No use of Siddiqui Associates's logo or other artwork will be allowed
          for linking absent a trademark license agreement.
        </p>
        <h2>iFrames</h2>
        <p>
          Without prior approval and written permission, you may not create
          frames around our Webpages that alter in any way the visual
          presentation or appearance of our Website.
        </p>
        <h2>Content Liability</h2>
        <p>
          We shall not be hold responsible for any content that appears on your
          Website. You agree to protect and defend us against all claims that is
          rising on your Website. No link(s) should appear on any Website that
          may be interpreted as libelous, obscene or criminal, or which
          infringes, otherwise violates, or advocates the infringement or other
          violation of, any third party rights.
        </p>
        <h2>Your Privacy</h2>
        <p>
          Please read&nbsp;
          <Link to="/privacy-policy">Privacy Policy</Link>
        </p>
        <h2>Reservation of Rights</h2>
        <p>
          We reserve the right to request that you remove all links or any
          particular link to our Website. You approve to immediately remove all
          links to our Website upon request. We also reserve the right to amen
          these terms and conditions and it’s linking policy at any time. By
          continuously linking to our Website, you agree to be bound to and
          follow these linking terms and conditions.
        </p>
        <h2>Removal of Links From Our Website</h2>
        <p>
          If you find any link on our Website that is offensive for any reason,
          you are free to contact and inform us any moment. We will consider
          requests to remove links but we are not obligated to or so or to
          respond to you directly.
        </p>
        <p>
          We do not ensure that the information on this website is correct, we
          do not warrant its completeness or accuracy; nor do we promise to
          ensure that the website remains available or that the material on the
          website is kept up to date.
        </p>
        <h2>Disclaimer</h2>
        <p>
          To the maximum extent permitted by applicable law, we exclude all
          representations, warranties and conditions relating to our website and
          the use of this website. Nothing in this disclaimer will:
        </p>
        <Serviceslist list={list6} />
        <p>
          The limitations and prohibitions of liability set in this Section and
          elsewhere in this disclaimer: (a) are subject to the preceding
          paragraph; and (b) govern all liabilities arising under the
          disclaimer, including liabilities arising in contract, in tort and for
          breach of statutory duty.
        </p>
        <p>
          As long as the website and the information and services on the website
          are provided free of charge, we will not be liable for any loss or
          damage of any nature.
        </p>
      </div>
      <Footer />
    </>
  );
};

export default TermsAndCondtion;
