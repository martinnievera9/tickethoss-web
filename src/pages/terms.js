import React from "react"
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

  .underline {
    text-decoration: underline;
  }

  .centered-title {
    margin: 30px 0 10px 0;
    font-weight: bold;
    font-size: 26px;
    text-align: center;
    color: #00001f;
  }

  .paragragh {
    margin-bottom: 10px;
  }

  ul {
    list-style: disc;
    padding-left: 15px;
    margin-left: 15px;
  }

  span {
    text-decoration: underline;
    padding-left: 15px;
  }
`

const Indented = styled.div`
  margin-left: 30px;
`

const Tab = styled.div`
  margin-left: 20px;
  display: inline-block;
`

const Address = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`

export default class Page extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <Layout margin={"50px"}>
        <SEO title="Ticket Hoss Terms of Service" />
        <Styles>
          <Container>
            <div className="title">Ticket Hoss Terms of Service</div>
            <p class="paragragh">Last Updated: 03-03-2022</p>
            <p class="paragragh">
              Welcome, and thank you for your interest in Ticket Hoss developed
              by Pit Pay Inc. (“
              <strong>Ticket Hoss</strong>,” “<strong>we</strong>,” or “
              <strong>us”</strong>) and our mobile application and website at
              www.tickethoss.com, along with our App (defined below), related
              websites, networks, applications, and other services provided by
              us (collectively, the “<strong>Service”</strong>). These Terms
              (defined below) are a legally binding contract between you and
              Ticket Hoss regarding your use of the Service. These Terms contain
              waivers, limitations of liability, and indemnification provisions
              for the benefit of Ticket Hoss, as well as for the benefit of
              certain other third parties related to Events (defined below) or
              Venues (defined below) for which you are using the Service (see
              Section 3 below).
            </p>
            <h3 class="centered-title">
              PLEASE READ THE FOLLOWING TERMS CAREFULLY.
            </h3>
            <p class="paragragh">
              <strong>BY CLICKING “I ACCEPT,”</strong> YOU AGREE THAT YOU HAVE
              READ AND UNDERSTOOD, AND, AS A CONDITION TO YOUR USE OF THE
              SERVICE, YOU AGREE TO BE BOUND BY, THE FOLLOWING TERMS AND
              CONDITIONS, INCLUDING PIT PAY’S PRIVACY POLICY (TOGETHER, THESE “
              <strong class="underline">Terms</strong>”). IF YOU ARE NOT
              ELIGIBLE, OR DO NOT AGREE TO THE TERMS, THEN YOU DO NOT HAVE OUR
              PERMISSION TO USE THE SERVICE. YOUR USE OF THE SERVICE, AND TICKET
              HOSS’S PROVISION OF THE SERVICE TO YOU, CONSTITUTES AN AGREEMENT
              BY TICKET HOSS AND BY YOU TO BE BOUND BY THESE TERMS.{" "}
            </p>
            <p class="paragragh">
              <strong>ARBITRATION NOTICE.</strong> Except for certain kinds of
              disputes described in Section 18, you agree that disputes arising
              under these Terms will be resolved by binding, individual
              arbitration, and BY ACCEPTING THESE TERMS, YOU AND PIT PAY ARE
              EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN ANY
              CLASS ACTION OR REPRESENTATIVE PROCEEDING. YOU AGREE TO GIVE UP
              YOUR RIGHT TO GO TO COURT to assert or defend your rights under
              this contract (except for matters that may be taken to small
              claims court). Your rights will be determined by a NEUTRAL
              ARBITRATOR and NOT a judge or jury. (See Section 18.)
            </p>
            <h3 class="sub-title">1. TICKET HOSS SERVICE OVERVIEW</h3>
            <p class="paragragh">
              1.1 <span>General Overview.</span> Ticket Hoss makes available a
              mobile app called “Ticket Hoss” (the “<strong>App</strong>”) that
              provides a simple way for operators (“
              <strong>Operators”</strong>) of participating race tracks,
              recreational facilities, and other participating venues (each a “
              <strong>Venue</strong>”) to grant you a revokable license for
              authorized entrance (a “<strong>Ticket</strong>”) to allow you to
              attend activities and events held at the Venues (each, an “
              <strong>Event</strong>”). Ticket Hoss provides the App and related
              services to Operators to manage the purchase of Tickets by Event
              attendees (each, an <strong>“Attendee”</strong>). If you purchase
              a Ticket through the App, you must have your phone with you to
              display the Ticket to enter a Venue.
            </p>
            <p class="paragragh">
              1.2 <span>Disclaimer.</span> Ticket Hoss itself is not the owner
              or operator of any Venues and each Operator is solely responsible
              for making sure all of its Events comply with all applicable laws.
              Ticket Hoss makes no representations or warranties as to the
              quality, safety, or legality of any Event or Venue.
            </p>
            <h3 class="sub-title">2. ELIGIBILITY</h3>
            <p class="paragragh">
              You must be at least 13 years old to use the Service. By agreeing
              to these Terms, you represent and warrant to us that: (a) you are
              at least 13 years old; (b) you have not previously been suspended
              or removed from any part of the Service; and (c) your registration
              for and your use of the Service is in compliance with any and all
              applicable laws and regulations. If you have been permanently
              barred from entering a Venue or are currently suspended from a
              Venue, you may not purchase a Ticket for that Venue through the
              App.
            </p>
            <h3 class="sub-title">
              3. ASSUMPTION OF RISK AND TERMS OF REVOCABLE SEAT LICENSE
            </h3>
            <p class="paragragh">
              3.1 Your use of the App is specifically conditioned on your
              agreement to, in addition to the other terms in the Terms, the
              following Assumption of Risk and Revocable Seat License. Also, by
              your acceptance and/or use of a Ticket for the Event at the Venue,
              the Ticket Holder (“<strong>Holder</strong>”), on behalf of
              himself/herself and any minor(s) accompanying Holder (“
              <strong>Minor</strong>”), agrees to the terms contained herein.
              Holder and Minor together are referred to herein as (“
              <strong>Releasors</strong>”).
            </p>
            <p class="paragragh">
              WARNING: Releasors acknowledge and assume all risks and dangers
              associated with the Event or any other promotions or activities
              before, during or after the Event (“
              <strong>Event Activities</strong>”), acknowledge that attendance
              is voluntary, and further agree that Ticket Hoss, Operator, Venue,
              promoters, participants, racing associations, sanctioning
              organizations, or any subdivision thereof, track owners,
              officials, competition vehicle owners, drivers, pit crews, rescue
              personnel, sponsors, advertisers, owners and lessees of the Venue,
              premises and event inspectors, and all related entities and
              affiliates, together with their respective owners, officers,
              directors, employees, agents, licensees, sponsors, and vendors
              (collectively, the “<strong>Released Parties</strong>”), will not
              be responsible for any personal injury (including death), illness,
              property damage, or other loss suffered in connection with the
              Event Activities, including the negligence of any of the Released
              Parties or any other incidents caused by the Event Activities or
              crowds of people. By attending the Event Activities, Releasors are
              deemed to have given a full release of liability to the Released
              Parties to the fullest extent permitted by law from any and all
              claims which Releasors have or may have for causes of action
              arising out of attendance at, observation of and/or participation
              in the Event Activities.
            </p>
            <p class="paragragh">
              ILLNESS: Releasors acknowledge and understand that the Released
              Parties, and in particular the Venue and the Event Activities
              organizers, abide by all applicable federal, state and local
              guidelines and orders relating to the Venue and/or Event
              Activities, including without limitation preventative measures put
              in place to reduce the spread of COVID-19; however, the Released
              Parties cannot and will not guarantee that any persons present or
              in attendance at the Venue or Event Activities will not become
              exposed to or infected with COVID-19 or any other communicable
              disease or illness, some of which may carry a risk of suffering
              severe personal injury and/or death, despite reasonable efforts to
              mitigate such dangers. In addition to the Ticket Release and
              Waiver of Liability, Assumption of Risk and Indemnity Agreement
              stated above, Releasors hereby release, waive, discharge and
              covenant not to sue the Released Parties from all liability to the
              Releasors, including Releasors’ personal representatives, assigns,
              heirs, and next of kin, for any and all loss or damage, and any
              claim or demands therefor, on account of Releasors contraction of
              any communicable illness or disease, including COVID-19, arising
              out of or in any way related to the Venue, the Event Activities
              and/or Releasors’ attendance at the Event Activities, whether
              caused by the negligence of the Released Parties or otherwise.
            </p>
            <h3 class="centered-title">REVOCABLE TICKET LICENSE</h3>
            <p class="paragragh">
              HOLDER’S CONDUCT. The revokable license granted by any Ticket will
              be terminated, and ejection, detention or arrest may result for
              any Releasor violating any law or any Operator or Venue policy,
              including entering or throwing anything onto the racing surface,
              offensive language or disruptive behavior. Releasors consent to
              health and security searches and/or screening and waive all
              related claims, and also consent to health-related conditions for
              attendance, including any requirements pertaining to the wearing
              of masks and/or social distancing. The resale of any Ticket in
              violation of applicable law, regulation or the policies of the
              Operator or Venue, and/or their designated agents will invalidate
              the license granted by such Ticket and Releasors assume all risks
              associated with the purchase of any Ticket from unauthorized
              sources.
            </p>
            <p class="paragragh">
              Releasors shall at all times abide by any and all rules,
              regulations, restrictions, guidelines and/or policies of any of
              the Released Parties while at the Venue, including any area of the
              Venue requiring special authorization, credentials, or permission
              to enter or any area to which admission by the general public is
              restricted or prohibited (the “<strong>Restricted Areas</strong>
              ”). The Releasors further hereby agree to reimburse the Released
              Parties for any and all reasonable expenses incurred by the
              Released Parties as a result of any damage caused by Releasors
              while at the Venue and/or in Restricted Areas.
            </p>
            <p class="paragragh">
              REJECTION AND EJECTION. Those found to be in violation of this
              Code of Conduct may be subject to ejection without refund.
              Violations may result in the loss of ticket renewal privileges to
              future events and/or arrest.
            </p>
            <p class="paragragh">
              MINOR INVITEES. Should Holder bring Minor(s) to the Event
              Activities (and such Minor(s) is permitted to enter the Event
              Activities), Holder hereby acknowledges and agrees that the
              Released Parties shall not be responsible for the care and safety
              of Minor(s) at the Event. Holder assumes the responsibility of
              watching and caring for the safety of such Minor(s) and guarding
              such Minor(s) against hazards and risks at all times while
              attending the Event Activities.
            </p>
            <p class="paragragh">
              If Holder does not wish to or is not authorized to grant such
              rights, releases and waivers on behalf of a Minor(s) as contained
              in this Section 3 of these Terms, Holder should immediately leave
              the Venue with the Minor(s).
            </p>
            <p class="paragragh">
              Tickets shall not be used for advertising, promotion (including
              contests), or for other trade purposes. Each Ticket is only good
              for the particular Event indicated and no part of the purchase
              price will be refunded by the non-use of the Ticket. All Event
              Activities are subject to modification and cancellation. The
              Released Parties are not responsible for lost, stolen or
              duplicated Tickets.
            </p>
            <p class="paragragh">
              ADVERTISING AND PROMOTION RELEASE. The Released Parties, their
              duly authorized agents and assigns, may use, on a non-exclusive
              basis, unless otherwise provided in a separate written agreement,
              Releasors’ name and likeness, including photographs, audio/visual
              content, images and sounds of Releasors, in any medium (including
              print, broadcasts by and through television, cable television,
              radio, pay-per-view, closed circuit television, satellite signal,
              digital signal, film productions, audiotape productions,
              transmissions over the Internet, public and private online
              services authorized by the applicable Released Parties, and sales
              and other commercial projects, and the like) for promoting,
              advertising, or marketing the Venue, the Event Activities, the
              Released Parties, or related advertising, promotion, telecast or
              programming, and Releasors do hereby relinquish to the Released
              Parties in perpetuity all rights thereto for such purpose.
            </p>
            <p class="paragragh">
              BROADCAST AND OTHER RIGHTS. Releasors acknowledge that the
              Released Parties, as applicable, exclusively and in perpetuity own
              any and all rights to broadcast, transmit, film, tape, capture,
              overhear, photograph, collect or record by any means, process,
              medium or device (including to television, cable television,
              radio, pay-per-view, closed circuit television, satellite signal,
              digital signal, film productions, audiotape productions,
              transmissions over the Internet, public and private online
              services authorized by the applicable Released Parties, sales and
              other commercial projects, and the like), whether or not currently
              in existence, all images, sounds and data arising from or during
              the Event Activities and that the Released Parties, as applicable,
              are and shall be the owners of any and all intellectual property
              rights (including, but not limited to, patents, copyrights,
              trademarks, design rights, and other proprietary rights) worldwide
              in and to these works and in and to any other works, copyrightable
              or otherwise created from the images, sounds and data arising
              from, during or in connection with the Event Activities. In
              addition to the extent not already owned by the applicable
              Released Parties, Releasors hereby assign to the Released Parties
              exclusively and in perpetuity any and all rights set forth above.
              Releasors represent and warrant that as of the Releasors’
              acceptance of these Terms, Releasors have not granted to any third
              party the rights described herein. Releasors agree to take all
              steps reasonably necessary, and all steps requested by the
              Released Parties, to protect, perfect or effectuate the Released
              Parties’ ownership or other interest in these rights. Releasors
              agree not to take any action, nor cause others to take any action,
              nor enter into any third party agreement which would contravene,
              diminish, encroach or infringe upon these rights of the Released
              Parties. Releasors shall not transmit or aid in transmitting any
              images, videos, audio, livestreams or other accounts or
              descriptions about the Event Activities in any media. Releasors
              consent to and waive compensation for use of their images or other
              personality rights in connection with the Event Activities.
            </p>
            <p class="paragragh">
              3.2 Additional Releases, Waivers, and Other Terms. When purchasing
              a Ticket for a particular Event or otherwise using the App to
              register to attend or participate in a particular Event, you may
              also be required to agree to additional releases, waivers, or
              other terms for that Venue or Event, each of which are, when
              agreed to by you (through purchase of a Ticket that references
              those terms or otherwise indicating your acceptance to those terms
              via the App) hereby incorporated into these Terms.
            </p>
            <h3 class="sub-title">4. ACCOUNTS AND REGISTRATION</h3>
            <p class="paragragh">
              To access most features of the Service, you must register for an
              account. When you register for an account, you may be required to
              provide us with some information about yourself, such as your
              name, date of birth, address, email address, or other contact
              information, (or such other form of identification as we may
              require). You agree that the information you provide to us is
              accurate and that you will keep it accurate and up-to-date at all
              times. When you register, you will be asked to provide a
              verification code that was sent to your mobile device. You are
              solely responsible for maintaining the confidentiality of your
              account, and you accept responsibility for all activities that
              occur under your account. If you believe that your account is no
              longer secure, then you must immediately notify us at
              <a
                style={{ color: "#fa4616", textDecoration: "underline" }}
                href="mailto:support@pitpay.com"
              >
                support@tickethoss.com.
              </a>
            </p>
            <h3 class="sub-title">5. FEES</h3>
            <p class="paragragh">
              5.1 <span>General Terms.</span> Certain features of the Service
              may require you to pay fees. These fees are solely in
              consideration of the purchase of Tickets and Ticket Hoss’s
              provision of the Service, including the ability to agree to
              Agreements via the App. Your attendance at the Events, Event
              Activities, or use of the Venues is not conditioned on your use of
              the Service or payment of fees to Ticket Hoss. If you wish to
              attend an Event or use the Venues without using the App, please
              contact the Operator directly for an alternative form of
              admission. Transactions for Events held in the United States are
              in U.S. dollars, and likewise, Events held In Canada are in CAD.
              Before you pay any fees, you will have an opportunity to review
              and accept the fees that you will be charged. All fees are
              non-refundable.
            </p>
            <p class="paragragh">
              5.2 <span>Price</span>. Ticket Hoss reserves the right to
              determine pricing for the Service. Ticket Hoss will make
              reasonable efforts to keep pricing information published on the
              website up to date. Ticket Hoss may change the fees for any
              feature of the Service, including changes to add additional fees
              or charges, if Ticket Hoss gives you advance notice of changes
              before they apply. Ticket Hoss, at its sole discretion, may make
              promotional offers with different features and different pricing
              to any of Ticket Hoss’s customers. These promotional offers,
              unless made to you, will not apply to your offer or these Terms.
            </p>
            <p class="paragragh">
              5.3 <span>Authorization</span>. You authorize Ticket Hoss and its
              payment processors to charge all sums for the orders that you make
              through the Service as described in these Terms or otherwise
              published by Ticket Hoss, including all applicable taxes, to the
              payment method specified in your account. If you pay any fees with
              a credit card, Ticket Hoss or its payment processors may seek
              pre-authorization of your credit card account prior to your
              purchase to verify that the credit card is valid and has the
              necessary funds or credit available.
            </p>
            <h3 class="sub-title">6. LICENSES</h3>
            <p class="paragragh">
              6.1 <span>Limited License</span>. Subject to your complete and
              ongoing compliance with these Terms, Ticket Hoss grants you,
              solely for your personal use, a limited, non-exclusive,
              non-transferable, non-sublicensable, revocable license to: (a)
              install and use one object code copy of the App on a mobile device
              that you own or control; and (b) access and use the Service.
            </p>
            <p class="paragragh">
              6.2 <span>License Restrictions.</span> Except and solely to the
              extent such a restriction is impermissible under applicable law,
              you may not: (a) reproduce, distribute, resell, publicly display,
              or publicly perform the Service; (b) make modifications to the
              Service; or (c) interfere with or circumvent any feature of the
              Service, including any security or access control mechanism. If
              you are prohibited under applicable law from using the Service,
              you may not use it.
            </p>
            <p class="paragragh">
              6.3 <span>Feedback</span>. If you choose to provide input and
              suggestions regarding problems with or proposed modifications or
              improvements to the Service (“Feedback”), then you hereby grant
              Ticket Hoss an unrestricted, perpetual, irrevocable,
              non-exclusive, fully-paid, royalty-free right to exploit the
              Feedback in any manner and for any purpose, including to improve
              the Service and create other products and services.
            </p>
            <h3 class="sub-title">7. OWNERSHIP; PROPRIETARY RIGHTS</h3>
            <p class="paragragh">
              The Service is owned and operated by Ticket Hoss and its licensors
              and other third-party suppliers. The visual interfaces, graphics,
              design, compilation, information, data, computer code (including
              source code or object code), products, software, services, and all
              other elements of the Service (“<strong>Materials</strong>”)
              provided by Ticket Hoss are protected by intellectual property and
              other laws. All Materials included in the Service are the property
              of Ticket Hoss or its third-party licensors. Except as expressly
              authorized by Ticket Hoss, you may not make use of the Materials.
              Ticket Hoss reserves all rights to the Materials not granted
              expressly in these Terms.
            </p>
            <h3 class="sub-title">8. THIRD PARTY TERMS</h3>
            <p class="paragragh">
              8.1 <span>Third Party Services and Linked Websites</span>. Ticket
              Hoss may provide tools through the Service that enable you to
              export information, including User Content (defined below), to
              third party services, including through features that allow you to
              link your account on Ticket Hoss with an account on the third
              party service, such as Twitter or Facebook, or through our
              implementation of third party buttons (such as “like” or “share”
              buttons). By using these tools, you agree that Ticket Hoss may
              transfer that information to the applicable third party service.
              Third party services are not under Ticket Hoss’s control, and, to
              the fullest extent permitted by law, Ticket Hoss is not
              responsible for any third party service’s use of your exported
              information. The Service may also contain links to third party
              websites. Linked websites are not under Ticket Hoss’s control, and
              Ticket Hoss is not responsible for their content.
            </p>
            <p class="paragragh">
              8.2 <span>Third Party Software</span>. The Service may include or
              incorporate third party software components that are generally
              available free of charge under licenses granting recipients broad
              rights to copy, modify, and distribute those components (“
              <strong>Third Party Components</strong>”). Although the Service is
              provided to you subject to these Terms, nothing in these Terms
              prevents, restricts, or is intended to prevent or restrict you
              from obtaining Third Party Components under the applicable third
              party licenses or to limit your use of Third Party Components
              under those third party licenses.
            </p>
            <h3 class="sub-title">9. USER CONTENT</h3>
            <p class="paragragh">
              9.1 <span>User Content Generally</span>. Certain features of the
              Service may permit users to upload content to the Service,
              including photos, video, images, folders, data, text, and other
              types of works (“<strong>User Content</strong>”) and to publish
              User Content on the Service. You retain any copyright and other
              proprietary rights that you may hold in the User Content that you
              post to the Service.
            </p>
            <p class="paragragh">
              9.2 <span>Limited License Grant to Ticket Hoss</span>. By
              providing User Content to or via the Service, you grant Ticket
              Hoss an irrevocable, perpetual, worldwide, non-exclusive,
              royalty-free, fully paid right and license (with the right to
              sublicense) to host, store, transfer, display, perform, reproduce,
              modify for the purpose of formatting for display, and distribute
              your User Content, in whole or in part, in any media formats and
              through any media channels now known or hereafter developed.x
            </p>
            <p class="paragragh">
              9.3 <span>User Content Representations and Warranties</span>.
              Ticket Hoss disclaims any and all liability in connection with
              User Content. You are solely responsible for your User Content and
              the consequences of providing User Content via the Service. By
              providing User Content via the Service, you affirm, represent, and
              warrant that:
            </p>
            <Indented>
              <p class="paragragh">
                a. <Tab>you</Tab> are the creator and owner of the User Content,
                or have the necessary licenses, rights, consents, and
                permissions to authorize Ticket Hoss and users of the Service to
                use and distribute your User Content as necessary to exercise
                the licenses granted by you in this Section, in the manner
                contemplated by Ticket Hoss, the Service, and these Terms;
              </p>
              <p class="paragragh">
                b. <Tab>your</Tab> User Content, and the use of your User
                Content as contemplated by these Terms, does not and will not:
                (i) infringe, violate, or misappropriate any third party right,
                including any copyright, trademark, patent, trade secret, moral
                right, privacy right, right of publicity, or any other
                intellectual property or proprietary right; (ii) slander,
                defame, libel, or invade the right of privacy, publicity or
                other property rights of any other person; or (iii) cause Ticket
                Hoss to violate any law or regulation; and
              </p>
              <p class="paragragh">
                c. <Tab>your</Tab> User Content could not be deemed by a
                reasonable person to be objectionable, profane, indecent,
                pornographic, harassing, threatening, embarrassing, hateful, or
                otherwise inappropriate.
              </p>
            </Indented>
            <p class="paragragh">
              9.4 <span>User Content Disclaimer</span>. We are under no
              obligation to edit or control User Content that you or other users
              post or publish and will not be in any way responsible or liable
              for User Content. Ticket Hoss may, however, at any time and
              without prior notice, screen, remove, edit, or block any User
              Content that in our sole judgment violates these Terms or is
              otherwise objectionable. You understand that when using the
              Service you will be exposed to User Content from a variety of
              sources and acknowledge that User Content may be inaccurate,
              offensive, indecent, or objectionable. You agree to waive, and do
              waive, any legal or equitable right or remedy you have or may have
              against Ticket Hoss with respect to User Content. If notified by a
              user or content owner that User Content allegedly does not conform
              to these Terms, we may investigate the allegation and determine in
              our sole discretion whether to remove the User Content, which we
              reserve the right to do at any time and without notice. For
              clarity, Ticket Hoss does not permit copyright-infringing
              activities on the Service.
            </p>
            <p class="paragragh">
              9.5 <span>Monitoring Content</span>. Ticket Hoss does not control
              and does not have any obligation to monitor: (a) User Content; (b)
              any content made available by third parties; or (c) the use of the
              Service by its users. However, and notwithstanding the foregoing,
              you acknowledge and agree that Ticket Hoss reserves the right to,
              and may from time to time, monitor any and all information
              transmitted or received through the Service for operational and
              other purposes. If at any time Ticket Hoss chooses to monitor the
              content, Ticket Hoss still assumes no responsibility or liability
              for content, or any loss or damage incurred as a result of the use
              of content. During monitoring, information may be examined,
              recorded, copied, and used in accordance with our Privacy Policy.
            </p>
            <h3 class="sub-title">10. COMMUNICATIONS.</h3>
            <p class="paragragh">
              10.1 <span>Text Messaging</span>. Ticket Hoss and those acting on
              our behalf may send you text (SMS) messages at the phone number
              you provide us, including to verify your account upon
              registration. When you provide your phone number, you agree to
              receive messages from us. These messages may include operational
              messages about your use of the Service, account verification, and
              instructions. You may update the phone number associated with your
              account at any time through the App or by sending an email to
              <a
                style={{ color: "#fa4616", textDecoration: "underline" }}
                href="mailto:support@pitpay.com"
              >
                support@tickethoss.com.
              </a>{" "}
              Operational text messages are essential to the Service. If you do
              not wish to receive operational text messages from us, do not use
              the Service. Text messages may be sent using an automatic
              telephone dialing system. Your agreement to receive text messages
              is not a condition of any purchase or use of the Service. Standard
              data and message rates may apply whenever you send or receive such
              messages, as specified by your carrier.
            </p>
            <p class="paragragh">
              10.2 <span>Push Notifications</span>. When you install the App on
              your mobile device, you agree to receive push notifications, which
              are messages an app sends you on your mobile device when the App
              is not on. You can turn off notifications by visiting your mobile
              device’s “settings” page.
            </p>
            <p class="paragragh">
              10.3 <span>Email</span>. We may send you emails concerning our
              products and services, as well as those of third parties. You may
              opt out of promotional emails by following the unsubscribe
              instructions in the promotional email itself.
            </p>
            <h3 class="sub-title">11. PROHIBITED CONDUCT</h3>
            <p class="paragragh">11.1 BY USING THE SERVICE YOU AGREE NOT TO:</p>
            <Indented>
              <p class="paragragh">
                a. <Tab>use</Tab> the Service for any illegal purpose or in
                violation of any local, state, national, or international law;
              </p>
              <p class="paragragh">
                b. <Tab>use</Tab> the Service to purchase a Ticket for an Event
                from which you have been prohibited from attending;
              </p>
              <p class="paragragh">
                c. <Tab>perform</Tab> any fraudulent activity including
                impersonating any person or entity, claiming a false
                affiliation, accessing any other Service account without
                permission, or falsifying your age or date of birth;
              </p>
              <p class="paragragh">
                d. <Tab>violate</Tab>, or encourage others to violate, any right
                of a third party, including by infringing or misappropriating
                any third-party intellectual property right;
              </p>
              <p class="paragragh">
                e. <tab>interfere</tab> with security-related features of the
                Service, including by: (i) disabling or circumventing features
                that prevent or limit use or copying of any content; or (ii)
                reverse engineering or otherwise attempting to discover the
                source code of any portion of the Service except to the extent
                that the activity is expressly permitted by applicable law;
              </p>
              <p class="paragragh">
                f. <Tab>interfere</Tab> with the operation of the Service or any
                user’s enjoyment of the Service, including by uploading or
                otherwise disseminating any virus, adware, spyware, worm, or
                other malicious code or interfering with or disrupting any
                network, equipment, or server connected to or used to provide
                the Service;
              </p>
              <p class="paragragh">
                g. <Tab>sell</Tab> or otherwise transfer the access granted
                under these Terms or any Materials or any right or ability to
                view, access, or use any Materials; or
              </p>
              <p class="paragragh">
                h. <Tab>attempt</Tab> to do any of the acts described in this
                Section 11 or assist or permit any person in engaging in any of
                the acts described in this Section 11.
              </p>
            </Indented>
            <h3 class="sub-title">12. Digital Millennium Copyright Act</h3>
            <p class="paragragh">
              12.1{" "}
              <span>
                <strong>DMCA Notification.</strong>
              </span>{" "}
              We comply with the provisions of the Digital Millennium Copyright
              Act applicable to Internet service providers (17 U.S.C. §512, as
              amended). If you have an intellectual property rights-related
              complaint about material posted on the Service, you may contact
              our Designated Agent at the following address:
            </p>
            <Address>
              <div>
                <p class="paragragh">Pit Pay Inc. dba Ticket Hoss</p>
                <p class="paragragh">
                  ATTN: Legal Department (Copyright Notification)
                </p>
                <p class="paragragh">
                  7168 Weddington Rd., Suite 148 Concord, North Carolina 28027
                </p>
                <p class="paragragh">Email: copyright@pitpay.com</p>
              </div>
            </Address>
            <p class="paragragh">
              Any notice alleging that materials hosted by or distributed
              through the Service infringe intellectual property rights must
              include the following information:
            </p>
            <Indented>
              <p class="paragragh">
                a. <Tab>an</Tab> electronic or physical signature of the person
                authorized to act on behalf of the owner of the copyright or
                other right being infringed;
              </p>
              <p class="paragragh">
                b. <Tab>a</Tab> description of the copyrighted work or other
                intellectual property that you claim has been infringed;
              </p>
              <p class="paragragh">
                c. <Tab>a</Tab> description of the material that you claim is
                infringing and where it is located on the Service;
              </p>
              <p class="paragragh">
                d. <Tab>your</Tab> address, telephone number, and email address;
              </p>
              <p class="paragragh">
                e. <Tab>a</Tab> statement by you that you have a good faith
                belief that the use of the materials on the Service of which you
                are complaining is not authorized by the copyright owner, its
                agent, or the law; and
              </p>
              <p class="paragragh">
                f. <Tab>a</Tab> statement by you that the above information in
                your notice is accurate and that, under penalty of perjury, you
                are the copyright or intellectual property owner or authorized
                to act on the copyright or intellectual property owner’s behalf.
              </p>
            </Indented>
            <p class="paragragh">
              12.2{" "}
              <span>
                <strong>Repeat Infringers</strong>
              </span>
              . Ticket Hoss will promptly terminate the accounts of users that
              are determined by Pit Pay to be repeat infringers.
            </p>
            <h3 class="sub-title">13. MODIFICATION OF THESE TERMS</h3>
            <p class="paragragh">
              We reserve the right to change these Terms on a going-forward
              basis at any time. Please check these Terms periodically for
              changes. If a change to these Terms materially modifies your
              rights or obligations, we may require that you accept the modified
              Terms in order to continue to use the Service. Material
              modifications are effective upon your acceptance of the modified
              Terms. Immaterial modifications are effective upon publication.
              Except as expressly permitted in this Section 13, these Terms may
              be amended only by a written agreement signed by authorized
              representatives of the parties to these Terms. Disputes arising
              under these Terms will be resolved in accordance with the version
              of these Terms that was in effect at the time the dispute arose
              except that if the dispute is in connection with a Ticket purchase
              or otherwise related to an Event for which you have purchased a
              Ticket through the App, then, unless the change was as a result of
              a change in applicable legal requirements, the version of the
              Terms that were in effect at the time you purchased the Ticket
              will apply to all disputes arising in connection with such Ticket
              or Event.
            </p>
            <h3 class="sub-title">
              14. TERM, TERMINATION AND MODIFICATION OF THE SERVICE
            </h3>
            <p class="paragragh">
              14.1 <span>Term</span>. These Terms are effective beginning when
              you accept the Terms or first download, install, access, or use
              the Service, and ending when terminated as described in Section
              14.2.
            </p>
            <p class="paragragh">
              14.2 <span>Termination.</span> If you violate any provision of
              these Terms, your authorization to access the Service and these
              Terms automatically terminate. In addition, Ticket Hoss may, at
              its sole discretion, terminate these Terms or your account on the
              Service, or suspend or terminate your access to the Service, at
              any time for any reason or no reason, with or without notice. You
              may terminate your account and these Terms at any time by
              contacting customer service at support@tickethoss.com.
            </p>
            <p class="paragragh">
              14.3 <span>Effect of Termination</span>. Upon termination of these
              Terms: (a) your license rights will terminate and you must
              immediately cease all use of the Service; (b) you will no longer
              be authorized to access your account or the Service; (c) you must
              pay Ticket Hoss any unpaid amount that was due prior to
              termination; and (d) all payment obligations accrued prior to
              termination and Sections 3, 6.3, 7, 14.3, 15, 16, 17, 18, and 19
              will survive.
            </p>
            <p class="paragragh">
              14.4 <span>Modification of the Service</span>. Ticket Hoss
              reserves the right to modify or discontinue the Service at any
              time (including by limiting or discontinuing certain features of
              the Service), temporarily or permanently, without notice to you.
              Ticket Hoss will have no liability for any change to the Service
              or any suspension or termination of your access to or use of the
              Service.
            </p>
            <h3 class="sub-title">15. INDEMNITY</h3>
            <p class="paragragh">
              To the fullest extent permitted by law, you are responsible for
              your use of the Service, and you will defend and indemnify Ticket
              Hoss and its owners, officers, directors, employees, consultants,
              affiliates, subsidiaries and agents (together, the “
              <strong>Ticket Hoss Entities</strong>”) from and against every
              claim brought by a third party, and any related liability, damage,
              loss, and expense, including reasonable attorneys’ fees and costs,
              arising out of or connected with: (a) your unauthorized use of, or
              misuse of, the Service; (b) your violation of any portion of these
              Terms, any representation, warranty, or agreement referenced in
              these Terms, or any applicable law or regulation; (c) your
              violation of any third party right, including any intellectual
              property right or publicity, confidentiality, other property, or
              privacy right; or (d) any dispute or issue between you and any
              third party, including any Operator. We reserve the right, at our
              own expense, to assume the exclusive defense and control of any
              matter otherwise subject to indemnification by you (without
              limiting your indemnification obligations with respect to that
              matter), and in that case, you agree to cooperate with our defense
              of those claims.
            </p>
            <h3 class="sub-title">16. DISCLAIMERS; NO WARRANTIES</h3>
            <p class="paragragh">
              16.1 THE SERVICE AND ALL MATERIALS AND CONTENT AVAILABLE THROUGH
              THE SERVICE ARE PROVIDED “AS IS” AND ON AN “AS AVAILABLE” BASIS.
              TICKET HOSS DISCLAIMS ALL WARRANTIES OF ANY KIND, WHETHER EXPRESS
              OR IMPLIED, RELATING TO THE SERVICE AND ALL MATERIALS AND CONTENT
              AVAILABLE THROUGH THE SERVICE, INCLUDING: (A) ANY IMPLIED WARRANTY
              OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, QUIET
              ENJOYMENT, OR NON-INFRINGEMENT; AND (B) ANY WARRANTY ARISING OUT
              OF COURSE OF DEALING, USAGE, OR TRADE. TICKET HOSS DOES NOT
              WARRANT THAT THE SERVICE OR ANY PORTION OF THE SERVICE, OR ANY
              MATERIALS OR CONTENT OFFERED THROUGH THE SERVICE, WILL BE
              UNINTERRUPTED, SECURE, OR FREE OF ERRORS, VIRUSES, OR OTHER
              HARMFUL COMPONENTS, AND TICKET HOSS DOES NOT WARRANT THAT ANY OF
              THOSE ISSUES WILL BE CORRECTED.
            </p>
            <p class="paragragh">
              16.2 TICKET HOSS MAKES NO REPRESENTATIONS OR WARRANTIES AS TO THE
              QUALITY, SAFETY, LEGALITY, OF ANY EVENT OR VENUE, OR THE TRUTH OR
              ACCURACY OF ANY INFORMATION PROVIDED BY AN OPERATOR, OR AN
              OPERATOR’S ABILITY TO HOST AN EVENT OR OPERATE A VENUE. TICKET
              HOSS HAS NO RESPONSIBLITIY TO YOU FOR, AND HEREBY DISCLAIMS ALL
              LIABILITY ARISING FROM, THE ACTS OR OMISSIONS OF ANY OPERATOR OR
              THEIR OWNERS, OFFICERS, DIRECTORS, EMPLOYEES, CONSULTANTS,
              AFFILIATES, SUBSIDIARIES AND AGENTS.
            </p>
            <p class="paragragh">
              16.3 NO ADVICE OR INFORMATION, WHETHER ORAL OR WRITTEN, OBTAINED
              BY YOU FROM THE SERVICE OR TICKET HOSS ENTITIES OR ANY MATERIALS
              OR CONTENT AVAILABLE THROUGH THE SERVICE WILL CREATE ANY WARRANTY
              REGARDING ANY OF THE TICKET HOSS ENTITIES OR THE SERVICE THAT IS
              NOT EXPRESSLY STATED IN THESE TERMS. WE ARE NOT RESPONSIBLE FOR
              ANY DAMAGE THAT MAY RESULT FROM THE SERVICE AND YOUR DEALING WITH
              ANY OTHER SERVICE USER. YOU UNDERSTAND AND AGREE THAT YOU USE ANY
              PORTION OF THE SERVICE AT YOUR OWN DISCRETION AND RISK, AND THAT
              WE ARE NOT RESPONSIBLE FOR ANY DAMAGE TO YOUR PROPERTY (INCLUDING
              YOUR COMPUTER SYSTEM OR MOBILE DEVICE USED IN CONNECTION WITH THE
              SERVICE) OR ANY LOSS OF DATA, INCLUDING USER CONTENT.
            </p>
            <p class="paragragh">
              16.4 THE LIMITATIONS, EXCLUSIONS AND DISCLAIMERS IN THIS SECTION
              APPLY TO THE FULLEST EXTENT PERMITTED BY LAW. Ticket Hoss does not
              disclaim any warranty or other right that Ticket Hoss is
              prohibited from disclaiming under applicable law.
            </p>
            <h3 class="sub-title">17. LIMITATION OF LIABILITY</h3>
            <p class="paragragh">
              17.1 TO THE FULLEST EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE
              TICKET HOSS ENTITIES BE LIABLE TO YOU FOR ANY INDIRECT,
              INCIDENTAL, SPECIAL, CONSEQUENTIAL OR PUNITIVE DAMAGES (INCLUDING
              DAMAGES FOR LOSS OF PROFITS, GOODWILL, OR ANY OTHER INTANGIBLE
              LOSS) ARISING OUT OF OR RELATING TO YOUR ACCESS TO OR USE OF, OR
              YOUR INABILITY TO ACCESS OR USE, THE SERVICE OR ANY MATERIALS OR
              CONTENT ON THE SERVICE, WHETHER BASED ON WARRANTY, CONTRACT, TORT
              (INCLUDING NEGLIGENCE), STATUTE, OR ANY OTHER LEGAL THEORY, AND
              WHETHER OR NOT ANY TICKET HOSS ENTITY HAS BEEN INFORMED OF THE
              POSSIBILITY OF DAMAGE.
            </p>
            <p class="paragragh">
              17.2 YOU ACKNOWLEDGE AND AGREE THAT (A) ATTENDING AN EVENT IS
              INHERENTLY RISKY AND MAY INVOLVE DANGEROUS CONDITIONS THAT RESULT
              IN INJURY, SERIOUS BODILY HARM, AND EVEN DEATH AND (B) TICKET HOSS
              IS NOT RESPONSIBLE FOR ANY INJURIES OR FATALITIES THAT MAY OCCUR
              AT ANY VENUE DURING ANY EVENT OR EVENT ACTIVITIES.
            </p>
            <p class="paragragh">
              17.3 EXCEPT AS PROVIDED IN SECTION 18.5 AND TO THE FULLEST EXTENT
              PERMITTED BY LAW, THE AGGREGATE LIABILITY OF THE TICKET HOSS
              ENTITIES TO YOU FOR ALL CLAIMS ARISING OUT OF OR RELATING TO THE
              USE OF OR ANY INABILITY TO USE ANY PORTION OF THE SERVICE OR
              OTHERWISE UNDER THESE TERMS, WHETHER IN CONTRACT, TORT, OR
              OTHERWISE, IS LIMITED TO THE GREATER OF: (A) THE AMOUNT YOU HAVE
              PAID TO TICKET HOSS FOR ACCESS TO AND USE OF THE SERVICE IN THE 12
              MONTHS PRIOR TO THE EVENT OR CIRCUMSTANCE GIVING RISE TO CLAIM; OR
              (B) $100.
            </p>
            <p class="paragragh">
              17.4 EACH PROVISION OF THESE TERMS THAT PROVIDES FOR A LIMITATION
              OF LIABILITY, DISCLAIMER OF WARRANTIES, OR EXCLUSION OF DAMAGES IS
              INTENDED TO AND DOES ALLOCATE THE RISKS BETWEEN THE PARTIES UNDER
              THESE TERMS. THIS ALLOCATION IS AN ESSENTIAL ELEMENT OF THE BASIS
              OF THE BARGAIN BETWEEN THE PARTIES. EACH OF THESE PROVISIONS IS
              SEVERABLE AND INDEPENDENT OF ALL OTHER PROVISIONS OF THESE TERMS.
              THE LIMITATIONS IN THIS SECTION 17 WILL APPLY EVEN IF ANY LIMITED
              REMEDY FAILS OF ITS ESSENTIAL PURPOSE.
            </p>
            <h3 class="sub-title">18. DISPUTE RESOLUTION AND ARBITRATION </h3>
            <p class="paragragh">
              18.1 <span>Generally</span>. In the interest of resolving disputes
              between you and Ticket Hoss in the most expedient and cost
              effective manner, and except as described in Section 18.2 and
              18.3, you and Ticket Hoss agree that every dispute arising in
              connection with these Terms will be resolved by binding
              arbitration. Arbitration is less formal than a lawsuit in court.
              Arbitration uses a neutral arbitrator instead of a judge or jury,
              may allow for more limited discovery than in court, and can be
              subject to very limited review by courts. Arbitrators can award
              the same damages and relief that a court can award. This agreement
              to arbitrate disputes includes all claims arising out of or
              relating to any aspect of these Terms, whether based in contract,
              tort, statute, fraud, misrepresentation, or any other legal
              theory, and regardless of whether a claim arises during or after
              the termination of these Terms. YOU UNDERSTAND AND AGREE THAT, BY
              ENTERING INTO THESE TERMS, YOU AND TICKET HOSS ARE EACH WAIVING
              THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION.
            </p>
            <p class="paragragh">
              18.2 <span>Exceptions</span>. Despite the provisions of Section
              18, nothing in these Terms will be deemed to waive, preclude, or
              otherwise limit the right of either party to: (a) bring an
              individual action in small claims court; (b) pursue an enforcement
              action through the applicable federal, state, or local agency if
              that action is available; (c) seek injunctive relief in a court of
              law in aid of arbitration; or (d) to file suit in a court of law
              to address an intellectual property infringement claim.
            </p>
            <p class="paragragh">
              18.3 <span>Opt-Out</span>. If you do not wish to resolve disputes
              by binding arbitration, you may opt out of the provisions of this
              Section 18 within 30 days after the date that you agree to these
              Terms by sending a letter to Ticket Hoss Inc., Attention: Legal
              Department – Arbitration Opt-Out, 7168 Weddington Rd., Suite 148,
              Concord, North Carolina 28027 that specifies: your full legal
              name, the email address associated with your account on the
              Service, and a statement that you wish to opt out of arbitration
              (“<strong>Opt-Out Notice</strong>”). Once Ticket Hoss receives
              your Opt-Out Notice, this Section 18 will be void and any action
              arising out of these Terms will be resolved as set forth in
              Section 19.3. The remaining provisions of these Terms will not be
              affected by your Opt-Out Notice.
            </p>
            <p class="paragragh">
              18.4 <span>Arbitrator</span>. Any arbitration between you and
              Ticket Hoss will be settled under the Federal Arbitration Act and
              administered by the American Arbitration Association (“
              <strong>AAA</strong>”) under its Consumer Arbitration Rules
              (collectively, “<strong>AAA Rules</strong>”) as modified by these
              Terms. The AAA Rules and filing forms are available online at{" "}
              <a
                style={{ color: "#fa4616", textDecoration: "underline" }}
                href="www.adr.org"
              >
                www.adr.org
              </a>
              , by calling the AAA at 1-800-778-7879, or by contacting Ticket
              Hoss. The arbitrator has exclusive authority to resolve any
              dispute relating to the interpretation, applicability, or
              enforceability of this binding arbitration agreement.
            </p>
            <p class="paragragh">
              18.5 <span>Notice of Arbitration; Process</span>. A party who
              intends to seek arbitration must first send a written notice of
              the dispute to the other party by certified U.S. Mail or by
              Federal Express (signature required) or, only if that other party
              has not provided a current physical address, then by electronic
              mail (“<strong>Notice of Arbitration</strong>”). Ticket Hoss’s
              address for Notice is: Pit Pay dba Ticket Hoss Inc., 7168
              Weddington Rd., Suite 148, Concord, North Carolina 28027. The
              Notice of Arbitration must: (a) describe the nature and basis of
              the claim or dispute; and (b) set forth the specific relief sought
              (“<strong>Demand</strong>”). The parties will make good faith
              efforts to resolve the claim directly, but if the parties do not
              reach an agreement to do so within 30 days after the Notice of
              Arbitration is received, you or Ticket Hoss may commence an
              arbitration proceeding. All arbitration proceedings between the
              parties will be confidential unless otherwise agreed by the
              parties in writing. During the arbitration, the amount of any
              settlement offer made by you or Ticket Hoss must not be disclosed
              to the arbitrator until after the arbitrator makes a final
              decision and award, if any. If the arbitrator awards you an amount
              higher than the last written settlement amount offered by Ticket
              Hoss in settlement of the dispute prior to the award, Ticket Hoss
              will pay to you the higher of: (i) the amount awarded by the
              arbitrator; or (ii) $10,000.
            </p>
            <p class="paragragh">
              18.6 <span>Fees</span>. If you commence arbitration in accordance
              with these Terms, Ticket Hoss will reimburse you for your payment
              of the filing fee, unless your claim is for more than $10,000, in
              which case the payment of any fees will be decided by the AAA
              Rules. Any arbitration hearing will take place at a location to be
              agreed upon in Mecklenburg County, North Carolina, but if the
              claim is for $10,000 or less, you may choose whether the
              arbitration will be conducted: (a) solely on the basis of
              documents submitted to the arbitrator; (b) through a
              non-appearance based telephone hearing; or (c) by an in-person
              hearing as established by the AAA Rules in the county (or parish)
              of your billing address. If the arbitrator finds that either the
              substance of your claim or the relief sought in the Demand is
              frivolous or brought for an improper purpose (as measured by the
              standards set forth in Federal Rule of Civil Procedure 11(b)),
              then the payment of all fees will be governed by the AAA Rules. In
              that case, you agree to reimburse Ticket Hoss for all monies
              previously disbursed by it that are otherwise your obligation to
              pay under the AAA Rules. Regardless of the manner in which the
              arbitration is conducted, the arbitrator must issue a reasoned
              written decision sufficient to explain the essential findings and
              conclusions on which the decision and award, if any, are based.
              The arbitrator may make rulings and resolve disputes as to the
              payment and reimbursement of fees or expenses at any time during
              the proceeding and upon request from either party made within 14
              days of the arbitrator’s ruling on the merits.
            </p>
            <p class="paragragh">
              18.7 <span>No Class Actions</span>. YOU AND TICKET HOSS AGREE THAT
              EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN YOUR OR ITS
              INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY
              PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both
              you and Ticket Hoss agree otherwise, the arbitrator may not
              consolidate more than one person’s claims and may not otherwise
              preside over any form of a representative or class proceeding.
            </p>
            <p class="paragragh">
              18.8 <span>Modifications to this Arbitration Provision</span>. If
              Ticket Hoss makes any future change to this arbitration provision,
              other than a change to Ticket Hoss’s address for Notice of
              Arbitration, you may reject the change by sending us written
              notice within 30 days of the change to Ticket Hoss’s address for
              Notice of Arbitration, in which case your account with Ticket Hoss
              will be immediately terminated and this arbitration provision, as
              in effect immediately prior to the changes you rejected, will
              survive.
            </p>
            <p class="paragragh">
              18.9 <span>Enforceability</span>. If Section 18.7 or the entirety
              of this Section 18 is found to be unenforceable, or if Ticket Hoss
              receives an Opt-Out Notice from you, then the entirety of this
              Section 18 will be null and void and, in that case, the exclusive
              jurisdiction and venue described in Section 19.3 will govern any
              action arising out of or related to these Terms.
            </p>
            <h3 class="sub-title">19. MISCELLANEOUS</h3>
            <p class="paragragh">
              19.1 <span>General Terms</span>. These Terms, together with the
              Privacy Policy and any other agreements expressly incorporated by
              reference into these Terms, are the entire and exclusive
              understanding and agreement between you and Ticket Hoss regarding
              your use of the Service. You may not assign or transfer these
              Terms or your rights under these Terms, in whole or in part, by
              operation of law or otherwise, without our prior written consent.
              We may assign these Terms at any time without notice or consent.
              The failure to require performance of any provision will not
              affect our right to require performance at any other time after
              that, nor will a waiver by us of any breach or default of these
              Terms, or any provision of these Terms, be a waiver of any
              subsequent breach or default or a waiver of the provision itself.
              Use of section headers in these Terms is for convenience only and
              will not have any impact on the interpretation of any provision.
              Throughout these Terms the use of the word “including” means
              “including but not limited to”. If any part of these Terms is held
              to be invalid or unenforceable, the unenforceable part will be
              given effect to the greatest extent possible, and the remaining
              parts will remain in full force and effect.
            </p>
            <p class="paragragh">
              19.2 <span>Third Party Beneficiaries</span>. You and Ticket Hoss
              acknowledge and agree that all Released Parties (excluding Ticket
              Hoss) are third party beneficiaries of this Agreement. In addition
              to Ticket Hoss’ rights therein, the provisions contained in
              Section 3 are made expressly for the benefit of the Released
              Parties and are enforceable by the Released Parties.
            </p>
            <p class="paragragh">
              19.3 <span>Governing Law</span>. These Terms are governed by the
              laws of the State of North Carolina without regard to conflict of
              law principles. You and Ticket Hoss submit to the personal and
              exclusive jurisdiction of the state courts and federal courts
              located within Mecklenburg County, North Carolina for resolution
              of any lawsuit or court proceeding permitted under these Terms. We
              operate the Service from our offices in North Carolina, and we
              make no representation that Materials included in the Service are
              appropriate or available for use in other locations.
            </p>
            <p class="paragragh">
              19.4 <span>Privacy Policy</span>. Please read the Ticket Hoss
              Privacy Policy www.tickethoss.com/Privacy carefully for
              information relating to our collection, use, storage, disclosure
              of your personal information. The Ticket Hoss Privacy Policy is
              incorporated by this reference into, and made a part of, these
              Terms.
            </p>
            <p class="paragragh">
              19.5 <span>Additional Terms</span>. Your use of the Service is
              subject to all additional terms, policies, rules, or guidelines
              applicable to the Service or certain features of the Service that
              we may post on or link to from any portion of the Service
              (together with all Agreements, the “
              <strong>Additional Terms</strong>”). All Additional Terms are
              incorporated by this reference into, and made a part of, these
              Terms.
            </p>
            <p class="paragragh">
              19.6 <span>Consent to Electronic Communications</span>. By using
              the Service, you consent to receiving certain electronic
              communications from us as further described in our Privacy Policy.
              Please read our Privacy Policy to learn more about our electronic
              communications practices. You agree that any notices, agreements,
              disclosures, or other communications that we send to you
              electronically will satisfy any legal communication requirements,
              including that those communications be in writing.
            </p>
            <p class="paragragh">
              19.7 <span>Contact Information</span>. The Service is offered by
              Ticket Hoss Inc., located at 7168 Weddington Rd., Suite 148,
              Concord, North Carolina 28027. You may contact us by sending
              correspondence to that address or by emailing us at 
              <a
                style={{ color: "#fa4616", textDecoration: "underline" }}
                href="mailto:support@pitpay.com"
              >
                support@tickethoss.com.
              </a>
              .
            </p>
            <p class="paragragh">
              19.8 <span>Notice to California Residents</span>. If you are a
              California resident, under California Civil Code Section 1789.3,
              you may contact the Complaint Assistance Unit of the Division of
              Consumer Services of the California Department of Consumer Affairs
              in writing at 1625 N. Market Blvd., Suite S-202, Sacramento,
              California 95834, or by telephone at (800) 952-5210 in order to
              resolve a complaint regarding the Service or to receive further
              information regarding use of the Service.
            </p>
            <p class="paragragh">
              19.9 <span>No Support</span>. We are under no obligation to
              provide support for the Service. In instances where we may offer
              support, the support will be subject to published policies.
            </p>
            <p class="paragragh">
              19.10 <span>International Use</span>. The Service is intended for
              visitors located within the United States or Canada. We make no
              representation that the Service is appropriate or available for
              use outside of the United States or Canada. Access to the Service
              from countries or territories or by individuals where such access
              is illegal is prohibited.
            </p>
            <h3 class="sub-title">20. NOTICE REGARDING APPLE</h3>
            <p class="paragragh" style={{ marginBottom: 80 }}>
              This Section 20 only applies to the extent you are using our
              mobile application on an iOS device. You acknowledge that these
              Terms are between you and Ticket Hoss only, not with Apple Inc. (“
              <strong>Apple</strong>”), and Apple is not responsible for the
              Service or the content thereof. Apple has no obligation to furnish
              any maintenance and support services with respect to the Service.
              If the Service fails to conform to any applicable warranty, you
              may notify Apple and Apple will refund any applicable purchase
              price for the mobile application to you; and, to the maximum
              extent permitted by applicable law, Apple has no other warranty
              obligation with respect to the Service. Apple is not responsible
              for addressing any claims by you or any third party relating to
              the Service or your possession and/or use of the Service,
              including: (a) product liability claims; (b) any claim that the
              Service fails to conform to any applicable legal or regulatory
              requirement; or (c) claims arising under consumer protection or
              similar legislation. Apple is not responsible for the
              investigation, defense, settlement, and discharge of any third
              party claim that the Service and/or your possession and use of the
              Service infringe a third party’s intellectual property rights. You
              agree to comply with any applicable third party terms when using
              the Service. Apple and Apple’s subsidiaries are third party
              beneficiaries of these Terms, and upon your acceptance of these
              Terms, Apple will have the right (and will be deemed to have
              accepted the right) to enforce these Terms against you as a third
              party beneficiary of these Terms. You hereby represent and warrant
              that: (i) you are not located in a country that is subject to a
              U.S. Government embargo, or that has been designated by the U.S.
              Government as a “terrorist supporting” country; and (ii) you are
              not listed on any U.S. Government list of prohibited or restricted
              parties.
            </p>
          </Container>
        </Styles>
      </Layout>
    )
  }
}
