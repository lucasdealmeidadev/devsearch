import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ToastContainer } from 'react-toastify';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

import 'react-toastify/dist/ReactToastify.css';
import '@/styles/global.scss';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DevSearch | Líder para desenvolvedores',
  description: 'O GitHub é a plataforma líder para desenvolvedores, onde você pode descobrir, colaborar e contribuir para projetos em uma comunidade global. Junte-se a nós e faça parte dessa rede de programadores apaixonados.',
  icons: {
    icon: '/favicon.svg'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className}>
        <ToastContainer autoClose={3000} />
        <Header />

        <main className="container">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}
