import * as Dialog from "@radix-ui/react-dialog";
import axios from "axios";
import Image from "next/image";
import { X } from "phosphor-react";
import { useState } from "react";
import { useShoppingCart } from "use-shopping-cart";
import { IProduct } from "../@types/ProductType";
import { CartSummary, CloseButton, Content, ImageContainer, Product, ProductsWrapper } from "../styles/components/ShopCart";
import { formatterPrice } from "../utils/formatter";
import InputQuantity from "./InputQuantity";


export default function ShopCart() {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    removeItem,
    decrementItem,
    incrementItem
  } = useShoppingCart();

  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] = useState(false)

  const products: IProduct[] = Object.keys(cartDetails!).map(key => cartDetails![key])

  function handleRemoveItem(id: string) {
    removeItem(id)
  }

  function HandleIncrementItem(id: string) {
    incrementItem(id)
  }

  function HandleDecrementItem(id: string) {
    decrementItem(id)
  }

  async function handleBuyProduct() {
    try {
      setIsCreatingCheckoutSession(true);

      const response = await axios.post('/api/checkout', {
        products: products
      })

      const { checkoutUrl } = response.data;

      window.location.href = checkoutUrl

    } catch(err){
      //Conectar com uma ferramenta de observabilidade (Datadog/Sentry)
      setIsCreatingCheckoutSession(false)
      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <Dialog.Portal>
      <Content>

        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        <section>
          <ProductsWrapper>
            {products.map(product => {
              return (
                <Product key={product.id}>
                  <ImageContainer>
                    <Image src={product.imageUrl} alt="" width={95} height={95}/> 
                  </ImageContainer>
                  
                  <div>
                    <strong>{product.name}</strong>
                    <span>{formatterPrice(product.price)}</span>

                    <section>
                      <InputQuantity 
                        amount={product.quantity!}
                        onDecrement={() => HandleDecrementItem(product.id)}
                        onIncrement={() => HandleIncrementItem(product.id)}
                      />
                      <button onClick={() => handleRemoveItem(product.id)}>Remover</button>
                    </section>
                  </div> 
                </Product>
              )
            })}
          </ProductsWrapper>
          
          <CartSummary>
            <div>
              <span>
              Quantidade      
              </span>
              <span>
                {cartCount} itens
              </span>
            </div>

            <div>
              <strong>
                Valor total             
              </strong>
              <strong>
                {totalPrice ? formatterPrice(totalPrice) : 'R$ 00,00'}
              </strong>
            </div>

            <button 
              onClick={handleBuyProduct}
              disabled={isCreatingCheckoutSession || cartCount! < 1}
            >
              Finalizar compra
            </button>
          </CartSummary>
        </section>
      </Content>
    </Dialog.Portal>

  )
}