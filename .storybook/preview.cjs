import { themes } from '@storybook/theming'
import { addDecorator } from '@storybook/react';
import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

import '../src/styles/global.css';

initializeWorker();
addDecorator(mswDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: themes.dark,
  },
}