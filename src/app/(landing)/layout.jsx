import { Montserrat } from 'next/font/google';
import './../globals.scss';

import Header from '@/Sections/Header';
import Footer from '@/Sections/landing/Footer';

import { Providers } from '@/Components/Providers';
import Head from 'next/head';
const MontserratFont = Montserrat({ subsets: ['cyrillic-ext'] });

export const metadata = {
  title: 'GYMYX',
  description: 'GYMYX',
  manifest: '/manifest.json',
};

async function getData() {
  const res = await fetch('https://gymyx.cro.codes/api/pages/index', {
    cache: 'no-store',
    next: {
      revalidate: 60,
    },
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function LandingLayout({ children, params }) {
  const { data } = await getData();
  const headerData = data.modules.find((item) => item.alias === 'header');
  const footerData = data.modules.find((item) => item.alias === 'footer');

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0,user-scalable=0" />
      </Head>
      <body className={MontserratFont.className}>
        <Providers>
          <Header isLanding={true} data={headerData} />
          <main className="main">{children}</main>
          <Footer data={footerData} />
        </Providers>
      </body>
    </html>
  );
}
