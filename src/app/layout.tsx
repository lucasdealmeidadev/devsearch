import '../styles/globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

export const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'DevSearch',
  description: 'O GitHub é a plataforma líder para desenvolvedores, onde você pode descobrir, colaborar e contribuir para projetos em uma comunidade global. Junte-se a nós e faça parte dessa rede de programadores apaixonados.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        {children}
      </body>
    </html>
  )
}
