

import { Poppins, Quicksand, Urbanist } from 'next/font/google'
import 'react-phone-input-2/lib/style.css'
import './globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';
import Layout from '@/components/Layout/Layout';
import { ClientProviders } from './learnhub-providers';
import { Toaster } from "@/components/learnhub/ui/toaster";
import { Toaster as Sonner } from "@/components/learnhub/ui/sonner";
import { TooltipProvider } from "@/components/learnhub/ui/tooltip";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-poppins',
  display: 'swap',
})

const quicksand = Quicksand({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-quicksand',
  display: 'swap',
})

const urbanist = Urbanist({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-urbanist',
  display: 'swap',
})




export const metadata = {
  metadataBase: new URL('https://www.serviceconnekt.com'),
  title: {
    default: 'ServiceConnekt | Web, Mobile, SaaS & Custom Software Development',
    template: '%s | ServiceConnekt'
  },
  description:
    'ServiceConnekt delivers modern website development, mobile apps, SaaS platforms, custom software, UI/UX design, cloud solutions, and digital transformation services for global businesses.',
  keywords: [
    // BRAND
    'ServiceConnekt',
    'Service Connekt',
    'ServiceConnekt Technologies',
    'Service Connekt Software',
    'ServiceConnekt Development',
    // BROAD
    'Web development',
    'Mobile app development',
    'Software development',
    'Custom software',
    'SaaS development',
    'Cloud solutions',
    'UI UX design',
    'IT consulting',
    'Tech solutions',
    'Digital transformation',
    // NICHE - WORLDWIDE
    'Software development for startups',
    'Enterprise software development',
    'Digital transformation services',
    'Cloud migration services',
    'Mobile app development services',
    'Custom SaaS solutions',
    'API development',
    'Full stack development',
    'Backend development',
    'Frontend development',
    'Cross-platform app development'
  ],
  icons: {
    icon: '/Favicon.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    siteName: 'ServiceConnekt',
    url: 'https://www.serviceconnekt.com',
    title: 'ServiceConnekt | Software, SaaS, Mobile & Web Development',
    description:
      'Global software development company building scalable web, mobile, and SaaS solutions.',
    images: [
      {
        url: 'https://www.serviceconnekt.com/assets/images/log1.png',
        width: 1200,
        height: 630,
        alt: 'ServiceConnekt Logo'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'ServiceConnekt | Software, SaaS, Mobile & Web Development',
    description: 'Full-stack web, mobile, SaaS & cloud solutions worldwide.',
    images: ['https://www.serviceconnekt.com/assets/images/log1.png']
  },
  alternates: {
    canonical: 'https://www.serviceconnekt.com'
  },
  other: {
    'google-site-verification': 'DVC1NiFSGzWZX_XuTHmNAPmLhMQWiJUAkAMaBkP521U'
  }
}

const OrganizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'ServiceConnekt Technologies Pvt. Ltd',
  alternateName: 'ServiceConnekt',
  url: 'https://www.serviceconnekt.com/',
  logo: 'https://www.serviceconnekt.com/assets/images/log1.png',
  sameAs: [
    'https://www.facebook.com/serviceconnekt',
    'https://twitter.com/Infoserviceconnekt',
    'https://www.linkedin.com/company/serviceconnekt',
    'https://www.instagram.com/serviceconnekt'
  ],
  description:
    'ServiceConnekt provides global software development, SaaS, mobile apps, cloud, and IT consulting solutions.'
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {


  return (
    <html lang="en" className={`${poppins.variable} ${quicksand.variable} ${urbanist.variable}`}>
      <head>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(OrganizationSchema),
          }}
        />
        <meta
          name="google-site-verification"
          content="DVC1NiFSGzWZX_XuTHmNAPmLhMQWiJUAkAMaBkP521U"
        />
        <meta
          property="og:image:secure_url"
          content="https://www.serviceconnekt.com/assets/images/log1.png"
        />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
      </head>
      <body >
        <ClientProviders>
          <TooltipProvider>
            <Layout>
              {children}
            </Layout>
            <Toaster />
            <Sonner />
          </TooltipProvider>
        </ClientProviders>
      </body>
    </html>
  )
}
