import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Apostron',
  description: 'Generador de pronósticos y análisis de partidos de fútbol de la Liga Premier de Inglaterra'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
