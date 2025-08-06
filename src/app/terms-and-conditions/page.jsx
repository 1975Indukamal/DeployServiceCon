/* eslint-disable react/no-unescaped-entities */
import GetMetaData, { generatemetaData } from "@/utils"
const data = GetMetaData("termsAndConditions")
export const metadata = generatemetaData({ ...data,canonical:"/terms-and-conditions" })
export default function Page() {
  return (
    <>
      <div className="container my-12 text-body">
        <h1 className=" text-[58px] font-[500] leading-[80px] mb-[20px]">
          Terms and{" "}
          <span className="text-primary font-[600] font-[Quicksand] leading-[80px]">
            {" "}
            Conditions
          </span>
        </h1>
        <div className="flex md:justify-between flex-col-reverse md:flex-row ">
          <div>
            <h3 className="text-primary  text-[18px]  font-[500] mt-5 sm:text-[17px] font-[Poppins] ">
              Welcome to ServiceConnekt Technologies!{" "}
            </h3>
          </div>
          {/* <div className="flex flex-col mt-10">
            <div>Version</div>
            <div className="">
              <Image
                src={LineImage}
                alt="Description of your image"
                className="w-50 "
              />
            </div>
            <div className="text-secondary">1st Nov 2023</div>
          </div> */}
        </div>

        <div className="w-full">
          <p className="mt-3    ">
            These terms and conditions outline the rules and regulations for the
            use of ServiceConnekt Technologies Pvt. Ltd.'s Website, located at{" "}
            <a className="inline-block text-primary font-medium" href={"https://www.serviceconnekt.com"} target="_blank">ServiceConnekt.com </a>.
          </p>
          <p className="mt-6  ">
            By accessing this website we assume you accept these terms and
            conditions. Do not continue to use ServiceConnekt Technologies if you do
            not agree to take all of the terms and conditions stated on this
            page.
          </p>
          <p className="mt-6  ">
            The following terminology applies to these Terms and Conditions,
            Privacy Statement and Disclaimer Notice and all Agreements:
            "Client", "You" and "Your" refers to you, the person log on this
            website and compliant to the Company's terms and conditions. "The
            Company", "Ourselves", "We", "Our" and "Us", refers to our Company.
            "Party", "Parties", or "Us", refers to both the Client and
            ourselves. All terms refer to the offer, acceptance and
            consideration of payment necessary to undertake the process of our
            assistance to the Client in the most appropriate manner for the
            express purpose of meeting the Client's needs in respect of
            provision of the Company's stated services, in accordance with and
            subject to, prevailing law of af. Any use of the above terminology
            or other words in the singular, plural, capitalization and/or he/she
            or they, are taken as interchangeable and therefore as referring to
            same.
          </p>

          <h4 className="text-primary font-medium mt-6 text-[24px]">Cookies</h4>
          <p className="mt-3  ">
            We employ the use of cookies. By accessing ServiceConnekt Technologies,
            you agreed to use cookies in agreement with the ServiceConnekt
            Technologies Pvt. Ltd.'s Privacy Policy.
          </p>
          <p className="mt-3  ">
            Most interactive websites use cookies to let us retrieve the user's
            details for each visit. Cookies are used by our website to enable
            the functionality of certain areas to make it easier for people
            visiting our website. Some of our affiliate/advertising partners may
            also use cookies.
          </p>
          <h2 className="mt-6 text-[24px] font-medium text-primary">License</h2>
          <p className="mt-3 ">
            Unless otherwise stated, ServiceConnekt Technologies Pvt. Ltd. and/or its
            licensors own the intellectual property rights for all material on
            ServiceConnekt Technologies. All intellectual property rights are
            reserved. You may access this from ServiceConnekt Technologies for your
            own personal use subjected to restrictions set in these terms and
            conditions.
          </p>
          <h2 className="mt-6 text-[24px] font-medium text-primary">
            You must not:
          </h2>

          <ul className="list-disc mb-6 mt-3 ml-5 ">
            <li >Republish material from ServiceConnekt Technologies</li>
            <li >
              Sell, rent or sub-license material from ServiceConnekt Technologies
            </li>
            <li >
              Reproduce, duplicate or copy material from ServiceConnekt Technologies
            </li>
            <li >Redistribute content from ServiceConnekt Technologies</li>
          </ul>

          <p className="mt-6 ">
            Parts of this website offer an opportunity for users to post and
            exchange opinions and information in certain areas of the website.
            ServiceConnekt Technologies Pvt. Ltd. does not filter, edit, publish or
            review Comments prior to their presence on the website.
          </p>
          <p className="mt-6 ">
            Comments do not reflect the views and opinions of ServiceConnekt
            Technologies Pvt. Ltd.,its agents and/or affiliates. Comments
            reflect the views and opinions of the person who post their views
            and opinions. To the extent permitted by applicable laws, ServiceConnekt
            Technologies Pvt. Ltd. shall not be liable for the Comments or for
            any liability, damages or expenses caused and/or suffered as a
            result of any use of and/or posting of and/or appearance of the
            Comments on this website.
          </p>
          <p className="mt-6 ">
            ServiceConnekt Technologies Pvt. Ltd. reserves the right to monitor all
            Comments and to remove any Comments which can be considered
            inappropriate, offensive or causes breach of these Terms and
            Conditions.
          </p>
          <h2 className="mt-6 mb-4 text-[24px] font-medium text-primary">
            You warrant and represent that:
          </h2>

          <ul className="list-disc my-6 ml-5">
            <li >
              You are entitled to post the Comments on our website and have all
              necessary licenses and consents to do so;
            </li>
            <li >
              The Comments do not invade any intellectual property right,
              including without limitation copyright, patent or trademark of any
              third party;
            </li>
            <li >
              The Comments do not contain any defamatory, libelous, offensive,
              indecent or otherwise unlawful material which is an invasion of
              privacy
            </li>
            <li >
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
            <li >
              The Comments will not be used to solicit or promote business or
              custom or present commercial activities or unlawful activity.
            </li>
          </ul>

          <p className="mt-6 ">
            You hereby grant ServiceConnekt Technologies Pvt. Ltd. a non-exclusive
            license to use, reproduce, edit and authorize others to use,
            reproduce and edit any of your Comments in any and all forms,
            formats or media.
          </p>
          <h2 className="mt-6 mb-4 text-[24px] font-medium text-primary">
            Hyperlinking to our Content
          </h2>
          <h3 className="mt-3  font-bold">
            The following organizations may link to our Website without prior
            written approval:
          </h3>
          <ul className="list-disc mt-6 mb-6 ml-5 ">
            <li >
              Government agencies;
            </li>
            <li >
              Search engines;
            </li>
            <li >
              News organizations;
            </li>
            <li >
              Online directory distributors may link to our Website in the same
              manner as they hyperlink to the Websites of other listed
              businesses; and
            </li>
            <li >
              System wide Accredited Businesses except soliciting non-profit
              organizations, charity shopping malls, and charity fundraising
              groups which may not hyperlink to our Web site.
            </li>
          </ul>
          <p className="mt-6 ">
            These organizations may link to our home page, to publications or to
            other Website information so long as the link: (a) is not in any way
            deceptive; (b) does not falsely imply sponsorship, endorsement or
            approval of the linking party and its products and/or services; and
            (c) fits within the context of the linking party's site.
          </p>
          <h3 className="mt-6  font-bold">
            We may consider and approve other link requests from the following
            types of organizations:
          </h3>
          <ul className="list-disc my-6 ml-5 ">
            <li >
              commonly-known consumer and/or business information sources;
            </li>
            <li >
              dot.com community sites;
            </li>
            <li >
              associations or other groups representing charities;
            </li>
            <li >
              online directory distributors;
            </li>
            <li >
              internet portals;
            </li>
            <li >
              accounting, law and consulting firms; and
            </li>
            <li >
              educational institutions and trade associations.
            </li>
          </ul>
          <p className="mt-6 ">
            We will approve link requests from these organizations if we decide
            that: (a) the link would not make us look unfavorably to ourselves
            or to our accredited businesses; (b) the organization does not have
            any negative records with us; (c) the benefit to us from the
            visibility of the hyperlink compensates the absence of ServiceConnekt
            Technologies Pvt. Ltd.; and (d) the link is in the context of
            general resource information
          </p>
          <p className="mt-6 ">
            These organizations may link to our home page so long as the link:
            (a) is not in any way deceptive; (b) does not falsely imply
            sponsorship, endorsement or approval of the linking party and its
            products or services; and (c) fits within the context of the linking
            party's site.
          </p>
          <p className="mt-6 ">
            If you are one of the organizations listed in paragraph 2 above and
            are interested in linking to our website, you must inform us by
            sending an e-mail to ServiceConnekt Technologies Pvt. Ltd.. Please
            include your name, your organization name, contact information as
            well as the URL of your site, a list of any URLs from which you
            intend to link to our Website, and a list of the URLs on our site to
            which you would like to link. Wait 2-3 weeks for a response.
          </p>
          <h3 className="mt-6  font-bold">
            Approved organizations may hyperlink to our Website as follows:
          </h3>
          <ul className="list-disc mt-6 ml-6 leading-7 ">
            <li >By use of our corporate name; or</li>
            <li >By use of the uniform resource locator being linked to; or</li>
            <li >
              By use of any other description of our Website being linked to
              that makes sense within the context and format of content on the
              linking party's site.
            </li>
          </ul>
          <p className="mt-6 ">
            No use of ServiceConnekt Technologies Pvt. Ltd.'s logo or other artwork
            will be allowed for linking absent a trademark license agreement.
          </p>
          <h2 className="mt-6 text-[24px] font-medium text-primary">iFrames</h2>
          <p className="mt-3 leading-7">
            Without prior approval and written permission, you may not create
            frames around our Webpages that alter in any way the visual
            presentation or appearance of our Website.
          </p>
          <h2 className="mt-6 text-[24px] font-medium text-primary">
            Content Liability
          </h2>
          <p className="mt-3 ">
            We shall not be hold responsible for any content that appears on
            your Website. You agree to protect and defend us against all claims
            that is rising on your Website. No link(s) should appear on any
            Website that may be interpreted as libelous, obscene or criminal, or
            which infringes, otherwise violates, or advocates the infringement
            or other violation of, any third party rights.
          </p>
          <h2 className="mt-6 text-[24px] font-medium text-primary">
            Reservation of Rights
          </h2>
          <p className="mt-3 ">
            We reserve the right to request that you remove all links or any
            particular link to our Website. You approve to immediately remove
            all links to our Website upon request. We also reserve the right to
            amen these terms and conditions and it's linking policy at any time.
            By continuously linking to our Website, you agree to be bound to and
            follow these linking terms and conditions.
          </p>
          <h2 className="mt-6 text-[24px] font-medium text-primary">
            Removal of links from our website
          </h2>
          <p className="mt-3 ">
            If you find any link on our Website that is offensive for any
            reason, you are free to contact and inform us any moment. We will
            consider requests to remove links but we are not obligated to or so
            or to respond to you directly.
          </p>
          <p className="mt-3 ">
            We do not ensure that the information on this website is correct, we
            do not warrant its completeness or accuracy; nor do we promise to
            ensure that the website remains available or that the material on
            the website is kept up to date.
          </p>
          <h2 className="mt-6 text-[24px] font-medium text-primary">
            Disclaimer
          </h2>
          <p className="mt-3 leading-7 ">
            To the maximum extent permitted by applicable law, we exclude all
            representations, warranties and conditions relating to our website
            and the use of this website. Nothing in this disclaimer will:
          </p>
          <ul className="list-disc my-6 mt-6 ml-5 leading-7 ">
            <li>
              limit or exclude our or your liability for death or personal
              injury;
            </li>
            <li >
              limit or exclude our or your liability for fraud or fraudulent
              misrepresentation;
            </li>
            <li >
              limit any of our or your liabilities in any way that is not
              permitted under applicable law; or
            </li>
            <li >
              exclude any of our or your liabilities that may not be excluded
              under applicable law
            </li>
          </ul>
          <p className="mt-6 ">
            The limitations and prohibitions of liability set in this Section
            and elsewhere in this disclaimer: (a) are subject to the preceding
            paragraph; and (b) govern all liabilities arising under the
            disclaimer, including liabilities arising in contract, in tort and
            for breach of statutory duty.
          </p>
          <p className="mt-3 mb-6 ">
            As long as the website and the information and services on the
            website are provided free of charge, we will not be liable for any
            loss or damage of any nature.
          </p>
        </div>
      </div>
    </>
  );
}
