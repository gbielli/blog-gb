import './globals.css'
import Header from '../components/old/Header'
import TagManager from 'react-gtm-module';
import localFont from 'next/font/local'


const clashDisplay = localFont({
  src: [
    {
      path: '..//public/fonts/ClashDisplay-Semibold.woff2',
    },
  ],
  variable: '--font-clash'
})

const archivo = localFont({
  src: [
    {
      path: '../public/fonts/Archivo-Regular.woff2',
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
      </body>
    </html>
  )
}
