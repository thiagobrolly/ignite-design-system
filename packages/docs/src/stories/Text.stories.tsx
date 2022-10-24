import { StoryObj, Meta } from '@storybook/react';
import { Text, TextProps } from '@quimera-ui/react';

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    children:
      'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Similique quis quo dolor vitae ab illo fugit. Tenetur repudiandae exercitationem debitis incidunt iste! Perferendis enim expedita earum pariatur minus nam voluptas.',
  },
} as Meta<TextProps>;

export const Primary: StoryObj<TextProps> = {};

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
};
