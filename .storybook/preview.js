/** @type { import('@storybook/react').Preview } */
const SOURCE_REGEX = /^\(\) => `(.*)`$/;
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    html: {
      prettier: {
        tabWidth: 2,
        useTabs: false,
        htmlWhitespaceSensitivity: "strict",
      },
      transform:(code) => {
        let beforeCode = code.replace(/jsx+-[0-9]+/, '');
        return beforeCode;
      }
    }
  },
};

export default preview;
