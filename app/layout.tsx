import '@/app/ui/global.css'
import { inter } from '@/app/ui/fonts'
import { Metadata } from 'next';
import Image from 'next'


export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://nextjs-dashboard-ten-nu-59.vercel.app/'),
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  authors: [{ name: 'Clive K'}],
  openGraph : {
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    url: 'https://nextjs-dashboard-ten-nu-59.vercel.app/',
    siteName: 'Acme Dashboard',
    images: [
      {
        url :"https://nextjs-dashboard-ten-nu-59.vercel.app/opengraph-image.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en-US',
    type: 'website',
    
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Acme Dashboard',
    description: 'The official Next.js Learn Dashboard built with App Router.',
    images: ['https://nextjs-dashboard-ten-nu-59.vercel.app/opengraph-image.png'],
  }
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
