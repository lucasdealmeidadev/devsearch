import { Roboto } from 'next/font/google';
import type { Metadata } from 'next';

import { ToastContainer } from 'react-toastify';
import NextTopLoader from 'nextjs-toploader';

import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import '@/styles/globals.scss';
import 'react-toastify/dist/ReactToastify.css';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: 'DevSearch | %s',
    default: 'DevSearch'
  },
  description: 'O GitHub é a plataforma líder para desenvolvedores, onde você pode descobrir, colaborar e contribuir para projetos em uma comunidade global. Junte-se a nós e faça parte dessa rede de programadores apaixonados.',
  manifest: ''
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <ToastContainer 
          autoClose={3000}
        />
        <NextTopLoader
          color="var(--white-normal)"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={true}
          easing="ease"
          speed={200}
          shadow={false}
        />
        <Header />

        <main className='container'>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  )
}
