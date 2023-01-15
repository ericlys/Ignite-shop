import * as Dialog from '@radix-ui/react-dialog';
import Image from "next/image";
import { Handbag } from 'phosphor-react';
import { ReactNode } from 'react';
import { useShoppingCart } from 'use-shopping-cart';
import logoImg from '../assets/logo.svg';
import ShopCart from '../components/ShopCart';
import { Container, Header } from "../styles/layout/DefaultLayout";

interface DefaultLayoutProps {
  children: ReactNode;
}

export default function DefaultLayout({children, ...props}: DefaultLayoutProps){
  const {
    cartCount
  } = useShoppingCart();

  return(
    <Container>
    <Header>
      <Image src={logoImg} alt="" />

      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button >
            {!!cartCount && cartCount > 0 && <span>{cartCount}</span>}
            <Handbag size={24} color={!!cartCount ? '#C4C4CC' : '#8D8D99'} />
          </button>
        </Dialog.Trigger>

        <ShopCart />
      
      </Dialog.Root>
    </Header>

    {children}
  </Container>
  )
}