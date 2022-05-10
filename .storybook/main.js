module.exports = {
  stories: ["../packages/**/*.stories.tsx"],
  addons: [
    {
      name: "@storybook/addon-essentials",
      options: { backgrounds: false },
    },
  ],
  typescript: {
    reactDocgen: false,
  },
};
