import { StoryObj, Meta } from '@storybook/react';
import { Avatar, AvatarProps } from '@quimera-ui/react';

export default {
  title: 'Data display/Avatar',
  component: Avatar,
  args: {
    src: 'https://github.com/thiagobrolly.png',
    alt: 'Thiago Sousa',
  },
} as Meta<AvatarProps>;

export const Primary: StoryObj<AvatarProps> = {};

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
};
