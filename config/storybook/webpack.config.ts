import path from 'path';
import type webpack from 'webpack';
import { type RuleSetRule } from 'webpack';
import { type BuildPaths } from '../build/types/config';
import { buildCssLoader } from '../../config/build/loaders/buildCssLoader';
import { buildSvgLoader } from '../../config/build/loaders/buildSvgLoader';

export default ({ config }: { config: webpack.Configuration }) => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src')
    };

    config.resolve?.modules?.push(paths.src);
    config.resolve?.extensions?.push('.ts', '.tsx');

    config.module.rules = config.module.rules.map((rule: RuleSetRule) => {
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/svg/.test(rule.test as string)) {
            return { ...rule, exclude: /\.svg$/i };
        }
        // eslint-disable-next-line @typescript-eslint/prefer-includes
        if (/css/.test(rule.test as string)) {
            return { ...rule, exclude: /\.css$/i };
        }
        return rule;
    });

    config.module.rules.push(buildSvgLoader());
    config.module.rules.push(buildCssLoader(true));

    return config;
};
