import './globals.css'
import TagManager from 'react-gtm-module';
import localFont from 'next/font/local';
import Header from '../components/new/landing/Header/page'
import Footer from '../components/new/landing/Footer/page'


const clashDisplay = localFont({
  src: [
    {
      path: '../public/fonts/ClashDisplay-Semibold.woff2',
    },
  ],
  variable: '--font-clash'
})

const archivo = localFont({
  src: [
    {
      path: '../public/fonts/Archivo-Regular.woff2',
      style:'normal'
    },
    {
      path: '../public/fonts/Archivo-SemiBold.woff2',
      weight: '500',
    },
  ],
  variable: '--font-archivo'
})


export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({children}) {

//   useEffect(() => {
//     TagManager.initialize({ gtmId: 'GTM-TM94CJ5' });
// }, []);

  return (
    <html lang="fr" className={`${clashDisplay.variable} ${archivo.variable}`}>
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
  )
}
