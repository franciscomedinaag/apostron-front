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
      <head>
        <link type="image/png" sizes="96x96" rel="icon" href="https://img.icons8.com/cotton/64/football-ball.png"/>
      </head>
      <body>{children}</body>
    </html>
  )
}
