import type { Metadata } from 'next'
import { Geist, Azeret_Mono as Geist_Mono } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import { Navbar } from "@/components/navbar"
import { NavMenu } from "@/components/nav-menu"
import { Footer } from "@/components/footer"
import { LiveChatButton } from "@/components/live-chat-button"
import './globals.css'

const geistSans = Geist({
  subsets: ['latin'],
  variable: '--font-sans',
})
const geistMono = Geist_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
})

export const metadata: Metadata = {
  title: 'In Vivo Business Solutions',
  description: 'AI-powered solutions for business growth',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased flex flex-col min-h-screen`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="fixed top-4 right-4 z-50 flex items-center space-x-2">
            <NavMenu />
            <ThemeToggle />
          </div>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
          <LiveChatButton />
        </ThemeProvider>
      </body>
    </html>
  )
}

