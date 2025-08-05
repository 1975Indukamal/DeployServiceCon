// import sendgrid from "@sendgrid/mail";
import { NextResponse } from 'next/server';

// sendgrid.setApiKey(
//   "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"
// );

// // sendgrid.setApiKey(
// //   "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"
// // );

// export async function POST(req) {
//   const body=await req.json();
  
//   if (req.method == "POST") {
    
//     const userEmailData = {
//       to: body.email,
//       from: "ServiceConneckt <info@ServiceConneckt.com>",
      // subject: "Thanks for Reaching Out. Let’s Explore Limitless Possibilities",
      // html: `<!DOCTYPE html>
      //   <html>
      //     <head>
      //       <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
      //       <title></title>
      //     </head>
      //     <body
      //       style="
      //         margin: 0px;
      //         padding: 0px;
      //         color:#555
      //         background-color: #ffffff;
      //         /* margin: 5rem 0rem; */
      //       "
      //       bgcolor="#ffffff"
      //     >
      //       <table
      //         bgcolor="#ffffff"
      //         width="100%"
      //         border="0"
      //         align="center"
      //         cellpadding="0"
      //         cellspacing="0"
      //         style="padding: 0; background-color: #ffffff color:#555"
      //       >
      //       <tbody style="color: #555">
      //         <tr>
      //           <div style="width: 100%;height: inherit; text-transform: capitalize; color:#555">
      //           <p>Hi ${body.email.split("@")[0]}</p>
               
      //               <b>Welcome to</b>
      //               <b style="color: #eb7373">ServiceConneckt Technologies</b>
      //           </div>
      //           <p>Thanks for joining ServiceConneckt global community!</p>
      //           <p>
      //               You’ll be among the first to receive updates about our new blogs and
      //               offers & more!
      //           </p>
      //           <p>
      //               During this time we want you to take a look at our areas of <span style="color: #eb7373"> <a
      //               href="http://localhost:3000/our-expertise/"
      //               target="_blank"
      //               style="color: #eb7373;"
      //             >expertise</a></span>,
      //               learn about the markets and industries we're involved in.
      //           </p>
      //           <p>Click below to the Visit now! button.</p>
            
      //           <button style="
      //             padding:7px 15px;
      //             background:#2C3441;
      //             color:#fff;
      //             cursor:pointer;
      //             outline:none;
      //             border:none;"
      //           >  <a
      //           href="http://localhost:3000/"
      //           target="_blank"
      //           style="text-decoration: none; color:#fff;"
      //         >
      //           Visit Now!</a></button>
      //          <p> & if you didn’t subscribe to
      //           our blogs or you’re not sure why you are received this email, you can
      //           delete it. If you have any questions, you can reply to this email or
      //           <span style="color: #eb7373"> <a
      //           href="http://localhost:3000/contact-us/"
      //           target="_blank"
      //           style="color: #eb7373;"
      //         > contact us.</a></span>
      //             </p> <p>Thanks & regards</p> <div>Team <br/>ServiceConneckt Technologies Pvt. Ltd.</div>
      //             <p>Follow us @</p>
               
      //                       <div style="width: 35px; display: inline-block">
      //                         <a
      //                           href="https://www.instagram.com/ServiceConneckt/"
      //                           target="_blank"
      //                         >
      //                           <img
      //                             width="25"
      //                             height="25"
      //                             src="https://zoylee.fra1.cdn.digitaloceanspaces.com/zoylee/social-cons/instagram.png"
      //                             alt=""
      //                           />
      //                         </a>
      //                       </div>
      //                       <div style="width: 35px; display: inline-block">
      //                         <a
      //                           href="https://www.linkedin.com/company/ServiceConneckt/"
      //                           target="_blank"
      //                         >
      //                           <img
      //                             width="25"
      //                             height="25"
      //                             src="https://zoylee.fra1.cdn.digitaloceanspaces.com/zoylee/social-cons/linkedin.png"
      //                             alt=""
      //                           />
      //                         </a>
      //                       </div>
      //                       <br /><br />
      //                       <hr />
      //                       <div style="padding: 10px 0px; text-align: center">
      //                         <img
      //                           src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/LogoMark.png"
      //                           alt=""
      //                           width="25"
      //                           height="25"
      //                         />
      //                       </div>
      //                       <div
      //                         style="
      //                           padding: 5px 0px;
      //                           min-height: 5vh;
      //                           text-align: center;
      //                         "
      //                       >
      //                         <span>Terms & conditions | Privacy policy</span>
                            
      //                       </div>
      //           </div>
      //         </tr>
      //         </tbody>
      //       </table>
      //     </body>
      //   </html>
      //   `,
//     };

//     try {
//       const ress=await sendgrid.send(userEmailData);
// console.log(ress);
//       return NextResponse.json({ success: "Data is submitted successfully" });
//     } catch (error) {
//       console.log(error)
//       return NextResponse.json({ error: error.message });
//     }
//   } else {
//     return NextResponse.json({ error: "Method not allowed" });
//   }
// }

import nodemailer from 'nodemailer';


export async function POST(req) {
  try {
    const body = await req.json();
    console.log('Received email:', body.email);

    // Create a transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "punamzagade1995@gmail.com",
          pass: "gbqs djnd msnj zoxs",
      },
    });

    const infoEmailData = {
      to: "zagadepunam1975@gmail.com",
      // cc : ["akanksha@ServiceConneckt.com","vishwa@ServiceConneckt.com"],
      from: "ServiceConneckt <info@ServiceConneckt.com>",
      subject: `New User Subscription`,
      text: `your new subscriber : ${body.email}`,
    
    };

    // Define the email options
    const mailOptions = {
      from: 'ServiceConneckt <info@ServiceConneckt.com>"',
      to: body.email,
      subject: "Thanks for Reaching Out. Let’s Explore Limitless Possibilities",
      html: `<!DOCTYPE html>
        <html>
          <head>
            <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
            <title></title>
          </head>
          <body
            style="
              margin: 0px;
              padding: 0px;
              color:#555
              background-color: #ffffff;
              /* margin: 5rem 0rem; */
            "
            bgcolor="#ffffff"
          >
            <table
              bgcolor="#ffffff"
              width="100%"
              border="0"
              align="center"
              cellpadding="0"
              cellspacing="0"
              style="padding: 0; background-color: #ffffff color:#555"
            >
            <tbody style="color: #555">
              <tr>
                <div style="width: 100%;height: inherit; text-transform: capitalize; color:#555">
                <p>Hi ${body.email.split("@")[0]}</p>
               
                    <b>Welcome to</b>
                    <b style="color: #eb7373">ServiceConneckt Technologies</b>
                </div>
                <p>Thanks for joining ServiceConneckt global community!</p>
                <p>
                    You’ll be among the first to receive updates about our new blogs and
                    offers & more!
                </p>
                <p>
                    During this time we want you to take a look at our areas of <span style="color: #eb7373"> <a
                    href="http://localhost:3000/our-expertise/"
                    target="_blank"
                    style="color: #eb7373;"
                  >expertise</a></span>,
                    learn about the markets and industries we're involved in.
                </p>
                <p>Click below to the Visit now! button.</p>
            
                <button style="
                  padding:7px 15px;
                  background:#2C3441;
                  color:#fff;
                  cursor:pointer;
                  outline:none;
                  border:none;"
                >  <a
                href="http://localhost:3000/"
                target="_blank"
                style="text-decoration: none; color:#fff;"
              >
                Visit Now!</a></button>
               <p> & if you didn’t subscribe to
                our blogs or you’re not sure why you are received this email, you can
                delete it. If you have any questions, you can reply to this email or
                <span style="color: #eb7373"> <a
                href="http://localhost:3000/contact-us/"
                target="_blank"
                style="color: #eb7373;"
              > contact us.</a></span>
                  </p> <p>Thanks & regards</p> <div>Team <br/>ServiceConneckt Technologies Pvt. Ltd.</div>
                  <p>Follow us @</p>
               
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
                            <br /><br />
                            <hr />
                            <div style="padding: 10px 0px; text-align: center">
                              <img
                                src="https://starfish-app-92xxn.ondigitalocean.app/assets/images/emailImage/LogoMark.png"
                                alt=""
                                width="25"
                                height="25"
                              />
                            </div>
                            <div
                              style="
                                padding: 5px 0px;
                                min-height: 5vh;
                                text-align: center;
                              "
                            >
                              <span>Terms & conditions | Privacy policy</span>
                            
                            </div>
                </div>
              </tr>
              </tbody>
            </table>
          </body>
        </html>
        `,
    };

    // Send the email
    await transporter.sendMail(infoEmailData);
    const info = await transporter.sendMail(mailOptions);

    console.log('Email sent:', info.response);

    // Send a success response using NextResponse
    return NextResponse.json(info.response);
  } catch (error) {
    console.error('Error sending email:', error);

    // Send an error response with a meaningful message
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
