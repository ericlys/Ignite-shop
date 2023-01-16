import * as Dialog from "@radix-ui/react-dialog";
import { keyframes } from "@stitches/react";
import { styled } from "..";


const show = keyframes({
  '0%': { transform: 'translate(110%)' },
  '100%': { transform: 'translate(0%)' },
});

const close = keyframes({
  '0%': { transform: 'translate(0%)' },
  '100%': { transform: 'translate(110%)' },
});

export const Content = styled(Dialog.Content, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  background: '$gray800',
  padding: '3rem',
  minWidth: 480,
  zIndex: 9999,

  '&[data-state="open"]': {
    animation:`${show} 400ms`,
  },
  
  '&[data-state="closed"]': {
    animation:`${close} 400ms`,
  },

  h2: {
    fontSize: '$lg',
    fontWeight: 'bold',
    color: '$white',
    marginTop: '1.25rem'
  },

  section: {
    height: '100%',
    display:'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }
})

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  background: 'transparent',
  border: 0,
  top: '1.5rem',
  right: '1.5rem',
  lineHeight: 0,
  cursor: 'pointer',
  color: '$gray400'
})

export const ProductsWrapper = styled('div',{
  marginTop: '2rem',
  display: 'flex',
  flexDirection: 'column',
  gap: '1.5rem'
})

export const Product = styled('div',{
  display: 'flex',
  flexDirection: "row",
  alignItems: 'center',
  justifyContent: 'center',
  gap: '1.25rem',
  width: '360px',

  '& > div': {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'start',
    
    strong: {
      color: '$gray300',
      fontWeight: 'normal',
      fontSize: '$md',
    },

    span: {
      color: '$white',
      fontWeight: 'bold',
      fontSize: '$md',
      marginTop: 2,
    },

    button: {
      color: '$green500',
      background: 'transparent',
      border: 0,
      fontSize: '$md',
      fontWeight: 'bold',
      cursor: 'pointer',

      '&:hover': {
        color: '$green300',
      },
      
      '&:disabled': {
        opacity: 0.6,
        cursor: 'not-allowed'
      },
    },

    section: {
      marginTop: 8,
      display: 'flex',
      flexDirection: 'row',
      gap: '1rem',
      alignItems: 'center',
      justifyContent: 'center'
    }
  },

})

export const ImageContainer = styled('div', {
  width: '100%',
  maxWidth: 102,
  height: 93,
  background: 'linear-gradient(180deg, #1ea483 0%, #7465d4 100%)',
  borderRadius: 8,
  padding: '0.25rem',

  img: {
    objectFit: 'cover'
  }
})

export const CartSummary = styled('div', {

  '&>div': {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between',
  },

  span: {
    fontSize: '$sm',
    fontWeight: 400,
    lineHeight: '160%',
    color: '$gray100',
  },

  strong: {
    fontSize: '$md',
    fontWeight: 700,
    lineHeight: '160%',
    color: '$gray100',
  },

  button: {
    margin: '3rem 0',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',

    backgroundColor: '$green500',
    border: 0,
    color: '$white',
    borderRadius: 8,
    padding: '1.25rem',
    minHeight: '4.25rem',
    fontWeight: 'bold',
    fontSize: '$md',
    transition: 'background-color 0.4s',
    cursor: 'pointer',

    '&:disabled': {
      opacity: 0.6,
      cursor: 'not-allowed',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$green300',
    },
  }

})