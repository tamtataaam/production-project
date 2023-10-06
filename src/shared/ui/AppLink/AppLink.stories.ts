import type { Meta, StoryObj } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';
import AppLink, { AppLinkTheme } from './AppLink';

const meta: Meta<typeof AppLink> = {
    title: 'shared/AppLink',
    component: AppLink,
    args: {
        to: '/',
        children: 'Text'
    }
};

export default meta;
type Story = StoryObj<typeof meta>

export const Primary: Story = {
    args: {
        theme: AppLinkTheme.PRIMARY
    }
};

export const Secondary: Story = {
    args: {
        theme: AppLinkTheme.SECONDARY
    }
};

export const Red: Story = {
    args: {
        theme: AppLinkTheme.RED
    }
};

export const PrimaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.PRIMARY
    }
};

export const SecondaryDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.SECONDARY
    }
};

export const RedDark: Story = {
    decorators: [ThemeDecorator(Theme.DARK)],
    args: {
        theme: AppLinkTheme.RED
    }
};
