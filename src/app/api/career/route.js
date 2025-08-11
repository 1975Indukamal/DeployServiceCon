import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req) {
    try {
      const body = await req.json();
console.log(body);
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "punamzagade1995@gmail.com",
            pass: "gbqs djnd msnj zoxs",
        },
      });
      const infoEmailData = {
        to: "zagadepunam1975@gmail.com",
        // cc : ["akanksha@ServiceConneckt.com","vishwa@ServiceConneckt.com"],
        from: "ServiceConnect <punamzagade1995@gmail.com>",
        subject: `Applying for ${body.applyFor}(${body.jobType})`,
        text: `Name: ${body.name}\nCompany Name: ${body.endd}\nRole: ${body.employer}\nExperience:${body.exp}\nNotice Period:${body.startd}\nEmail: ${body.email}\nPhone: ${body.mobileNumber}\nLinkedin Profile: ${body.websiteUrl}\nCollege: ${body.collegeName}\nBranch: ${body.branch}\njob Location:${body.jobLocation}\nwork Type:${body.workType}\ncompany Location:${body.companyLocation}`,
      };
      const mailOptions = {
      to: body.email,
      from: "ServiceConneckt <info@ServiceConneckt.com>",
      subject: "Thanks for Reaching Out. Let’s Explore Limitless Possibilities",
      html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
          <title>ServiceConneckt</title>
        </head>
        <body
        style="
          margin: 0px;
          padding: 0px;
          background-color: #ebebeb;
          margin: 5rem 0rem;
          font: small/1.5 Arial, Helvetica, sans-serif;
        "
        bgcolor="#ebebeb"
      >
        <table
          bgcolor="#ebebeb"
          width="100%"
          border="0"
          align="center"
          cellpadding="0"
          cellspacing="0"
          style="padding: 0; background-color: #ebebeb"
        >
          <tr>
            <td style="background-color: #ebebeb">
              <table
                width="700"
                border="0"
                valign="top"
                align="center"
                cellpadding="0"
                cellspacing="0"
                bgcolor="#ffffff"
                style="padding: 2rem"
              >
                <tr>
                  <td style="background-color: #ffffff">
                    <div style="width: 100%; margin-bottom: 2rem">
                      <img
                        src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/ServiceConneckt-logo.png"
                        alt="ServiceConneckt"
                        height="30"
                      />
                    </div>
                    <img
                      height="300"
                      width="100%"
                      src="https://zoylee.fra1.cdn.digitaloceanspaces.com/zoylee/social-cons/banner.webp"
                      alt=""
                    />
    
                    <div>
                      ${req.body.email ? `<p>Hi ${req.body.email}</p>` : ""}
                      <h3>
                        Welcome to
                        <span style="color: #eb7373">ServiceConneckt</span>
                      </h3>
                      <p>
                        We would like to extend our sincere gratitude to you for
                        taking the time to reach out to us.
                      </p>
                      <p>
                        We are currently reviewing your inquiry. One of our
                        representatives will get back to you shortly to discuss your
                        project in further detail and address any questions you may
                        have.
                      </p>
                      <p>
                        With this email, we are sharing some resources to give you a
                        brief overview of our development practices, technologies
                        and our portfolio.
                      </p>
                      <a
                        style="
                          padding: 10px 20px;
                          background-color: #2c3441;
                          display: inline-block;
                          border-radius: 2px;
                          color: #ffffff;
                          border: 2px solid #2c3441;
                          cursor: pointer;
                          text-decoration: none;
                        "
                        href="https://www.figma.com/proto/V4YsvaAh8UhyjnDu4IRaMq/ServiceConneckt?page-id=0%3A1&type=design&node-id=2-38418&viewport=567%2C388%2C0.08&t=W0lf6WaQ40yRMcSF-1&scaling=scale-down-width"
                        target="_blank"
                      >
                        View Profile!
                      </a>
                      <p>
                        In the meanwhile, if you need any immediate assistance or
                        have additional information to share, feel free to contact
                        us at <span style="color: #eb7373;">+91-9319271595</span> or
                        <span style="color: #eb7373;text-decoration: none;">projects@ServiceConneckt.com</span>.
                      </p>
    
                      <p>
                        Thank you once again for considering ServiceConneckt as your
                        digital partner. We look forward to the opportunity to work
                        together and deliver outstanding results for your business.
                      </p>
                      <p>Thanks & regards</p> <br />
    
                      <span style="font-weight: bold;">Komal Singh</span><br /> 
                      <span>ServiceConneckt Technologies Pvt. Ltd.</span><br />
    
                      <br /><br /><br />
                      <hr />
                      <p>Follow us @</p>
                      <div style="width: 100%; display: flex;">
                      <div style="width: 35px; display: inline-block">
                          <a
                            href="https://www.instagram.com/ServiceConneckt/"
                            target="_blank"
                          >
                            <img
                              width="25"
                              height="25"
                              src="https://zoylee.fra1.cdn.digitaloceanspaces.com/zoylee/social-cons/instagram.png"
                              alt=""
                            />
                          </a>
                        </div>
                      <div style="width: 35px; display: inline-block">
                        <a
                          href="https://www.linkedin.com/company/ServiceConneckt/"
                          target="_blank"
                        >
                          <img
                            width="25"
                            height="25"
                            src="https://zoylee.fra1.cdn.digitaloceanspaces.com/zoylee/social-cons/linkedin.png"
                            alt=""
                          />
                        </a>
                      </div>
                      <div style="width: 35px; display: inline-block; margin-left: auto;">
                        <img
                          src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/LogoMark.png"
                          alt=""
                          width="25"
                          height="25"
                        />
                      </div>
                      </div>
                      <div
                        style="
                          padding: 5px 0px;
                          min-height: 5vh;
                          text-align: center;
                        "
                      >
                        
                      </div>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
      </html>
      `,
    };

    await transporter.sendMail(infoEmailData);
      const info = await transporter.sendMail(mailOptions);

      console.log("Email sent:", info.response);

      return NextResponse.json(info.response);
    } catch (error) {
      console.error('Error sending email:', error);
  
      // Send an error response with a meaningful message
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }


