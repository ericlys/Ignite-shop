import { styled } from "..";

export const InputQuantityContainer = styled('div', {
  backgroundColor: '$gray900',
  display: 'flex',
  alignItems: 'start',
  justifyContent: 'center',
  borderRadius: 6,
  padding: '0.4rem 0.5rem 0.3rem',
  maxWidth: 100,

  input: {
    textAlign: 'center',
    width: '100%',
    background: 'none',
    border: 'none',
    color: '$gray100',

    '&:focus': {
      outline: 'none',
    }
  },

  /* REMOVENDO ESPAÇO DE SETAS DO INPUT DE NUMBER */ 
  'input[type=number]::-webkit-inner-spin-button, input[type=number]::-webkit-outer-spin-button': {
    '-webkit-appearance': 'none',
    margin: 0,
  },

  'input[type="number"]': {
    '-moz-appearance': 'textfield',
  }
})

export const IconWrapper = styled('button',{
  border: 'none',
  background: 'none',
  transition: '0.4s',

  '&:disabled': {
    opacity: 0.4,
    cursor: 'not-allowed',
  },

  '&:not(:disabled):hover': {
    color: '$green300',
  }
})