
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
  name: "HexaBells Technologies Pvt. Ltd",
  alternateName: "HexaBells",
  url: "http://localhost:3000/",
  logo: "http://localhost:3000/assets/images/hexabells-logo.webp",
  sameAs: [
    "https://www.facebook.com/hexabells",
    "https://twitter.com/InfoHexabells",
    "https://www.linkedin.com/company/hexabells",
    "https://www.instagram.com/hexabells",
  ],
};
export const metadata = {
  metadataBase: new URL('http://localhost:3000'),
 
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
          content="http://localhost:3000/assets/images/hexabells-logo.webp"
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
