import './globals.css';
import 'react-quill-new/dist/quill.snow.css';

export const metadata = {
  title: 'Isuru Thennakoon | IT Infrastructure Engineer',
  description: 'Portfolio of Isuru Thennakoon — Executive Engineer IT specializing in enterprise infrastructure, network administration, cybersecurity, and systems administration.',
  keywords: 'IT Infrastructure, Network Administration, Systems Administration, VMware, Active Directory, Cybersecurity, Portfolio',
  authors: [{ name: 'Isuru Thennakoon' }],
  openGraph: {
    title: 'Isuru Thennakoon | IT Infrastructure Engineer',
    description: 'Executive Engineer IT — Enterprise Infrastructure, Network Administration, Cybersecurity',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
      </head>
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
