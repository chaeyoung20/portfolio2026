import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Chaeyoung Portfolio — UI/UX Designer',
  description: 'Thoughtful UI/UX design and digital experiences by Chaeyoung.',
  icons: { icon: '/favicon.png' },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script dangerouslySetInnerHTML={{__html:`document.addEventListener('DOMContentLoaded',()=>{const o=new IntersectionObserver(e=>e.forEach(x=>x.isIntersecting&&x.target.classList.add('is-visible')),{threshold:.12});document.querySelectorAll('.works .project').forEach(e=>o.observe(e));});`}} />
        {children}
      </body>
    </html>
  );
}
