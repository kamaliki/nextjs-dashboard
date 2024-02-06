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
