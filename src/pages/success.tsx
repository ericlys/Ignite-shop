import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Stripe from "stripe";
import { useShoppingCart } from "use-shopping-cart";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImagesWrapper, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  totalProducts: number;
  products: {
    id: string;
    name: string;
    imageUrl: string;
  }[]
}

export default function Success({customerName, products, totalProducts}: SuccessProps) {
  console.log(customerName, products)
  const {
    clearCart
  } = useShoppingCart()

  useEffect(() => {
    clearCart()
  }, [])

  return (
    <>
      <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
      </Head>
      
      <SuccessContainer>

        <ImagesWrapper>
          { products.map(product => {
            return (
            <ImageContainer key={product.id}>
              <Image src={product.imageUrl} width={120} height={110} alt="" />
            </ImageContainer>
            )
          })}
        </ImagesWrapper>

        <h1>Compra efetuada!</h1>
        
        <p>
          Uhuul <strong>{customerName}</strong>, sua 
          {totalProducts > 1 ? 
          ` compra de ${totalProducts} camisetas ` 
          : <strong>products[0].name</strong>}
           já está a caminho da sua casa. 
        </p>

        <Link href="/">Voltar ao catálogo</Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async({query}) => {

  
  if(!query.session_id) {
    return {
      // notFound: true,// => redirect to 404 (Content not found)
      redirect: {
        destination: '/',
        permanent: false
      },
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  })

  
  const customerName = session.customer_details?.name;

  const totalProducts = session.line_items?.data.reduce((acc, item) => {
    return acc + item.quantity!
  }, 0)

  const products = session.line_items?.data.map(item => {
    const product = item.price?.product as Stripe.Product

    return ({
      id: product.id,
      name: product.name,
      imageUrl: product.images[0]
    })
  })
  
  // console.log(session.line_items?.data[0].price?.product)
  // console.log(product)
  return {
    props: {
      customerName, 
      products: products,
      totalProducts,
    }
  }
}