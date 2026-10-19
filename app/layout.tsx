import type {Metadata} from 'next';
import '../src/index.css';

export const metadata: Metadata = {
  title: {
    default: 'Creative IT Institute | Professional IT Training in Bangladesh',
    template: '%s | Creative IT Institute',
  },
  description:
    'Build job-ready skills at Creative IT Institute, Bangladesh. Explore professional courses in graphic design, web development, digital marketing, animation, and more.',
  applicationName: 'Creative IT Institute',
  openGraph: {
    title: 'Creative IT Institute | Professional IT Training in Bangladesh',
    description:
      'Build job-ready skills with professional courses in graphic design, web development, digital marketing, animation, and more.',
    siteName: 'Creative IT Institute',
    type: 'website',
    locale: 'en_BD',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Creative IT Institute | Professional IT Training in Bangladesh',
    description:
      'Build job-ready skills with professional courses in graphic design, web development, digital marketing, animation, and more.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-BD">
      <body className="font-sans antialiased text-neutral-800 bg-white selection:bg-[#d92228] selection:text-white text-[15px] sm:text-[16px] leading-relaxed">
        {children}
      </body>
    </html>
  );
}
