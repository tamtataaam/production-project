import type { Preview } from '@storybook/react';
import { Theme } from 'app/providers/ThemeProvider';
import { RouterDecorator } from 'shared/config/storybook/RouterDecorator';
import { StyleDecorator } from 'shared/config/storybook/StyleDecorator';
import { ThemeDecorator } from 'shared/config/storybook/ThemeDecorator';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    },
    decorators: [
        (Story) => (
            StyleDecorator(Story)
        ),
        (Story) => (
            ThemeDecorator(Theme.LIGHT)(Story)
        ),
        (Story) => (
            RouterDecorator(Story)
        )
    ]
};

export default preview;
