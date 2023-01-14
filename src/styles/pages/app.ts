import { Handbag } from 'phosphor-react';
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
    cursor: 'pointer'
  }
})

export const BagIcon = styled(Handbag, {
  width: 24,
  height: 24,
  color: '$white'
})