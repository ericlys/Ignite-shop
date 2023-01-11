import { HomeContainer, Product } from "../styles/pages/home"

import tshert1 from '../assets/shirts/1.png'
import tshert2 from '../assets/shirts/2.png'
import tshert3 from '../assets/shirts/3.png'
import Image from "next/image"

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={tshert1} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={tshert2} width={520} height={480} alt="" />

        <footer>
          <strong>Camiseta X</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
