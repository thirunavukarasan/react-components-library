import "../src/style/tailwind.css";
// import '!style-loader!css-loader!sass-loader!../src/components/KeyfeaturesComponents/Keyfeatures1/KeyfeaturesModule1.Components.scss';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  playroom: {
    url: 'http://localhost:9000',
  }
}


