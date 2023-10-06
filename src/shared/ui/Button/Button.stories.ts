import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import Button, { ThemeButton } from './Button';

const meta: Meta<typeof Button> = {
    title: 'shared/Button',
    component: Button,
    args: {
        children: 'Text'
    }
};

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {}
};

export const Clear: Story = {
    args: {
        theme: ThemeButton.CLEAR
    }
};

export const Outline: Story = {
    args: {
        theme: ThemeButton.OUTLINE
    }
};

export const OutlineDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: ThemeButton.OUTLINE
    }
};
