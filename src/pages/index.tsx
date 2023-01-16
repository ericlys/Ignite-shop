import { GetStaticProps } from "next"
import Head from 'next/head'
import Image from "next/image"
import Link from "next/link"
import { Handbag } from 'phosphor-react'
import Stripe from "stripe"
import { A11y, Navigation } from 'swiper'
import { SwiperProps, SwiperSlide } from 'swiper/react'
import { useShoppingCart } from "use-shopping-cart"
import { IProduct } from "../@types/ProductType"
import { stripe } from "../lib/stripe"
import { HomeContainer, Product, Slide } from "../styles/pages/home"

import 'swiper/css'
import 'swiper/css/navigation'
import { formatterPrice } from "../utils/formatter"

interface HomeProps {
  products: IProduct[]
}

export default function Home({products}: HomeProps) {
  const { addItem } = useShoppingCart();


  const sliderSettings: SwiperProps = {
    modules: [Navigation, A11y],
    spaceBetween: 48,
    slidesPerView: 2,
    navigation: true,
    draggable: true,
  }

  function handleAddingProductToCart(product: IProduct) {
    addItem(product);
  }


  return (
    <>
      <Head>
        <title>Home | Ignite Shop</title>
      </Head>
      
      <HomeContainer >
        <Slide {... sliderSettings}>
        {products.map(product => {
          return (
            <SwiperSlide key={product.id}>
            <Product className="keen-slider__slide">
              <Link href={`/product/${product.id}`}  key={product.id} prefetch={false}>
                <Image src={product.imageUrl} width={520} height={480} alt="" />
              </Link>

            <footer>
              <div>
                <strong>{product.name}</strong>
                <span>{ formatterPrice(product.price)}</span>
              </div>
              <button onClick={() => handleAddingProductToCart(product)}>
                <Handbag size={32} color="#FFFFFF"/>
              </button>
            </footer>
          </Product>
          </SwiperSlide>
          )
        })}
        </Slide>
      </HomeContainer>
    </>
  )
}

export const getStaticProps: GetStaticProps= async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })

  const products = response.data.map( product => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount,
      defaultPriceId: price.id,
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2, //2 horas
  }
}
