import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: 'voting system',
  description: 'Created with hicode',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body >
        <Header />
        <div className='container  mx-auto'>
        {children}
        </div>
      </body>
    </html>
  )
}
