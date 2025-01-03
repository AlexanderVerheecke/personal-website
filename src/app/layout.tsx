import type { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Alexander Verheecke',
  description: 'Personal Website of Alexander Verheecke',
}
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div id="root">{children}</div>
      </body>
    </html>
  )
}