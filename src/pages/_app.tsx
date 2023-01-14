import * as Dialog from '@radix-ui/react-dialog'
import type { AppProps } from 'next/app'
import Image from 'next/image'
import logoImg from '../assets/logo.svg'
import ShopCart from '../components/ShopCart'
import { globalStyles } from '../styles/global'
import { BagIcon, Container, Header } from '../styles/pages/app'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  
  return (
  <Container>
    <Header>
      <Image src={logoImg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button>
            <BagIcon />
          </button>
        </Dialog.Trigger>

        <ShopCart />
      
      </Dialog.Root>
    </Header>

    <Component {...pageProps} />
  </Container>
  )
}
