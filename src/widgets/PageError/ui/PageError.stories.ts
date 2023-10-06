import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import PageError from './PageError';

const meta: Meta<typeof PageError> = {
    title: 'widget/PageError',
    component: PageError
};

export default meta;
type Story = StoryObj<typeof meta>

export const Light: Story = {
    args: {}
};

export const Dark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {}
};
