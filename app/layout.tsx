import { DM_Sans } from 'next/font/google';
import "./globals.css"

const dmSans = DM_Sans({ 
  subsets: ['latin'],
  weight: ['400', '500', '700', '800'] // Best to specify weights for a dashboard
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Added antialiased for smoother font rendering */}
      <body className={`${dmSans.className} antialiased bg-[#fcfcfc] text-gray-900`}>
        {children}
      </body>
    </html>
  );
}