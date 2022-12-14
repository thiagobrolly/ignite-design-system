import { ComponentProps, ElementType } from 'react';
import { styled } from '../styles';

export const Box = styled('div', {
  padding: '$4',
  borderRadius: '$md',
  backgroundColor: '$gray800',
  border: '1px solid $gray600',
  fontFamily: '$default',
});

export interface BoxProps extends ComponentProps<typeof Box> {
  as?: ElementType;
  children?: React.ReactNode;
}

Box.displayName = 'Box';
