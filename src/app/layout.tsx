
import Layout from '@/Components/Layout/Layout';
import 'react-phone-input-2/lib/style.css'
import './globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
const OrganizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ServiceConnekt Technologies Pvt. Ltd",
  alternateName: "ServiceConnekt",
  url: "https://www.serviceconnekt.com/",
  logo: "https://www.serviceconnekt.com/assets/images/log1.png",
  sameAs: [
    "https://www.facebook.com/serviceconnekt",
    "https://twitter.com/Infoserviceconnekt",
    "https://www.linkedin.com/company/serviceconnekt",
    "https://www.instagram.com/serviceconnekt",
  ],
};
export const metadata = {
  metadataBase: new URL('https://www.serviceconnekt.com'),
 
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" >
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(OrganizationSchema),
          }}
        />
        <meta
          property="og:image:secure_url"
          content="https://www.serviceconnekt.com/assets/images/log1.png"
        />
        <meta property="og:image:width" content={"899"} />
        <meta property="og:image:height" content={"1049"} />
      </head>
      <body >
        <Layout>

          {children}
        </Layout>

      </body>
    </html>
  )
}
