import * as Dialog from "@radix-ui/react-dialog";
import Image from "next/image";
import { X } from "phosphor-react";
import { useShoppingCart } from "use-shopping-cart";
import { IProduct } from "../@types/ProductType";
import { CartSummary, CloseButton, Content, ImageContainer, Product, ProductsWrapper } from "../styles/components/ShopCart";
import { formatterPrice } from "../utils/formatter";


export default function ShopCart() {
  const {
    cartDetails,
    cartCount,
    totalPrice,
    removeItem
  } = useShoppingCart();

  const products: IProduct[] = Object.keys(cartDetails!).map(key => cartDetails![key])

  function handleRemoveItem(id: string) {
    removeItem(id)
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
                    <button onClick={() => handleRemoveItem(product.id)}>Remover</button>
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

            <button>
              Finalizar compra
            </button>
          </CartSummary>
        </section>
      </Content>
    </Dialog.Portal>

  )
}