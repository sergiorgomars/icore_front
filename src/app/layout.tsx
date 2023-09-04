import type { Metadata } from 'next';
import { GlobalStyles } from '@styles';

export const metadata: Metadata = {
  title: 'Default title',
  description: 'Add a good description for seo',
}

type RootLayoutProps = { children: React.ReactNode };
export default function RootLayout({ children } : RootLayoutProps ) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
