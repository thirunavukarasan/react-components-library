import "../src/style/tailwind.css";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  playroom: {
    url: 'http://weaveroo-playroom.s3-website.ap-south-1.amazonaws.com',
  }
}


