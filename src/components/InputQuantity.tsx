import { Minus, Plus } from "phosphor-react";
import { IconWrapper, InputQuantityContainer } from "../styles/components/InputQuantity";

interface InputQuantityProps {
  amount: number;
  onIncrement: () => void;
  onDecrement: () => void;
}

export default function InputQuantity(
  { amount, onDecrement, onIncrement }: InputQuantityProps
  ){
  return (
    <InputQuantityContainer>
      <IconWrapper disabled={amount < 2} onClick={onDecrement}>
       <Minus size={16} weight="bold" />
      </IconWrapper>
        <input type="number" readOnly value={amount}/>
      <IconWrapper onClick={onIncrement}>
        <Plus size={16} weight="bold" />
      </IconWrapper>
    </InputQuantityContainer>
  )
}