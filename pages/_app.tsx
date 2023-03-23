import React,  { useEffect, useState } from 'react';
import { Layout } from '../components';
import { getPosts } from '../services'
import Script from 'next/script';
import TagManager from 'react-gtm-module';
import Head from 'next/head';

import '../styles/globals.scss';
import 'tailwindcss/tailwind.css';
import type { AppProps } from 'next/app';

import { Abril_Fatface } from 'next/font/google';




function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    TagManager.initialize({ gtmId: 'GTM-TM94CJ5' });
}, []);

  return (
    <>
    <Layout>
        <Component {...pageProps} />
    </Layout>
    </>
  )
}


export default MyApp



