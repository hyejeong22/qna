// app/layout.tsx

import { ClerkProvider } from '@clerk/nextjs'
import './globals.css'

export const metadata = {
  title: 'Q&A 게시판',
  description: 'Next.js로 만든 Q&A 게시판',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="ko">
        <body>
          <header
            style={{
              padding: '20px',
              textAlign: 'center',
              background: '#f4f4f4',
            }}
          >
            <h1>Q&A 게시판</h1>
          </header>
          <main>{children}</main>
        </body>
      </html>
    </ClerkProvider>
  )
}
