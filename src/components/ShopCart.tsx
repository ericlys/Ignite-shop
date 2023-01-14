import * as Dialog from "@radix-ui/react-dialog";
import { X } from "phosphor-react";
import { CloseButton, Content, ImageContainer, Product, ProductsWrapper } from "../styles/components/ShopCart";

export default function ShopCart() {
  return (
    <Dialog.Portal>
      <Content>

        <CloseButton>
          <X size={24} />
        </CloseButton>
        <Dialog.Title>Sacola de compras</Dialog.Title>
        
        <ProductsWrapper>
          <Product>
            <ImageContainer>

            </ImageContainer>
            
            <div>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
          <Product>
            <ImageContainer>

            </ImageContainer>
            
            <div>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
          <Product>
            <ImageContainer>

            </ImageContainer>
            
            <div>
              <strong>Camiseta Beyond the Limits</strong>
              <span>R$ 79,90</span>
              <button>Remover</button>
            </div>
          </Product>
        </ProductsWrapper>


      </Content>
    </Dialog.Portal>

  )
}