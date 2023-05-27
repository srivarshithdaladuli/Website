import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://srivarshithd.com/icon.svg',
    brandTitle: 'Srivarshith Daladuli Components',
    brandUrl: 'https://srivarshithd.com',
  },
});
