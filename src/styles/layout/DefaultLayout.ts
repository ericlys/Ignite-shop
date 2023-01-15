import { styled } from '..';

export const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'cenflex-start',
  justifyContent: 'center',
  minHeight: '100vh'
})

export const Header = styled('header', {
  padding: '2rem 0',
  width: '100%',
  maxWidth: 1100,
  margin: '0 auto',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  button: {
    borderRadius: 6,
    padding: '0.75rem',
    background: '$gray800',
    border: 'none',
    cursor: 'pointer',
    position: 'relative',

    span: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
      position: 'absolute',
      border: '3px solid $gray900',
      color: '$white',
      width: '1.5rem',
      height: '1.5rem',
      borderRadius: '99px',
      background: '$green500',
      top: -5,
      right: -7,
    },
    
  }
})
