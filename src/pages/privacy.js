import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Container from "../components/container"
import SEO from "../components/seo"
import styled from "@emotion/styled"

const Styles = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  margin: 0 20px;

  .title {
    color: #00001f;
    font-family: Barlow Condensed;
    font-size: 2.5em;
  }

  .section-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-size: 22px;
  }

  .sub-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-size: 26px;
    text-decoration: underline;
    color: #4a4a4a;
  }

  .paragragh {
    margin-bottom: 10px;
  }

  ul {
    list-style: disc;
    padding-left: 15px;
    margin-left: 15px;
  }
`

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout margin={"50px"}>
        <SEO title="Privacy Policy" />
        <Styles>
          <Container>
            <div className="title">Privacy Policy</div>
            <p class="paragragh">
              Pit Pay, Inc. dba Ticket Hoss (“Ticket Hoss,” “we,” “our,” and/or
              “us”) values the privacy of individuals who use our application,
              websites, and related services (collectively, our “Services”) to
              register to participate in or attend Events and/or Event
              Activities at Venues. This privacy policy (the “Privacy Policy”)
              explains how we collect, use, and share information from users of
              our Services (“Users”). By using our Services, you agree to the
              collection, use, disclosure, and procedures this Privacy Policy
              describes. Beyond the Privacy Policy, your use of our Services is
              also subject to our Terms of Service 
              <Link
                style={{
                  fontWeight: "bold",
                  color: "#fa4616",
                  textDecoration: "underline",
                }}
                to="/terms"
              >
                www.tickethoss.com/Terms.
              </Link>
            </p>
            <p class="paragragh">
              Any and all capitalized terms not defined herein shall have the
              meaning ascribed to them in our Terms of Service.
            </p>
            <h3 class="sub-title">Information We Collect</h3>
            <p class="paragragh">
              We may collect a variety of information from or about you or your
              devices from various sources, as described below.
            </p>

            <h3 class="section-title">A. Information You Provide to Us.</h3>
            <p class="paragragh">
              <strong>Registration and ID Information.</strong> When you
              register to use our Services, we collect and retain your name,
              phone number, email and zip code. We also collect this information
              whenever you make updates the aforementioned information.
            </p>
            <p>
              <strong>Communications.</strong> If you contact us directly, we
              may receive additional information about you. For example, when
              you contact our customer support team, we may receive your name,
              email address, phone number, the contents of a message or
              attachments that you may send to us, and other information you
              choose to provide. If you subscribe to our newsletter or other
              emails, then we will collect certain information from you, such as
              your email address. When we send you emails, we may track whether
              you open them to learn how to deliver a better customer experience
              and improve our Services.
            </p>
            <p class="paragragh">
              <strong>Payment Information.</strong>  If you make a purchase
              through our Services, your payment-related information, such as
              credit card or other financial information, is collected by our
              third-party payment processor on our behalf.
            </p>
            <p class="paragragh">
              <strong>Other Holder Information</strong>  If you are purchasing a
              Ticket for another Holder(s), we will only collect the other
              Holder(s) phone number.
            </p>
            <h3 class="section-title">
              B. Information We Collect When You Use Our Services.
            </h3>
            <p class="paragragh">
              <strong>Device Information.</strong> We receive information about
              the device and software you use to access our Services, including
              IP address, web browser type, operating system version, phone
              carrier and manufacturer, device identifiers, mobile advertising
              identifiers, and push notification tokens.
            </p>
            <p class="paragragh">
              <strong>Usage Information.</strong> To help us understand how you
              use our Services and to help us improve them, we automatically
              receive information about your interactions with our Services,
              like the features you use, and the dates and times of your visits.
            </p>
            <p class="paragragh">
              <strong>
                Information from Cookies and Similar Technologies.
              </strong>
              We and third-party partners collect information using cookies,
              pixel tags, or similar technologies. Our third-party partners,
              such as analytics and advertising partners, may use these
              technologies to collect information about your online activities
              over time and across different services. Cookies are small text
              files containing a string of alphanumeric characters. We may use
              both session cookies and persistent cookies. A session cookie
              disappears after you close your browser. A persistent cookie
              remains after you close your browser and may be used by your
              browser on subsequent visits to our Services.
            </p>
            <p class="paragragh">
              Please review your web browser’s “Help” file to learn the proper
              way to modify your cookie settings. Please note that if you delete
              or choose not to accept cookies from the Service, you may not be
              able to utilize the features of the Service to their fullest
              potential.
            </p>
            <h3 class="sub-title">How We Use the Information We Collect</h3>
            <p class="paragragh">We use the information we collect:</p>
            <ul>
              <li>
                To provide, maintain, improve, and enhance our Services,
                including to allow you to sign waivers and pay to attend events
                at Venues;
              </li>
              <li>
                To understand and analyze how you use our Services and develop
                new products, services, features, and functionality;
              </li>
              <li>
                To communicate with you, provide you with updates and other
                information relating to our Services, provide information that
                you request, respond to comments and questions, and otherwise
                provide customer support;
              </li>
              <li>
                For marketing and advertising purposes, such as developing and
                providing promotional and advertising materials that may be
                relevant, valuable or otherwise of interest to you;
              </li>
              <li>To facilitate transactions and payments;</li>
              <li>
                To find and prevent fraud, and respond to trust and safety
                issues that may arise;
              </li>
              <li>
                For compliance purposes, including enforcing our Terms of
                Service or other legal rights, or as may be required by
                applicable laws and regulations or requested by any judicial
                process or governmental agency; and
              </li>
              <li>
                For other purposes for which we provide specific notice at the
                time the information is collected.
              </li>
            </ul>
            <h3 class="sub-title">How We Share the Information We Collect</h3>
            <p class="paragragh">
              <strong>Affiliates.</strong> We may share any information we
              receive with our affiliates for any of the purposes described in
              this Privacy Policy.
            </p>
            <p class="paragragh">
              <strong>Vendors and Service Providers.</strong> We may share any
              information we receive with vendors and service providers retained
              in connection with the provision of our Services.
            </p>
            <p class="paragragh">
              <strong>Venues.</strong> By using our Services, you can digitally
              execute releases and waiver agreements, and register and provide
              payment for activities and events at Venues that you would like to
              attend. When you choose such an activity or event, you direct us
              to send the relevant Venue your registration information and an
              executed release and waiver of liability. We share this
              information at your direction, and the relevant Venue may use the
              information we provide it to, among other things, confirm you have
              paid to attend the activity or event, confirm you have executed
              the waiver and release required, or to send you updates and
              information about the activity or event and/or the Venue’s other
              activities and events.
            </p>
            <p class="paragragh">
              <strong>Release and Waiver Inquiries and Disputes.</strong> We may
              access, preserve, and disclose your information in relation to any
              inquiry or dispute involving your use of the Services to execute a
              release or waiver agreement. For example, we may disclose your
              information if a Venue, promoter, insurance company, or other
              party requests evidence that you executed a release or waiver
              agreement in the event of an accident or claim.
            </p>
            <p class="paragragh">
              <strong>Analytics Partners.</strong> We use analytics services
              such as Google Analytics to collect and process certain analytics
              data. These services may also collect information about your use
              of other websites, apps, and online resources. To help us
              understand how you use our Services and to help us improve them,
              we automatically receive information about your interactions with
              our Services, like the functionality you use and the dates and
              times of your visits.
            </p>
            <p class="paragragh">
              <strong>As Required By Law and Similar Disclosures.</strong> We
              may access, preserve, and disclose your information if we believe
              doing so is required or appropriate to: (a) comply with law
              enforcement requests and legal process, such as a court order or
              subpoena; (b) respond to your requests; or (c) protect your, our,
              or others’ rights, property, or safety.
            </p>
            <p class="paragragh">
              <strong>Merger, Sale, or Other Asset Transfers.</strong> We may
              transfer your information to service providers, advisors,
              potential transactional partners, or other third parties in
              connection with the consideration, negotiation, or completion of a
              corporate transaction in which we are acquired by or merged with
              another company or we sell, liquidate, or transfer all or a
              portion of our assets. The use of your information following any
              of these events will be governed by the provisions of this Privacy
              Policy in effect at the time the applicable information was
              collected.
            </p>
            <p class="paragragh">
              <strong>Consent.</strong> We may also disclose your information
              with your permission.
            </p>
            <h3 class="sub-title">Your Choices</h3>
            <p class="paragragh">
              <strong>Marketing Communications.</strong> You can unsubscribe
              from our promotional emails via the link provided in the emails.
              Even if you opt-out of receiving promotional messages from us, you
              will continue to receive administrative messages from us.
            </p>
            <h3 class="sub-title">Third Parties</h3>
            <p class="paragragh">
              Our Services may contain links to other websites, products, or
              services that we do not own or operate. We are not responsible for
              the privacy practices of these third parties. Please be aware that
              this Privacy Policy does not apply to your activities on these
              third-party services or any information you disclose to these
              third parties. We encourage you to read their privacy policies
              before providing any information to them.
            </p>
            <h3 class="sub-title">Security</h3>
            <p class="paragragh">
              We make reasonable efforts to protect your information by using
              physical and electronic safeguards designed to improve the
              security of the information we maintain. However, as no electronic
              transmission or storage of information can be entirely secure, we
              can make no guarantees as to the security or privacy of your
              information.
            </p>
            <h3 class="sub-title">Children’s Privacy</h3>
            <p class="paragragh">
              We do not knowingly collect, maintain, or use personal information
              from children under 13 years of age, and no part of our Services
              are directed to children. If you learn that a child has provided
              us with personal information in violation of this Privacy Policy,
              then you may alert us at{" "}
              <a href="mailto:Support@PitPay.com">Support@PitPay.com</a>.
            </p>
            <h3 class="sub-title">Your California Privacy Rights</h3>
            <p class="paragragh">
              If you reside in California and have provided your personal
              information to us, you may request information once per calendar
              year about our disclosures of certain categories of personal
              information to third parties for their direct marketing purposes.
              Such requests must be submitted to us in writing at the following
              7168 Weddington Rd., Suite 148 Concord, NC 28027.
            </p>
            <h3 class="sub-title">International Visitors</h3>
            <p class="paragragh">
              Our Services are hosted in the United States and intended for
              visitors located within the United States. If you choose to use
              the Services from the European Union or other regions of the world
              with laws governing data collection and use that may differ from
              U.S. law, then please note that you are transferring your personal
              information outside of those regions to the United States for
              storage and processing. Also, we may transfer your data from the
              U.S. to other countries or regions in connection with storage and
              processing of data, fulfilling your requests, and operating the
              Services. By providing any information, including personal
              information, on or to the Services, you consent to such transfer,
              storage, and processing.
            </p>
            <h3 class="sub-title">
              Update Your Information or Pose a Question
            </h3>
            <p class="paragragh">
              You can update your account and profile information through
              options presented in the Services. If you have questions about
              your privacy on the Services or this privacy policy, please
              contact us at Support@PitPay.com.
            </p>
            <h3 class="sub-title">Changes to this Privacy Policy</h3>
            <p class="paragragh">
              We will post any adjustments to the Privacy Policy on this page,
              and the revised version will be effective when it is posted. If we
              materially change the ways in which we use or share personal
              information previously collected from you through the Services, we
              will notify you through the Services, by email, or other
              communication.
            </p>
            <h3 class="sub-title">Contact Information</h3>
            <p class="paragragh">
              If you have any questions, comments, or concerns about our
              processing activities, please email us at{" "}
              <a href="mailto:Support@PitPay.com">Support@PitPay.com</a> or
              write to us at 7168 Weddington Rd., Suite 148 Concord, NC 28027
            </p>
            <p class="paragragh" style={{ marginBottom: 80 }}>
              <strong>Last Updated:</strong> 03-03-22
            </p>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
