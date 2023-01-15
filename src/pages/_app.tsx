import type { AppProps } from 'next/app'
import { CartProvider } from 'use-shopping-cart'
import DefaultLayout from '../layout/DefaultLayout'
import { globalStyles } from '../styles/global'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  
  return (
    <CartProvider
      mode="payment"
      cartMode="client-only"
      stripe={process.env.STRIPE_PUBLIC_KEY!}
      successUrl={`${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`}
      cancelUrl={`${process.env.NEXT_URL}/`}
      currency="BRL"
      shouldPersist={true}
    >
      <DefaultLayout>
        <Component {...pageProps} />
      </DefaultLayout>
    </CartProvider>
  )
}
