import { StoryObj, Meta } from '@storybook/react';
import { Box, BoxProps } from '@quimera-ui/react';

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: 'Testando elemento Box',
  },
} as Meta<BoxProps>;

export const Primary: StoryObj<BoxProps> = {};
