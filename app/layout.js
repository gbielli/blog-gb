import './globals.css';
import localFont from 'next/font/local';
import Header from '../components/new/landing/Header/page';
import Footer from '../components/new/landing/Footer/page';
import Script from 'next/script';



const GTM_ID = 'GTM-TM94CJ5';



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
  title: 'Guillaume Bielli | Digital Worker & Frontend Lover',
  description: "J'aide les entreprises à développer l'acquisition client et à construire une expérience utilisateur hors norme avec une logique data-driven."
}

export default function RootLayout({children}) {

//   useEffect(() => {
//     TagManager.initialize({ gtmId: 'GTM-TM94CJ5' });
// }, []);

  return (
    <>
    <html lang="fr" className={`${clashDisplay.variable} ${archivo.variable}`}>
    <Script id="google-tag-manager" strategy="afterInteractive">
        {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
        `}
    </Script>
      <body>
      <Header />
      <main>{children}</main>
      <Footer />
      </body>
    </html>
    </>
  )
}
