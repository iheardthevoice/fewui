import DefaultTheme from 'vitepress/theme'
import ExampleFrame from './ExampleFrame.vue'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('ExampleFrame', ExampleFrame)
  },
}
