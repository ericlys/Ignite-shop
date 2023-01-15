import { GetStaticPaths, GetStaticProps } from "next"
import Head from "next/head"
import Image from "next/image"
import { useRouter } from "next/router"
import Stripe from "stripe"
import { useShoppingCart } from "use-shopping-cart"
import { IProduct } from "../../@types/ProductType"
import { stripe } from "../../lib/stripe"
import { ImageContainer, ProductContainer, ProductDetails } from "../../styles/pages/product"
import { formatterPrice } from "../../utils/formatter"

// interface ProductProps{
//   product: {
//     id: string;
//     name: string;
//     imageUrl: string;
//     price: string;
//     description: string;
//     defaultPriceId: string;
//   }
// }

export interface ProductProps {
  product: IProduct;
}

export default function Product({ product }: ProductProps) {
  const { isFallback } = useRouter()
  const { addItem } = useShoppingCart()

  // const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  // async function handleBuyProduct() {
  //   try {
  //     setIsCreatingCheckoutSession(true);

  //     const response = await axios.post('/api/checkout', {
  //       priceId: product.defaultPriceId
  //     })

  //     const { checkoutUrl } = response.data;

  //     window.location.href = checkoutUrl

  //   } catch(err){
  //     //Conectar com uma ferramenta de observabilidade (Datadog/Sentry)
  //     setIsCreatingCheckoutSession(false)
  //     alert('Falha ao redirecionar ao checkout!')
  //   }
  // }

  const handleAddProductToCart = () => {
    addItem(product)
  }

  if(isFallback){
    return <p>Loading...</p>
  }

  return (
    <>
      <Head>
        <title>{product.name} | Ignite Shop</title>
      </Head>
      
      <ProductContainer>
        <ImageContainer>
          <Image src={product.imageUrl} width={520} height={480} alt=''/>
        </ImageContainer>

        <ProductDetails>
          <h1>{product.name}</h1>
          <span>{formatterPrice(product.price)}</span>

          <p>{product.description}</p>

          <button 
          // disabled={isCreatingCheckoutSession}
           onClick={handleAddProductToCart}>
            Colocar na sacola
          </button>
        </ProductDetails>
      </ProductContainer>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [
      // { params: { id: 'prod_N9Vipcuj4FQKeu'}}
    ],
    fallback: true
  }
}

export const getStaticProps: GetStaticProps<any, {id: string}> = async ({ params }) => {
  const productId = params!.id;

  const product = await stripe.products.retrieve(productId, {
    expand: ['default_price']
  });

  const price = product.default_price as Stripe.Price

  return {
    props: {
      product: {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: price.unit_amount!,
        description: product.description,
        defaultPriceId: price.id
      }
    },
    revalidate: 60 * 60 * 1, // 1h
  }
}